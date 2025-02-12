import React, { createContext, useState } from "react";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import GeneralStep from "./GeneralStep";
import CategoryStep from "./CategoryStep";
import createObject from "../utils/objectCreator";

export const FormContext = createContext({});

const FormStepper: React.FC<{
  onSubmit: (data: any) => void;
  isEditing: boolean;
}> = ({ onSubmit, isEditing }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Основная информация", "Детали категории"];

  const [formState, setFormState] = useState({
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
  });

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

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
            variant="outlined"
          >
            Назад
          </Button>

          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={() =>
                onSubmit(createObject(formState.type, formState))
              }
            >
              {isEditing ? "Сохранить изменения" : "Опубликовать"}
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNext}>
              Далее
            </Button>
          )}
        </Box>
      </Box>
    </FormContext.Provider>
  );
};

export default FormStepper;
