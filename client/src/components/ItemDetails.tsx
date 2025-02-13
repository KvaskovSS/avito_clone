import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Chip, Box } from '@mui/material';
import { Item } from '../types/types';
import { useNavigate } from 'react-router-dom';
import validateImage from '../utils/validateImage';

const ItemDetails: React.FC<{ item: Item }> = ({ item }) => {
  const navigate = useNavigate();
  // const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Card 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%', 
        transition: 'transform 0.2s',
        cursor: 'pointer', 
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 3
        }
      }}
      onClick={() => navigate(`/item/${item.id}`)} // Переход при клике на всю карточку
    >
      <CardMedia
        component="img"
        sx={{ 
          width: '100%', 
          height: 350,
          objectFit: 'cover' 
        }}
        src={validateImage(item.image) ? item.image : '/placeholder.jpg'}
        alt={item.name}
      />
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" gutterBottom>{item.name}</Typography>
        <Chip 
          label={item.type} 
          color="primary" 
          size="small" 
          sx={{ alignSelf: 'flex-start', mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {item.location}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
        
        <Button 
          variant="outlined" 
          fullWidth 
          sx={{ mt: 2 }}
          onClick={(e) => {
            e.stopPropagation(); // Остановить всплытие события, если кликнули на кнопку
            navigate(`/item/${item.id}`);
          }}
        >
          Подробнее
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemDetails;
