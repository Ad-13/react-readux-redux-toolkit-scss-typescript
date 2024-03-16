import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { RootState } from '@store/rootReducer';

import RootLayout from '@components/layout/RootLayout';

import { ERouteNames } from '@enums/ERouteNames';

import privateRoutes from './routeConfig/privateRoutes';
import publicRoutes from './routeConfig/publicRoutes';

const AppRouter: FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          {isAuthenticated &&
            privateRoutes.map(route => (
              <Route
                path={route.path}
                element={React.createElement(route.element, {})}
                key={route.path}
              />
            ))}

          {publicRoutes.map(route => (
            <Route
              path={route.path}
              element={React.createElement(route.element, {})}
              key={route.path}
            />
          ))}

          <Route path={ERouteNames.OTHER} element={<Navigate to={ERouteNames.NOT_FOUND} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
