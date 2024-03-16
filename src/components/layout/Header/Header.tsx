import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import ThemeSwitcher from '@components/general/ThemeSwitcher';
import Login from './components/Login';
import Logout from './components/Logout';

import { useAppSelector } from '@hooks/useAppSelector';
import { ERouteNames } from '@enums/ERouteNames';

import styles from './Header.module.scss';

const LoginLogout: FC = () => {
  console.log('LoginLogout');
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  return isAuthenticated ? <Logout /> : <Login />;
};

const Nav: FC = () => {
  console.log('Nav');
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  return (
    <nav className={styles.nav}>
      <Link to={ERouteNames.CARS}>Cars</Link>
      <Link to={ERouteNames.CART}>Cart</Link>
      {isAuthenticated && <Link to={ERouteNames.CABINET}>CABINET</Link>}
    </nav>
  );
};

const Header: FC = () => {
  console.log('Header');
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">AutoStore</Link>
      </div>
      <Nav />
      <div className={styles.userControls}>
        <ThemeSwitcher />
        <LoginLogout />
      </div>
    </header>
  );
};

export default Header;
