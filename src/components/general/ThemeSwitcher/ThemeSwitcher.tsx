import React, { FC, memo } from 'react';

import Button from '@components/general/Button';

import { ETheme } from '@enums/theme.enum';

const dataTheme = 'data-theme';

const ThemeSwitcher: FC = () => {
  console.log('ThemeSwitcher');

  let currentTheme = ETheme.Default;

  const toggleTheme = () => {
    currentTheme = currentTheme === ETheme.Default ? ETheme.Dark : ETheme.Default;
    document.documentElement.setAttribute(dataTheme, currentTheme);
  };

  return (
    <Button variant="secondary" onClick={toggleTheme}>
      Switch Theme
    </Button>
  );
};

export default memo(ThemeSwitcher);
