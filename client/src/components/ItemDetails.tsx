import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Chip, useMediaQuery, Box } from '@mui/material';
import { Item } from '../types/types';
import { useNavigate } from 'react-router-dom';
import validateImage from '../utils/validateImage';

const ItemDetails: React.FC<{ item: Item }> = ({ item }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Card sx={{ 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row',
      height: '100%',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 3
      }
    }}>
      <CardMedia
        component="img"
        sx={{ 
          width: isMobile ? '100%' : 200,
          height: isMobile ? 200 : 'auto',
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
        {/* {'propertyType' in item && (
          <Typography variant="body2">Тип: {item.propertyType}</Typography>
        )} */}
        <Box sx={{ flexGrow: 1 }} />
        <Button 
          variant="outlined" 
          fullWidth 
          onClick={() => navigate(`/item/${item.id}`)}
          sx={{ mt: 2 }}
        >
          Подробнее
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemDetails;