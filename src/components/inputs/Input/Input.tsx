import React, { FC, ReactNode } from 'react';
import { FieldProps } from 'formik';
import classNames from 'classnames';

import styles from './Input.module.scss';

interface IProps extends FieldProps {
  label: string;
  type: string;
  isShowError: boolean;
  disabled: boolean;
  image: ReactNode;
}

const Input: FC<IProps> = ({
  field: { name, value, onBlur, onChange },
  form: { touched, errors },
  label,
  type = 'text',
  isShowError = true,
  image,
  disabled,
  ...props
}) => {
  const error = (touched[name] && errors[name]) as string;

  return (
    <div className={styles.inputGroup}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <div
        className={classNames(styles.inputWrapper, {
          [styles.disabled]: disabled,
        })}
      >
        <input
          {...props}
          type={type}
          id={name}
          name={name}
          value={value}
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
          className={classNames(styles.input, {
            [styles.invalid]: error,
          })}
        />
        {image && <div className={styles.img}>{image}</div>}
      </div>
      {isShowError && error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
