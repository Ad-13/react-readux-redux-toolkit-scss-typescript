import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { EReducerName } from '@enums/EReducerName';
import { TTire } from '@helpersTypes/tires';

import { getTires, addTire, deleteTire, updateTire } from './thunks';

type TInitialState = {
  tires: TTire[];
  getPending: boolean;
  addPending: boolean;
  deletePending: boolean;
};

const initialState: TInitialState = {
  tires: [],
  getPending: false,
  addPending: false,
  deletePending: false,
};

const tiresSlice = createSlice({
  name: EReducerName.tires,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTires.fulfilled, (state, { payload }) => {
      state.tires = payload;
      state.getPending = false;
    });
    builder.addCase(getTires.rejected, state => {
      state.getPending = false;
    });
    builder.addCase(getTires.pending, state => {
      state.getPending = true;
    });
    builder.addCase(deleteTire.fulfilled, (state, { payload }) => {
      state.tires = state.tires.filter(x => x.id === payload);
      state.deletePending = false;
    });
    builder.addCase(deleteTire.rejected, state => {
      state.deletePending = false;
    });
    builder.addCase(deleteTire.pending, state => {
      state.deletePending = true;
    });
    builder.addCase(addTire.fulfilled, (state, { payload }) => {
      state.tires = state.tires ? [...state.tires, payload] : [payload];
      state.addPending = false;
    });
    builder.addCase(addTire.rejected, state => {
      state.addPending = false;
    });
    builder.addCase(addTire.pending, state => {
      state.addPending = true;
    });
    builder.addCase(updateTire.fulfilled, (state, { payload }) => {
      state.tires = state.tires.map(x => (x.id === payload.id ? payload : x));
      state.addPending = false;
    });
    builder.addMatcher(isAnyOf(addTire.pending, updateTire.pending), state => {
      state.addPending = true;
    });
    builder.addMatcher(isAnyOf(addTire.rejected, updateTire.rejected), state => {
      state.addPending = false;
    });
  },
});

export default tiresSlice.reducer;
