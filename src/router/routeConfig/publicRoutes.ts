import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import CarsPage from '@pages/CarsPage';
import CartPage from '@pages/CartPage';

import { ERouteNames } from '@enums/ERouteNames';
import { TRoute } from '@helpersTypes/TRoute';

const publicRoutes: TRoute[] = [
  { path: ERouteNames.HOME, key: ERouteNames.HOME, element: HomePage },
  { path: ERouteNames.CARS, key: ERouteNames.CARS, element: CarsPage },
  { path: ERouteNames.CART, key: ERouteNames.CART, element: CartPage },
  { path: ERouteNames.NOT_FOUND, key: ERouteNames.NOT_FOUND, element: NotFoundPage },
];

export default publicRoutes;
