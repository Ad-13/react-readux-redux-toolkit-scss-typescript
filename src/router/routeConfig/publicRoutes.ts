import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import NotFoundPage from '@pages/NotFoundPage';
import RegisterPage from '@pages/RegisterPage';

import { ERouteNames, TRoute } from '../types';

const publicRoutes: TRoute[] = [
  { path: ERouteNames.HOME, key: ERouteNames.HOME, element: HomePage },
  { path: ERouteNames.LOGIN, key: ERouteNames.LOGIN, element: LoginPage },
  { path: ERouteNames.NOT_FOUND, key: ERouteNames.NOT_FOUND, element: NotFoundPage },
  { path: ERouteNames.REGISTER, key: ERouteNames.REGISTER, element: RegisterPage },
];

export default publicRoutes;
