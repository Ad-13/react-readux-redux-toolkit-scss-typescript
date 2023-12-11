import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';

import Modal from '@modals/Modal';
import Input from '@inputs/Input';
import Button from '@components/general/Button';

import { TLoginFormValues, initialValues, validationSchema } from './form';

import styles from './LoginModal.module.scss';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
}

const LoginModal: FC<IProps> = ({ isOpen, onClose, onRegisterClick }) => {
  console.log('LoginModal');

  const handleSubmit = (values: TLoginFormValues) => {
    // Ваша логика для обработки данных формы
    console.log(values);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Login">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <Field component={Input} name="username" type="text" label="Username" />
          <Field component={Input} name="password" type="password" label="Password" />
          <div className={styles.actions}>
            <Button type="submit" variant="primary">
              Submit
            </Button>
            <Button type="button" variant="link" onClick={onRegisterClick}>
              Register
            </Button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default LoginModal;
