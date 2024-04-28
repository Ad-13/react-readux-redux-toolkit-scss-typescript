import { createAsyncThunk } from '@reduxjs/toolkit';

import carsApi from '@services/requests/cars';

import { showSuccess } from '@components/general/Toast/toastHeplers';

import { EReducerName } from '@enums/EReducerName';
import { TId } from '@helpersTypes/TId';
import { TInputEditContactMessage } from '@helpersTypes/cars';

export const getCars = createAsyncThunk(`${EReducerName.cars}/getCars`, async () => {
  const { data } = await carsApi.getCars();
  return data;
});

export const getCarById = createAsyncThunk(`${EReducerName.cars}/getCarById`, async (id: TId) => {
  const { data } = await carsApi.getCarById(id);
  return data;
});

export const addCar = createAsyncThunk(`${EReducerName.cars}/addCar`, async (payload: FormData) => {
  const { data } = await carsApi.addCar(payload);
  return data;
});

export const updateCar = createAsyncThunk(
  `${EReducerName.cars}/updateCar`,
  async (payload: FormData) => {
    const { data } = await carsApi.updateCar(payload);
    return data;
  },
);

export const deleteCar = createAsyncThunk(`${EReducerName.cars}/deleteCar`, async (id: TId) => {
  const { data } = await carsApi.deleteCar(id);
  return data;
});

export const createContactMessage = createAsyncThunk(
  `${EReducerName.cars}/createContactMessage`,
  async (payload: TInputEditContactMessage) => {
    const { data } = await carsApi.createContactMessage(payload);
    showSuccess('Seller will contact you!');
    return data;
  },
);
