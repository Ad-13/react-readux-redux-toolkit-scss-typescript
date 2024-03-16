import React, { FC, useState } from 'react';

import Button from '@components/general/Button';
import LoginModal from '@modals/LoginModal';
import RegisterModal from '@modals/RegisterModal';

import { useAppSelector } from '@hooks/useAppSelector';

// import styles from './Login.module.scss';

const Login: FC = () => {
  console.log('Login');
  const { pending } = useAppSelector(state => state.auth);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleRegisterClick = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  return (
    <>
      <Button variant="info" onClick={handleLogin} disabled={pending}>
        login
      </Button>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onRegisterClick={handleRegisterClick}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onLoginClick={handleLogin}
      />
    </>
  );
};

export default Login;
