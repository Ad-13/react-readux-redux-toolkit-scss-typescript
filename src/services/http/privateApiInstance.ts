import axios, { AxiosInstance } from 'axios';

import { apiUrl } from '@constants/api';

import addPrivatInterceptors from './addPrivatInterceptors';

const privateApiInstance: AxiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

export const privateApi = addPrivatInterceptors(privateApiInstance);
