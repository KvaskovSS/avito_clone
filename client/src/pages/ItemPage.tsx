import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, Chip, Grid, useMediaQuery } from '@mui/material';
import { ItemsService } from '../services/apiService';
import { Item } from '../types/types';

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
            src={item.image || '/placeholder.jpg'}
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
          <Typography variant="h3" gutterBottom>
            {item.name}
          </Typography>
          
          <Chip 
            label={item.type} 
            color="primary" 
            sx={{ mb: 2 }}
          />
          
          <Typography variant="h6" gutterBottom>
            Локация: {item.location}
          </Typography>

          {'propertyType' in item && (
            <Typography>Тип недвижимости: {item.propertyType}</Typography>
          )}
          
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Описание
            </Typography>
            <Typography variant="body1">{item.description}</Typography>
          </Box>

          <Button 
            variant="contained" 
            sx={{ mt: 4 }}
            onClick={() => navigate(`/form/${item.id}`)}
          >
            Редактировать
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemPage;