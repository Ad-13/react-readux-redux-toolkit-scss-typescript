import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { EReducerName } from '@enums/EReducerName';
import { TLoggedUser } from '@helpersTypes/TUser';
import { getDataFromToken } from '@utils/auth';

import { login, logout, refresh, register } from './thunks';

type TInitialState = {
  currentUser: TLoggedUser | null;
  isAuthenticated: boolean;
  pending: boolean;
};

const initialState: TInitialState = {
  currentUser: null,
  isAuthenticated: false,
  pending: false,
};

const authSlice = createSlice({
  name: EReducerName.auth,
  initialState,
  reducers: {
    saveTokenInfo: (state, { payload }) => {
      state.currentUser = getDataFromToken(payload);
      state.isAuthenticated = true;
    },
  },
  extraReducers: builder => {
    builder.addCase(logout.rejected, state => {
      state.pending = false;
    });
    builder.addCase(logout.fulfilled, state => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.pending = false;
    });
    builder.addMatcher(
      isAnyOf(login.fulfilled, register.fulfilled, refresh.fulfilled),
      (state, { payload }) => {
        state.isAuthenticated = true;
        state.pending = false;
        state.currentUser = payload;
      },
    );
    builder.addMatcher(isAnyOf(login.rejected, register.rejected, refresh.rejected), state => {
      console.log('rejected');
      state.isAuthenticated = false; // TODO: clear store after logout
      state.pending = false;
    });
    builder.addMatcher(
      isAnyOf(login.pending, logout.pending, register.pending, refresh.pending),
      state => {
        state.pending = true;
      },
    );
  },
});

export const { saveTokenInfo } = authSlice.actions;
export default authSlice.reducer;
