import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import ThemeSwitcher from '@components/general/ThemeSwitcher';
import Button from '@components/general/Button';
import LoginModal from '@modals/LoginModal';
import RegisterModal from '@modals/RegisterModal';

import styles from './Header.module.scss';

const Header: FC = () => {
  console.log('Header');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleRegisterClick = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">AutoStore</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <div className={styles.userControls}>
        <ThemeSwitcher />
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onRegisterClick={handleRegisterClick}
        />
        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
          onLoginClick={handleLoginClick}
        />
        <Button variant="info" onClick={handleLoginClick}>
          login
        </Button>
      </div>
    </header>
  );
};

export default Header;
