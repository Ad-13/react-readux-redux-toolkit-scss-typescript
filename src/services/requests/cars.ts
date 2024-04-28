import { TCar, TInputEditContactMessage } from '@helpersTypes/cars';
import { TId } from '@helpersTypes/TId';

import { publicApi, privateApi } from '../http';

const carsApi = {
  getCars: () => publicApi.get<TCar[]>('/cars'),
  getCarById: (id: TId) => publicApi.get<TCar>(`/cars/${id}`),
  addCar: (formData: FormData) => privateApi.post<TCar>('/cars', formData),
  updateCar: (formData: FormData) => privateApi.put<TCar>(`/cars/${formData.get('id')}`, formData),
  deleteCar: (id: TId) => privateApi.delete<TId>(`/cars/${id}`),
  createContactMessage: (model: TInputEditContactMessage) =>
    privateApi.post<void>(`/cars/${model.carId}/contact`, model),
};

export default carsApi;
