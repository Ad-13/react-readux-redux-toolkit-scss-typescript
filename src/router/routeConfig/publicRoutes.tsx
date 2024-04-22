import React from 'react';

import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import CartPage from '@pages/CartPage';
import CarsPage from '@pages/CarsPage';
import CarPage from '@pages/CarPage';
import TiresPage from '@pages/TiresPage';

import { ERouteNames } from '@enums/ERouteNames';
import { TRoute } from '@helpersTypes/TRoute';

const publicRoutes: TRoute[] = [
  { path: ERouteNames.NOT_FOUND, key: ERouteNames.NOT_FOUND, element: <NotFoundPage /> },
  { path: ERouteNames.HOME, key: ERouteNames.HOME, element: <HomePage /> },
  { path: ERouteNames.CART, key: ERouteNames.CART, element: <CartPage /> },
  { path: ERouteNames.CARS, key: ERouteNames.CARS, element: <CarsPage /> },
  { path: ERouteNames.CAR, key: ERouteNames.CAR, element: <CarPage /> },
  { path: ERouteNames.TIRES, key: ERouteNames.TIRES, element: <TiresPage /> },
];

export default publicRoutes;
