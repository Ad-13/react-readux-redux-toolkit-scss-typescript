import React, { FC, memo } from 'react';

import Button from '@components/general/Button';

import { ETheme } from '@enums/ETheme';

const dataTheme = 'data-theme';

const ThemeSwitcher: FC = () => {
  console.log('ThemeSwitcher');

  let currentTheme = ETheme.default;

  const toggleTheme = () => {
    currentTheme = currentTheme === ETheme.default ? ETheme.dark : ETheme.default;
    document.documentElement.setAttribute(dataTheme, currentTheme);
  };

  return (
    <Button variant="secondary" onClick={toggleTheme}>
      Switch Theme
    </Button>
  );
};

export default memo(ThemeSwitcher);
