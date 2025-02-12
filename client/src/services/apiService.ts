import axios, { AxiosInstance } from 'axios';
import { Item } from '../types/types';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const ItemsService = {
  getAll: () => api.get<Item[]>('/items'),
  getById: (id: number) => api.get<Item>(`/items/${id}`),
  create: (item: Omit<Item, 'id'>) => api.post<Item>('/items', item),
  update: (id: number, item: Partial<Item>) => api.put<Item>(`/items/${id}`, item),
  delete: (id: number) => api.delete(`/items/${id}`),
};