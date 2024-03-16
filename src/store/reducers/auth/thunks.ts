import { createAsyncThunk } from '@reduxjs/toolkit';

import authApi from '@services/requests/auth';

import { removeAccessToken, processToken } from '@utils/auth';
import { TLoginRequest, TRegisterRequest } from '@helpersTypes/auth';
import { EReducerName } from '@enums/EReducerName';

export const logout = createAsyncThunk(`${EReducerName.auth}/logout`, async () => {
  await authApi.logout();
  removeAccessToken();
});

export const login = createAsyncThunk(
  `${EReducerName.auth}/login`,
  async (payload: TLoginRequest) => {
    const res = await authApi.login(payload);
    return processToken(res.data.accessToken);
  },
);

export const register = createAsyncThunk(
  `${EReducerName.auth}/register`,
  async (payload: TRegisterRequest) => {
    const res = await authApi.register(payload);
    return processToken(res.data.accessToken);
  },
);

export const refresh = createAsyncThunk(`${EReducerName.auth}/refresh`, async () => {
  const res = await authApi.refreshJwtToken();
  return processToken(res.data.accessToken);
});
