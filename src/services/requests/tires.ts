import { TTire } from '@helpersTypes/tires';
import { TId } from '@helpersTypes/TId';

import { publicApi, privateApi } from '../http';

const tiresApi = {
  getTires: () => publicApi.get<TTire[]>('/tires'),
  getTireById: (id: TId) => publicApi.get<TTire>(`/tires/${id}`),
  addTire: (formData: FormData) => privateApi.post<TTire>('/tires', formData),
  updateTire: (formData: FormData) =>
    privateApi.put<TTire>(`/tires/${formData.get('id')}`, formData),
  deleteTire: (id: TId) => privateApi.delete<TId>(`/tires/${id}`),
};

export default tiresApi;
