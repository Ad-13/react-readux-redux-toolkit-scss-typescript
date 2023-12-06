import React, { FC } from 'react';

import ThemeSwitcher from '@components/ThemeSwitcher';

// import styles from './Header.module.scss';

const Header: FC = () => {
  console.log('Header');

  return (
    <header>
      <div className="">header</div>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
