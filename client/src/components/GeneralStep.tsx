import { TextField, MenuItem, Grid } from "@mui/material";
import { FormContext } from "./FormStepper";
import { useContext } from "react";

const GeneralStep = () => {
  const { formState, setFormState } = useContext(FormContext);

  return (
    <Grid container spacing={3}>
      {/* Название */}
      <Grid item xs={12} md={6}>
        <TextField
          label="Название"
          fullWidth
          value={formState.name || ""}
          onChange={(evt) =>
            setFormState((prev) => ({ ...prev, name: evt.target.value }))
          }
        />
      </Grid>

      {/* Категория */}
      <Grid item xs={12} md={6}>
        <TextField
          label="Категория"
          select
          fullWidth
          value={formState.type || ""}
          onChange={(evt) =>
            setFormState((prev) => ({ ...prev, type: evt.target.value }))
          }
        >
          <MenuItem value="">Выберите категорию</MenuItem>
          <MenuItem value="Недвижимость">Недвижимость</MenuItem>
          <MenuItem value="Авто">Авто</MenuItem>
          <MenuItem value="Услуги">Услуги</MenuItem>
        </TextField>
      </Grid>

      {/* Локация */}
      <Grid item xs={12} md={6}>
        <TextField
          label="Локация"
          fullWidth
          value={formState.location || ""}
          onChange={(evt) =>
            setFormState((prev) => ({ ...prev, location: evt.target.value }))
          }
        />
      </Grid>

      {/* Ссылка на изображение */}
      <Grid item xs={12} md={6}>
        <TextField
          label="Ссылка на изображение"
          fullWidth
          value={formState.image || ""}
          onChange={(evt) =>
            setFormState((prev) => ({ ...prev, image: evt.target.value }))
          }
        />
      </Grid>

      {/* Описание */}
      <Grid item xs={12}>
        <TextField
          label="Описание"
          multiline
          rows={4}
          fullWidth
          value={formState.description || ""}
          onChange={(evt) =>
            setFormState((prev) => ({ ...prev, description: evt.target.value }))
          }
        />
      </Grid>
    </Grid>
  );
};

export default GeneralStep;
