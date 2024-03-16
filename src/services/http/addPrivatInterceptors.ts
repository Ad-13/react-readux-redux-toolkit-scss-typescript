import { AxiosInstance } from 'axios';

import store from '@store/index';

import { logout } from '@reducers/auth/thunks';

import authApi from '@services/requests/auth';

import { getAccessToken, processToken } from '@utils/auth';
import handleInterceptorsError from '@utils/handleInterceptorsError';

const addPrivatInterceptors = (api: AxiosInstance): AxiosInstance => {
  api.interceptors.request.use(config => {
    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  api.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest?._retry) {
        originalRequest._retry = true;

        try {
          const response = await authApi.refreshJwtToken();
          processToken(response.data.accessToken);
          return api(originalRequest);
        } catch (refreshError: any) {
          await store.dispatch(logout());
          handleInterceptorsError(refreshError.response.data.errors);
          throw refreshError;
        }
      }
      handleInterceptorsError(error.response.data.errors);

      throw error;
    },
  );

  return api;
};

export default addPrivatInterceptors;
