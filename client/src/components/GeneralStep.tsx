import { useFormContext } from 'react-hook-form';
import { TextField, MenuItem, useMediaQuery, Grid2, Grid } from '@mui/material';

const GeneralStep = () => {
  const { register, formState: { errors } } = useFormContext();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Grid2 container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          label="Название"
          fullWidth
          {...register('name', { required: 'Обязательное поле' })}
          error={!!errors.name}
          helperText={errors.name?.message?.toString()}
        />
      </Grid>
      
      <Grid item xs={12} md={6}>
        <TextField
          label="Категория"
          select
          fullWidth
          defaultValue="Недвижимость"
          {...register('type', { required: 'Обязательное поле' })}
          error={!!errors.type}
          helperText={errors.type?.message?.toString()}
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
          {...register('location', { required: 'Обязательное поле' })}
          error={!!errors.location}
          helperText={errors.location?.message?.toString()}
        /> 
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Ссылка на изображение"
          fullWidth
          {...register('image')}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          label="Описание"
          multiline
          rows={isMobile ? 3 : 5}
          fullWidth
          {...register('description', { 
            required: 'Обязательное поле',
            minLength: { value: 20, message: 'Минимум 20 символов' }
          })}
          error={!!errors.description}
          helperText={errors.description?.message?.toString()}
        />
      </Grid>
    </Grid2>
  );
};

export default GeneralStep;