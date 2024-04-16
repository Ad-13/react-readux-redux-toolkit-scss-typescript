import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { EReducerName } from '@enums/EReducerName';
import { TCar } from '@helpersTypes/cars';

import { getCars, addCar, deleteCar, updateCar } from './thunks';

type TInitialState = {
  cars: TCar[];
  getPending: boolean;
  addPending: boolean;
  deletePending: boolean;
};

const initialState: TInitialState = {
  cars: [],
  getPending: false,
  addPending: false,
  deletePending: false,
};

const carsSlice = createSlice({
  name: EReducerName.cars,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCars.fulfilled, (state, { payload }) => {
      state.cars = payload;
      state.getPending = false;
    });
    builder.addCase(getCars.rejected, state => {
      state.getPending = false;
    });
    builder.addCase(getCars.pending, state => {
      state.getPending = true;
    });
    builder.addCase(deleteCar.fulfilled, (state, { payload }) => {
      state.cars = state.cars.filter(x => x.id === payload);
      state.deletePending = false;
    });
    builder.addCase(deleteCar.rejected, state => {
      state.deletePending = false;
    });
    builder.addCase(deleteCar.pending, state => {
      state.deletePending = true;
    });
    builder.addCase(addCar.fulfilled, (state, { payload }) => {
      state.cars = state.cars ? [...state.cars, payload] : [payload];
      state.addPending = false;
    });
    builder.addCase(addCar.rejected, state => {
      state.addPending = false;
    });
    builder.addCase(addCar.pending, state => {
      state.addPending = true;
    });
    builder.addCase(updateCar.fulfilled, (state, { payload }) => {
      state.cars = state.cars.map(x => (x.id === payload.id ? payload : x));
      state.addPending = false;
    });
    builder.addMatcher(isAnyOf(addCar.pending, updateCar.pending), state => {
      state.addPending = true;
    });
    builder.addMatcher(isAnyOf(addCar.rejected, updateCar.rejected), state => {
      state.addPending = false;
    });
  },
});

export default carsSlice.reducer;
