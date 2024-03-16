import { TCar } from '@helpersTypes/cars';

import { publicApi } from '../http';

const carsApi = {
  getCars: () => publicApi.get<TCar[]>('/cars'),
};

export default carsApi;
