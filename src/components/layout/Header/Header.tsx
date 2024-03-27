import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import ThemeSwitcher from '@components/general/ThemeSwitcher';
import ToggleDrawer from '@components/general/ToggleDrawer';
import Login from './components/Login';
import Logout from './components/Logout';

import { useAppSelector } from '@hooks/useAppSelector';
import { ERouteNames } from '@enums/ERouteNames';
import useIsAdmin from '@hooks/useIsAdmin';

import styles from './Header.module.scss';

const LoginLogout: FC = () => {
  console.log('LoginLogout');
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  return isAuthenticated ? <Logout /> : <Login />;
};

const Nav: FC = () => {
  console.log('Nav');
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const isAdmin = useIsAdmin();

  return (
    <nav className={styles.nav}>
      <Link to={ERouteNames.CARS}>Cars</Link>
      <Link to={ERouteNames.CART}>Cart</Link>
      {isAdmin && <Link to={ERouteNames.ADMIN}>Admin</Link>}
      {isAuthenticated && <Link to={ERouteNames.CABINET}>CABINET</Link>}
    </nav>
  );
};

const Header: FC = () => {
  console.log('Header');
  return (
    <header className={styles.header}>
      <ToggleDrawer />
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
