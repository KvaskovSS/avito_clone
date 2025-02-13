import { TextField, MenuItem, Grid } from "@mui/material";
import { FormContext } from "./FormStepper";
import { useContext } from "react";
import { Item } from "../types/types";
import { CurrentItem } from "../App";

const GeneralStep = () => {
  const { formState, setFormState } = useContext(FormContext);
  const { currentState : item, setCurrentState: setItem }  = useContext(CurrentItem);
  return (
    <Grid container spacing={3}>
      {/* Название */}
      <Grid item xs={12} md={6}>
        <TextField
          label="Название"
          fullWidth
          required 
          value={formState.name || item.name || ""}
          onChange={(evt) =>
            setFormState((prev: Item) => ({ ...prev, name: evt.target.value }))
          }
        />
      </Grid>

      {/* Категория */}
      <Grid item xs={12} md={6}>
        <TextField
          label="Категория"
          select
          fullWidth
          required 
          value={formState.type || item.type || ""}
          onChange={(evt) =>
            setFormState((prev: Item) => ({ ...prev, type: evt.target.value }))
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
          required 
          value={formState.location || item.location || ""}
          onChange={(evt) =>
            setFormState((prev: Item) => ({ ...prev, location: evt.target.value }))
          }
        />
      </Grid>

      {/* Ссылка на изображение */}
      <Grid item xs={12} md={6}>
        <TextField
          label="Ссылка на изображение" 
          fullWidth
          value={formState.image || item.image || ""}
          onChange={(evt) =>
            setFormState((prev: Item) => ({ ...prev, image: evt.target.value }))
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
          required
          value={formState.description || item.description || ""}
          onChange={(evt) =>
            setFormState((prev: Item) => ({ ...prev, description: evt.target.value }))
          }
        />
      </Grid>
    </Grid>
  );
};

export default GeneralStep;
 