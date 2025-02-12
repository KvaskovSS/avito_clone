import { TextField, MenuItem, useMediaQuery, Grid2, Grid } from "@mui/material";
import { FormContext } from "./FormStepper";
import { useContext } from "react";

const GeneralStep = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { formState, setFormState } = useContext(FormContext);

  return (
    <Grid2 container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          label="Название"
          fullWidth
          value={formState.userName}
          onChange={(evt) => {
            setFormState((prev) => ({
              ...prev,
              name: evt.target.value,
            }));
          }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Категория"
          select
          fullWidth
          value={formState.type}
          onChange={(evt) => {
            setFormState((prev) => ({
              ...prev,
              type: evt.target.value,
            }));
          }}
        >
          <MenuItem value="Недвижимость">Недвижимость</MenuItem>
          <MenuItem value="Авто">Авто</MenuItem>
          <MenuItem value="Услуги">Услуги</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Локация"
          fullWidth
          value={formState.location}
          onChange={(evt) => {
            setFormState((prev) => ({
              ...prev,
              location: evt.target.value,
            }));
          }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Ссылка на изображение"
          fullWidth
          value={formState.image}
          onChange={(evt) => {
            setFormState((prev) => ({
              ...prev,
              image: evt.target.value,
            }));
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          label="Описание"
          multiline
          rows={isMobile ? 3 : 5}
          fullWidth
          value={formState.description}
          onChange={(evt) => {
            setFormState((prev) => ({
              ...prev,
              description: evt.target.value,
            }));
          }}
        />
      </Grid>
    </Grid2>
  );
};

export default GeneralStep;
