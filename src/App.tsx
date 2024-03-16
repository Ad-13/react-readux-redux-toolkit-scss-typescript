import React from 'react';

import Toast from '@components/general/Toast';

import useCheckAuth from '@hooks/useCheckAuth';

import AppRouter from '@router/AppRouter';

import './assets/styles/index.scss';

const App: React.FC = () => {
  console.log('App');
  useCheckAuth();

  return (
    <>
      <Toast />
      <AppRouter />
    </>
  );
};

export default App;
