import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import FormStepper from '../components/FormStepper';
import { ItemsService } from '../services/apiService';
import { Item } from '../types/types';

const FormPage: React.FC = () => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const methods = useForm<Item>();

  useEffect(() => {
    const loadItem = async () => {
      if (id) {
        try {
          const { data } = await ItemsService.getById(Number(id));
          methods.reset(data);
          setIsEditing(true);
        } catch (error) {
          console.error('Error loading item:', error);
          navigate('/');
        }
      }
      setLoading(false);
    };
    loadItem();
  }, [id, methods, navigate]);

  useEffect(() => {
    const draft = localStorage.getItem('draft');
    if (draft && !id) {
      methods.reset(JSON.parse(draft));
    }
  }, []);
  
  useEffect(() => {
    const saveDraft = () => {
      localStorage.setItem('draft', JSON.stringify(methods.getValues()));
    };
    window.addEventListener('beforeunload', saveDraft);
    return () => window.removeEventListener('beforeunload', saveDraft);
  }, [methods]);

  const onSubmit = async (data: Item) => {
    try {
      if (isEditing && id) {
        await ItemsService.update(Number(id), data);
      } else {
        await ItemsService.create(data);
      }
      navigate('/list');
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {isEditing ? 'Редактирование объявления' : 'Новое объявление'}
      </Typography>
      
      <FormProvider {...methods}>
        <FormStepper onSubmit={onSubmit} isEditing={isEditing} />
      </FormProvider>
    </Container>
  );
};

export default FormPage;