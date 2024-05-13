import React, { FC, PropsWithChildren } from 'react';

import Button from '../Button/Button';

interface IProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  pending?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonDelete: FC<PropsWithChildren<IProps>> = ({
  type = 'button',
  className,
  children,
  pending,
  disabled,
  onClick,
  ...props
}) => {
  return (
    <Button variant="danger" onClick={onClick} {...props}>
      <i className="fa-regular fa-trash-can" />
    </Button>
  );
};

export default ButtonDelete;
