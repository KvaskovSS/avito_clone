import { Grid, TextField, MenuItem } from "@mui/material";
import { useContext } from "react";
import { FormContext } from "./FormStepper";
import { CurrentItem } from "../App";
import { Item } from "../types/types";

const CategoryStep = () => {
  const { formState, setFormState } = useContext(FormContext);
  const { currentState : item, setCurrentState: setItem }  = useContext(CurrentItem);
  
  const renderFields = () => {
    switch (formState.type || item.type) {
      case "Недвижимость":
        return (
          <>
            {/* Тип недвижимости */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Тип недвижимости"
                select
                fullWidth
                required 
                value={formState.propertyType || item.propertyType}
                onChange={(evt) => {
                  setFormState((prev: Item) => ({
                    ...prev,
                    propertyType: evt.target.value,
                  }));
                }}
              >
                <MenuItem value="Квартира">Квартира</MenuItem>
                <MenuItem value="Дом">Дом</MenuItem>
                <MenuItem value="Офис">Офис</MenuItem>
              </TextField>
            </Grid>
            {/* Площадь */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Площадь (м²)"
                type="number"
                fullWidth
                required 
                value={formState.area || item.area}
                onChange={(evt) => {
                  setFormState((prev: Item) => ({
                    ...prev,
                    area: evt.target.value,
                  }));
                }}
              />
            </Grid>
            {/* Количество комнат*/}
            <Grid item xs={12} md={6}>
              <TextField
                label="Количество комнат"
                type="number"
                fullWidth
                required 
                value={formState.rooms || item.rooms}
                onChange={(evt) => {
                  setFormState((prev: Item) => ({
                    ...prev,
                    rooms: evt.target.value,
                  }));
                }}
              />
            </Grid>
            {/* Цена */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Цена"
                type="number"
                fullWidth
                required 
                value={formState.price || item.price}
                onChange={(evt) => {
                  setFormState((prev: Item) => ({
                    ...prev,
                    price: evt.target.value,
                  }));
                }}
              />
            </Grid>
          </>
        );

      case "Авто":
        return (
          <>
          {/* Марка */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Марка"
                select
                fullWidth
                required
                value={formState.brand || item.brand}
                onChange={(evt) => {
                  setFormState((prev: Item) => ({
                    ...prev,
                    brand: evt.target.value,
                  }));
                }}
              >
                <MenuItem value="BMW">BMW</MenuItem>
                <MenuItem value="Toyota">Toyota</MenuItem>
                <MenuItem value="Ford">Ford</MenuItem>
              </TextField>
            </Grid>
            {/* Модель */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Модель"
                fullWidth
                required
                value={formState.model || item.model}
                onChange={(evt) => {
                  setFormState((prev: Item) => ({
                    ...prev,
                    model: evt.target.value,
                  }));
                }}
              />
            </Grid>
            {/* Год */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Год выпуска"
                type="number"
                fullWidth
                required 
                value={formState.year || item.year}
                onChange={(evt) => {
                  setFormState((prev: Item) => ({
                    ...prev,
                    year: evt.target.value,
                  }));
                }}
              />
            </Grid>
            {/* Пробег */}
            <Grid item xs={12} md={6}> {/*Очень странно тут написано что неоьязаетльное поле но api не принимает без него*/}
              <TextField
                label="Пробег" 
                type="number"
                fullWidth
                required
                value={formState.mileage || item.mileage}
                onChange={(evt) => {
                  setFormState((prev: Item) => ({
                    ...prev,
                    mileage: evt.target.value,
                  }));
                }}
              />
            </Grid>
          </>
        );

      case "Услуги":
        return (
          <>
          {/* Тип услуги */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Тип услуги"
                select
                fullWidth
                required 
                value={formState.serviceType || item.serviceType}
                onChange={(evt) => {
                  setFormState((prev: Item) => ({
                    ...prev,
                    serviceType: evt.target.value,
                  }));
                }}
              >
               <MenuItem value="Ремонт">Ремонт</MenuItem>
               <MenuItem value="Уборка">Уборка</MenuItem>
               <MenuItem value="Доставка">Доставка</MenuItem>
              </TextField>
            </Grid>
            {/* Опыт */}
            <Grid item xs={12} md={6}>
              <TextField
               label="Опыт работы (лет)"
               type="number"
               required
               fullWidth 
               value={formState.experience || item.experience}
               onChange={(evt) => {
                 setFormState((prev: Item) => ({
                   ...prev,
                   experience: evt.target.value,
                 }));
               }}
             />
           </Grid>
           {/* Название */}
           <Grid item xs={12} md={6}>
             <TextField
               label="Стоимость"
               type="number"
               fullWidth 
               required 
               value={formState.cost || item.cost}
               onChange={(evt) => {
                 setFormState((prev: Item) => ({
                   ...prev,
                   cost: evt.target.value,
                 }));
               }}
             />
           </Grid>
           {/* Расписание */}
           <Grid item xs={12} md={6}>
             <TextField
               label="Расписание работы"
               fullWidth 
               value={formState.workShedule || item.workShedule}
               onChange={(evt) => {
                 setFormState((prev: Item) => ({
                   ...prev,
                   workShedule: evt.target.value,
                 }));
               }}
             />
           </Grid>
         </>
       );

      default:
        return null;
    }
  };

  return (
    <Grid container spacing={3}>
      {renderFields()}
    </Grid>
  );
};

export default CategoryStep;
