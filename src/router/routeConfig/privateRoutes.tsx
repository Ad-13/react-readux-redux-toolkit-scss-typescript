import React from 'react';

import CabinetPage from '@pages/CabinetPage';

import { ERouteNames } from '@enums/ERouteNames';
import { TRoute } from '@helpersTypes/TRoute';

const privateRoutes: TRoute[] = [
  { path: ERouteNames.CABINET, key: ERouteNames.CABINET, element: <CabinetPage /> },
];

export default privateRoutes;
