import { createAsyncThunk } from '@reduxjs/toolkit';

import tiresApi from '@services/requests/tires';

import { EReducerName } from '@enums/EReducerName';
import { TId } from '@helpersTypes/TId';

export const getTires = createAsyncThunk(`${EReducerName.tires}/getTires`, async () => {
  const { data } = await tiresApi.getTires();
  return data;
});

export const addTire = createAsyncThunk(
  `${EReducerName.tires}/addTire`,
  async (payload: FormData) => {
    const { data } = await tiresApi.addTire(payload);
    return data;
  },
);

export const updateTire = createAsyncThunk(
  `${EReducerName.tires}/updateTire`,
  async (payload: FormData) => {
    const { data } = await tiresApi.updateTire(payload);
    return data;
  },
);

export const deleteTire = createAsyncThunk(`${EReducerName.tires}/deleteTire`, async (id: TId) => {
  const { data } = await tiresApi.deleteTire(id);
  return data;
});
