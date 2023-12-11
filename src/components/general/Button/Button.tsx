import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

import styles from './Button.module.scss';

interface IProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
  className?: string;
  onClick?: () => void;
}

const Button: FC<PropsWithChildren<IProps>> = ({ type = 'button', className, variant, children, ...props }) => {
  const buttonClasses = classNames(
    styles.btn,
    variant && styles[`btn${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    className,
  );

  return (
    <button {...props} type={type} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
