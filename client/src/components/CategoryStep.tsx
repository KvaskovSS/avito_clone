import { Grid, TextField, MenuItem } from "@mui/material";
import { useContext } from "react";
import { FormContext } from "./FormStepper";

const CategoryStep = () => {
  const { formState, setFormState } = useContext(FormContext);

  const renderFields = () => {
    switch (formState.type) {
      case "Недвижимость":
        return (
          <>
            <Grid item xs={12} md={6}>
              <TextField
                label="Тип недвижимости"
                select
                fullWidth
                value={formState.propertyType}
                onChange={(evt) => {
                  setFormState((prev) => ({
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
            <Grid item xs={12} md={6}>
              <TextField
                label="Площадь (м²)"
                type="number"
                fullWidth
                value={formState.area}
                onChange={(evt) => {
                  setFormState((prev) => ({
                    ...prev,
                    area: evt.target.value,
                  }));
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Количество комнат"
                type="number"
                fullWidth
                value={formState.rooms}
                onChange={(evt) => {
                  setFormState((prev) => ({
                    ...prev,
                    rooms: evt.target.value,
                  }));
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Цена"
                type="number"
                fullWidth
                value={formState.price}
                onChange={(evt) => {
                  setFormState((prev) => ({
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
            <Grid item xs={12} md={6}>
              <TextField
                label="Марка"
                select
                fullWidth
                value={formState.brand}
                onChange={(evt) => {
                  setFormState((prev) => ({
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
            <Grid item xs={12} md={6}>
              <TextField
                label="Модель"
                fullWidth
                value={formState.model}
                onChange={(evt) => {
                  setFormState((prev) => ({
                    ...prev,
                    model: evt.target.value,
                  }));
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Год выпуска"
                type="number"
                fullWidth
                value={formState.year}
                onChange={(evt) => {
                  setFormState((prev) => ({
                    ...prev,
                    year: evt.target.value,
                  }));
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Пробег"
                type="number"
                fullWidth
                value={formState.mileage}
                onChange={(evt) => {
                  setFormState((prev) => ({
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
            <Grid item xs={12} md={6}>
              <TextField
                label="Тип услуги"
                select
                fullWidth
                value={formState.serviceType}
                onChange={(evt) => {
                  setFormState((prev) => ({
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
            <Grid item xs={12} md={6}>
              <TextField
                label="Опыт работы (лет)"
                type="number"
                fullWidth
                value={formState.experience}
                onChange={(evt) => {
                  setFormState((prev) => ({
                    ...prev,
                    experience: evt.target.value,
                  }));
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Стоимость"
                type="number"
                fullWidth
                value={formState.cost}
                onChange={(evt) => {
                  setFormState((prev) => ({
                    ...prev,
                    cost: evt.target.value,
                  }));
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Расписание работы"
                fullWidth
                value={formState.workShedule}
                onChange={(evt) => {
                  setFormState((prev) => ({
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
