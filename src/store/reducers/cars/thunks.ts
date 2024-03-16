import { createAsyncThunk } from '@reduxjs/toolkit';

import carsApi from '@services/requests/cars';

import { EReducerName } from '@enums/EReducerName';

export const getCars = createAsyncThunk(`${EReducerName.cars}/getCars`, async () => {
  const { data } = await carsApi.getCars();
  return data;
});
