import React, { FC } from 'react';

const ThemeSwitcher: FC = () => {
  console.log('ThemeSwitcher');

  let currentTheme = 'default';

  const toggleTheme = () => {
    currentTheme = currentTheme === 'default' ? 'dark' : 'default';
    document.documentElement.setAttribute('data-theme', currentTheme);
  };

  return <button onClick={toggleTheme}>Switch Theme</button>;
};

export default ThemeSwitcher;
