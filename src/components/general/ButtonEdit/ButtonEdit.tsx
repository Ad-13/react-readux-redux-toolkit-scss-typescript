import React, { FC, PropsWithChildren } from 'react';

import Button from '../Button/Button';

interface IProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  pending?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonEdit: FC<PropsWithChildren<IProps>> = ({
  type = 'button',
  className,
  children,
  pending,
  disabled,
  onClick,
  ...props
}) => {
  return (
    <Button variant="info" onClick={onClick} {...props}>
      <i className="fa-regular fa-pen-to-square" />
    </Button>
  );
};

export default ButtonEdit;
