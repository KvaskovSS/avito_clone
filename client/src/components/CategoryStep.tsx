import { useFormContext } from 'react-hook-form';
import { Grid, TextField, MenuItem } from '@mui/material';

const CategoryStep = () => {
    const { register, watch, formState: { errors } } = useFormContext();
    const type = watch('type');

    const renderFields = () => {
        switch (type) {
            case 'Недвижимость':
                return (
                    <>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Тип недвижимости"
                                select
                                fullWidth
                                {...register('propertyType', { required: 'Обязательное поле' })}
                                error={!!errors.propertyType}
                                helperText={errors.propertyType?.message?.toString()}
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
                                {...register('area', {
                                    required: 'Обязательное поле',
                                    min: { value: 1, message: 'Минимум 1 м²' }
                                })}
                                error={!!errors.area}
                                helperText={errors.area?.message?.toString()}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Количество комнат"
                                type="number"
                                fullWidth
                                {...register('rooms', {
                                    required: 'Обязательное поле',
                                    min: { value: 1, message: 'Минимум 1 комната' }
                                })}
                                error={!!errors.area}
                                helperText={errors.area?.message?.toString()}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Цена"
                                type="number"
                                fullWidth
                                {...register('price', {
                                    required: 'Обязательное поле',
                                    min: { value: 10000, message: 'Минимум 10000 ' }
                                })}
                                error={!!errors.area}
                                helperText={errors.area?.message?.toString()}
                            />
                        </Grid>
                    </>
                );

            case 'Авто':
                return (
                    <>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Марка"
                                select
                                fullWidth
                                {...register('brand', { required: 'Обязательное поле' })}
                                error={!!errors.propertyType}
                                helperText={errors.propertyType?.message?.toString()}
                            >
                                <MenuItem value="Квартира">BMW</MenuItem>
                                <MenuItem value="Дом">Toyota</MenuItem>
                                <MenuItem value="Офис">Ford</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Модель"
                                fullWidth
                                {...register('model', { required: 'Обязательное поле' })}
                                error={!!errors.location}
                                helperText={errors.location?.message?.toString()}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Год выпуска"
                                type="number"
                                fullWidth
                                {...register('year', {
                                    required: 'Обязательное поле',
                                    min: { value: 1700, message: 'Их вроде еще не было :)' }
                                })}
                                error={!!errors.area}
                                helperText={errors.area?.message?.toString()}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Пробег"
                                type="number"
                                fullWidth
                                {...register('mileage', {
                                    required: 'Не обязательное поле',
                                    min: { value: 1, message: 'Миниум 1 км' }
                                })}
                                error={!!errors.area}
                                helperText={errors.area?.message?.toString()}
                            />
                        </Grid>
                    </>
                );

            case 'Услуги':
                return (
                    <>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Тип услуги"
                                select
                                fullWidth
                                {...register('serviceType', { required: 'Обязательное поле' })}
                                error={!!errors.serviceType}
                                helperText={errors.serviceType?.message?.toString()}
                            >
                                <MenuItem value="Ремонт">Ремонт</MenuItem>
                                <MenuItem value="Уборка">Уборка</MenuItem>
                                <MenuItem value="Уборка">Доствака</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Опыт работы (лет)"
                                type="number"
                                fullWidth
                                {...register('experience', {
                                    required: 'Обязательное поле',
                                    min: { value: 1, message: 'Минимум 1 м²' }
                                })}
                                error={!!errors.area}
                                helperText={errors.area?.message?.toString()}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Стоимость"
                                type="number"
                                fullWidth
                                {...register('cost', {
                                    required: 'Обязательное поле',
                                    min: { value: 1000, message: 'Минимум 1000' }
                                })}
                                error={!!errors.area}
                                helperText={errors.area?.message?.toString()}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Расписаие работы"
                                fullWidth
                                {...register('workSchedule', { required: 'Обязательное поле' })}
                                error={!!errors.location}
                                helperText={errors.location?.message?.toString()}
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