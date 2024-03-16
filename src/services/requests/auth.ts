import axios from 'axios';

import { apiUrl } from '@constants/api';
import { TAuthResponse } from '@helpersTypes/auth';
import { TLoginRequest, TRegisterRequest } from '@helpersTypes/auth';
import { TUserLoginData } from '@helpersTypes/TUserLoginData';

import { privateApi, publicApi } from '../http';

const authApi = {
  logout: () => privateApi.post('/auth/logout'),
  login: (model: TLoginRequest) => privateApi.post<TUserLoginData>('/auth/login', model),
  register: (model: TRegisterRequest) =>
    publicApi.post<TUserLoginData>('/auth/registration', model),
  refreshJwtToken: () =>
    axios.get<TAuthResponse>(`${apiUrl}/auth/refresh`, { withCredentials: true }),
};

export default authApi;
