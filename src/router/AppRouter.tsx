import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RootState } from '@store/index';

import RootLayout from '@features/RootLayout';

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
              <Route path={route.path} element={React.createElement(route.element, {})} key={route.path} />
            ))}

          {publicRoutes.map(route => (
            <Route path={route.path} element={React.createElement(route.element, {})} key={route.path} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
