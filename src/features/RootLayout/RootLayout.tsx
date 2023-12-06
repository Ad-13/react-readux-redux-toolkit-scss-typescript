import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@features/Footer';
import Header from '@features/Header';

// import styles from './RootLayout.module.scss';

const RootLayout: FC = () => {
  console.log('RootLayout');

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
