import { AxiosInstance } from 'axios';

import handleInterceptorsError from '@utils/handleInterceptorsError';

const addPublicInterceptors = (api: AxiosInstance): AxiosInstance => {
  api.interceptors.response.use(
    response => response,
    async error => {
      handleInterceptorsError(error.response.data.errors);

      throw error;
    },
  );

  return api;
};

export default addPublicInterceptors;
