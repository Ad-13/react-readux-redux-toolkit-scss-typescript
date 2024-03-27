import React, { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AdminPage from '@pages/AdminPage';

import RootLayout from '@components/layout/RootLayout';

import { ERouteNames } from '@enums/ERouteNames';
import { useAppSelector } from '@hooks/useAppSelector';
import useIsAdmin from '@hooks/useIsAdmin';

import privateRoutes from './routeConfig/privateRoutes';
import publicRoutes from './routeConfig/publicRoutes';

const AppRouter: FC = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const isAdmin = useIsAdmin();

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

          {isAdmin && (
            <Route path={ERouteNames.ADMIN} key={ERouteNames.ADMIN} element={<AdminPage />} />
          )}

          <Route path={ERouteNames.OTHER} element={<Navigate to={ERouteNames.NOT_FOUND} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
