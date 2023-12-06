import BasketPage from '@pages/BasketPage';
import CabinetPage from '@pages/CabinetPage';

import { TRoute, ERouteNames } from '../types';

const privateRoutes: TRoute[] = [
  { path: ERouteNames.CABINET, key: ERouteNames.HOME, element: CabinetPage },
  { path: ERouteNames.BASKET, key: ERouteNames.HOME, element: BasketPage },
];

export default privateRoutes;
