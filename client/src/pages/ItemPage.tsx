import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid, useMediaQuery, Paper } from '@mui/material';
import { ItemsService } from '../services/apiService';
import { Item } from '../types/types'; 
import validateImage from '../utils/validateImage';

const ItemPage: React.FC = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const fetchItem = async () => {
      if (id) {
        try {
          const { data } = await ItemsService.getById(Number(id));
          setItem(data);
        } catch (error) {
          console.error('Error fetching item:', error);
          navigate('/');
        }
      }
      setLoading(false);
    };
    fetchItem();
  }, [id, navigate]);

  if (loading) return <div>Loading...</div>;
  if (!item) return <div>Объявление не найдено</div>;

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Button 
        variant="outlined" 
        onClick={() => navigate(-1)}
        sx={{ mb: 4 }}
      >
        Назад к списку
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={validateImage(item.image) ? item.image : '/placeholder.jpg'}
            alt={item.name}
            sx={{
              width: '100%',
              height: isMobile ? 300 : 400,
              borderRadius: 2,
              objectFit: 'cover'
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
            <Typography variant="h3" gutterBottom>
              {item.name}
            </Typography>
            <Typography variant="h4" gutterBottom>
              {item.type}
            </Typography>      
            
            <Typography variant="h5" gutterBottom>
              Локация: {item.location}
            </Typography>

            <Typography variant="h6" gutterBottom>
              Описание: {item.description}
            </Typography>

            {item.type === 'Недвижимость' && (
              <>
                {'propertyType' in item && item.propertyType && (
                  <Typography>Тип недвижимости: {item.propertyType}</Typography>
                )}
                {'area' in item && item.area && (
                  <Typography>Площадь: {item.area}</Typography>
                )}
                {'rooms' in item && item.rooms && (
                  <Typography>Комнат: {item.rooms}</Typography>
                )}
                {'price' in item && item.price && (
                  <Typography>Цена: {item.price}</Typography>
                )}
              </>
            )}

            {item.type === 'Авто' && (
              <>
                {'brand' in item && item.brand && (
                  <Typography>Марка: {item.brand}</Typography>
                )}
                {'model' in item && item.model && (
                  <Typography>Модель: {item.model}</Typography>
                )}
                {'year' in item && item.year && (
                  <Typography>Год выпуска: {item.year}</Typography>
                )}
                {'mileage' in item && item.mileage && (
                  <Typography>Пробег: {item.mileage}</Typography>
                )}
              </>
            )}

            {item.type === 'Услуги' && (
              <>
                {'serviceType' in item && item.serviceType && (
                  <Typography>Тип услуги: {item.serviceType}</Typography>
                )}
                {'experience' in item && item.experience && (
                  <Typography>Опыт: {item.experience}</Typography>
                )}
                {'cost' in item && item.cost && (
                  <Typography>Стоимость: {item.cost}</Typography>
                )}
                {'workSchedule' in item && item.workSchedule && (
                  <Typography>Расписание: {item.workSchedule}</Typography>
                )}
              </>
            )}

            <Button 
              variant="contained" 
              sx={{ mt: 4 }}
              onClick={() => navigate(`/form/${item.id}`)}
            >
              Редактировать
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemPage;
