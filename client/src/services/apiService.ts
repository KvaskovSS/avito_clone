import axios, { AxiosInstance } from 'axios';


const API_BASE_URL = 'http://localhost:3000'; 

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // Таймаут запроса
});


apiClient.interceptors.request.use(
  (config) => {
    console.log('Отправка запроса:', config.url);
    return config;
  },
  (error) => {
    console.error('Ошибка при отправке запроса:', error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    console.log('Получен ответ:', response.config.url);
    return response.data; 
  },
  (error) => {
    console.error('Ошибка при получении ответа:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);


export const createItem = async (itemData: any) => {
  const response = await apiClient.post('/items', itemData);
  return response;
};

export const getItems = async () => {
  const response = await apiClient.get('/items');
  return response;
};

export const getItemById = async (id: number) => {
  const response = await apiClient.get(`/items/${id}`);
  return response;
};

export const updateItem = async (id: number, updatedData: any) => {
  const response = await apiClient.put(`/items/${id}`, updatedData);
  return response;
};

export const deleteItem = async (id: number) => {
  const response = await apiClient.delete(`/items/${id}`);
  return response;
};