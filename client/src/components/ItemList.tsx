import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, Pagination, Select, MenuItem, Container, Box, Button, Grid2 } from '@mui/material';
import { ItemsService } from '../services/apiService';
import ItemDetails from '../components/ItemDetails';
import { Item } from '../types/types';

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('all');
  const navigate = useNavigate();

  useEffect(() => {
    const loadItems = async () => {
      try {
        const { data } = await ItemsService.getAll();
        setItems(data);
      } catch (error) {
        console.error('Error loading items:', error);
      }
    };
    loadItems();
  }, []);

  const filteredItems = items
    .filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'all' || item.type === category)
    );

  const paginatedItems = filteredItems.slice((page - 1) * 5, page * 5);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', gap: 2, mb: 4, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          label="Поиск объявлений"
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value as string)}
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="all">Все категории</MenuItem>
          <MenuItem value="Недвижимость">Недвижимость</MenuItem>
          <MenuItem value="Авто">Авто</MenuItem>
          <MenuItem value="Услуги">Услуги</MenuItem>
        </Select>

        <Button 
          variant="contained" 
          onClick={() => navigate('/form')}
          sx={{ whiteSpace: 'wrap', 
            color: 'black'
          }}
        >
          Разместить объявление
        </Button>
      </Box>

      <Grid2 container spacing={3}>
        {paginatedItems.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <ItemDetails item={item} />
          </Grid>
        ))}
      </Grid2>

      {filteredItems.length > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={Math.ceil(filteredItems.length / 5)}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
          />
        </Box>
      )}
    </Container>
  );
};

export default ItemList;