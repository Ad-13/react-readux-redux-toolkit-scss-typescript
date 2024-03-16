import axios, { AxiosInstance } from 'axios';

import { apiUrl } from '@constants/api';

import addPublicInterceptors from './addPublicInterceptors';

const publicApiInstance: AxiosInstance = axios.create({
  baseURL: apiUrl,
});

export const publicApi = addPublicInterceptors(publicApiInstance);
