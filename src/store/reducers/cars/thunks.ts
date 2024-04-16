import { createAsyncThunk } from '@reduxjs/toolkit';

import carsApi from '@services/requests/cars';

import { EReducerName } from '@enums/EReducerName';
import { TId } from '@helpersTypes/TId';

export const getCars = createAsyncThunk(`${EReducerName.cars}/getCars`, async () => {
  const { data } = await carsApi.getCars();
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
