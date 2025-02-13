import React, { createContext, useContext, useEffect, useState } from "react";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import GeneralStep from "./GeneralStep";
import CategoryStep from "./CategoryStep";
import createObject from "../utils/objectCreator";
import isPublishDisabled from "../utils/publishButtonDisabler";
import isNextDisabled from "../utils/nextButtonDiasabler";
import { Item } from "../types/types";
import { CurrentItem } from "../App";

export const FormContext = createContext({} as Item);

const initialState = {
  name: "",
  type: "",
  location: "",
  image: "",
  description: "",
  propertyType: "",
  area: "",
  rooms: "",
  price: "",
  brand: "",
  model: "",
  year: "",
  mileage: "",
  serviceType: "",
  experience: "",
  cost: "",
  workShedule: "",
};

const FormStepper: React.FC<{
  onSubmit: (data: Item) => void;
  isEditing: boolean;
}> = ({ onSubmit, isEditing }) => {
  const [activeStep, setActiveStep] = useState(0);
  const { currentState: item, setCurrentState: setItem } = useContext(CurrentItem);
  const steps = ["Основная информация", "Детали категории"];
  
  const [formState, setFormState] = useState(() => {
    if (isEditing && item) {
      return { ...initialState, ...item };
    }
    const savedData = localStorage.getItem("draft");
    return savedData ? JSON.parse(savedData) : { ...initialState };
  });

  // Автосохранение только для нового создания (не для редактирования)
  useEffect(() => {
    if (!isEditing) {
      localStorage.setItem("draft", JSON.stringify(formState));
    }
  }, [formState, isEditing]);

  // Загрузка черновика только при создании нового объекта
  useEffect(() => {
    if (!isEditing) {
      const data = localStorage.getItem("draft");
      if (data) setFormState(JSON.parse(data));
    }
  }, [isEditing]);

  const handleSubmit = () => {
    const newItem = createObject(formState.type, formState);
    onSubmit(newItem);
    
    localStorage.removeItem("draft");
    setFormState({ ...initialState });
    
    if (isEditing) {
      setItem({ ...initialState }); 
      setActiveStep(0);
    }
  };

  const handleNext = () => setActiveStep(prev => prev + 1);
  const handleBack = () => setActiveStep(prev => prev - 1);

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 && <GeneralStep />}
        {activeStep === 1 && <CategoryStep isEditing={isEditing} />}

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="contained"
            color="primary"
            sx={{ flexGrow: 1, mr: 1 }}
          >
            Назад
          </Button>

          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={isPublishDisabled(formState)}
              color="primary"
              sx={{ flexGrow: 1, ml: 1 }}
            >
              {isEditing ? "Сохранить изменения" : "Опубликовать"}
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={isNextDisabled(formState)}
              color="primary"
              sx={{ flexGrow: 1 }}
            >
              Далее
            </Button>
          )}
        </Box>
      </Box>
    </FormContext.Provider>
  );
};

export default FormStepper;