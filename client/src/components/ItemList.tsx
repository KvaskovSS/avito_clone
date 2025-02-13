import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, Pagination, Select, MenuItem, Container, Box, Button, InputLabel, FormControl } from '@mui/material';
import { ItemsService } from '../services/apiService';
import ItemDetails from '../components/ItemDetails';
import { Item } from '../types/types';

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('all');
  const [additionalFilters, setAdditionalFilters] = useState<{ [key: string]: string }>({});
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleAdditionalFilterChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setAdditionalFilters({
      ...additionalFilters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredItems = items
    .filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'all' || item.type === category) &&
      Object.keys(additionalFilters).every(key =>
        !additionalFilters[key] || item[key].toString().includes(additionalFilters[key])
      )
    );

  const paginatedItems = filteredItems.slice((page - 1) * 5, page * 5);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleCategoryChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(e.target.value as string);
    setPage(1);
    setAdditionalFilters({});
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', gap: 2, mb: 4, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          label="Поиск объявлений"
          variant="outlined"
          fullWidth
          value={search}
          onChange={handleSearchChange}
        />
        
        <Select
          value={category}
          onChange={handleCategoryChange}
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
          sx={{ whiteSpace: 'wrap', color: 'black' }}
        >
          Разместить объявление
        </Button>
      </Box>

      {/* Дополнительные фильтры */}
      {category === 'Недвижимость' && (
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Количество комнат"
            variant="outlined"
            name="rooms"
            value={additionalFilters.rooms || ''}
            onChange={handleAdditionalFilterChange}
            sx={{ mr: 2 }}
          />
          <TextField
            label="Площадь (м²)"
            variant="outlined"
            name="area"
            value={additionalFilters.area || ''}
            onChange={handleAdditionalFilterChange}
            sx={{ mr: 2 }}
          />
        </Box>
      )}

      {category === 'Авто' && (
        <Box sx={{ mb: 2 }}>
          <FormControl variant="outlined" sx={{ mr: 2, minWidth: 240 }}>
            <InputLabel>Марка</InputLabel>
            <Select
              label="Марка"
              name="brand"
              value={additionalFilters.brand || ''}
              onChange={handleAdditionalFilterChange}
            >
              <MenuItem value="">Выберите марку</MenuItem>
              <MenuItem value="BMW">BMW</MenuItem>
              <MenuItem value="Toyota">Toyota</MenuItem>
              <MenuItem value="Ford">Ford</MenuItem>
            </Select>
          </FormControl>
          
          <TextField
            label="Год выпуска"
            variant="outlined"
            name="year"
            value={additionalFilters.year || ''}
            onChange={handleAdditionalFilterChange}
            sx={{ mr: 2 }}
          />
        </Box>
      )}

      {category === 'Услуги' && (
        <Box sx={{ mb: 2 }}>
          <FormControl variant="outlined" sx={{ mr: 2, minWidth: 240 }}>
            <InputLabel>Тип услуги</InputLabel>
            <Select
              label="Тип услуги"
              name="serviceType"
              value={additionalFilters.serviceType || ''}
              onChange={handleAdditionalFilterChange}
            >
              <MenuItem value="">Выберите тип услуги</MenuItem>
              <MenuItem value="Ремонт">Ремонт</MenuItem>
              <MenuItem value="Уборка">Уборка</MenuItem>
              <MenuItem value="Доставка">Доставка</MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}

      <Grid container spacing={3}>
        {paginatedItems.map(item => (
          <Grid item xs={12} sm={6} md={6} key={item.id}>
            <ItemDetails item={item} />
          </Grid>
        ))}
      </Grid>

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
