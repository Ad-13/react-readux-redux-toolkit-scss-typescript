import { createSlice } from '@reduxjs/toolkit';

import { EReducerName } from '@enums/EReducerName';
import { TCar } from '@helpersTypes/cars';

import { getCars } from './thunks';

type TInitialState = {
  cars: TCar[] | null;
  pending: boolean;
};

const initialState: TInitialState = {
  cars: null,
  pending: false,
};

const carsSlice = createSlice({
  name: EReducerName.cars,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCars.fulfilled, (state, { payload }) => {
      state.cars = payload;
      state.pending = false;
    });
    builder.addCase(getCars.rejected, state => {
      state.pending = false;
    });
    builder.addCase(getCars.pending, state => {
      state.pending = true;
    });
  },
});

export default carsSlice.reducer;
