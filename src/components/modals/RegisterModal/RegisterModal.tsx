import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';

import Modal from '@modals/Modal';
import Input from '@inputs/Input';
import Button from '@components/general/Button';

import { TLoginFormValues, initialValues, validationSchema } from './form';

import styles from './RegisterModal.module.scss';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
}

const RegisterModal: FC<IProps> = ({ isOpen, onClose, onLoginClick }) => {
  console.log('RegisterModal');

  const handleSubmit = (values: TLoginFormValues) => {
    // Ваша логика для обработки данных формы
    console.log(values);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Register">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <Field component={Input} name="name" type="text" label="Name" />
          <Field component={Input} name="email" type="text" label="Email" />
          <Field component={Input} name="password" type="password" label="Password" />
          <div className={styles.actions}>
            <Button type="submit" variant="primary">
              Register
            </Button>
            <Button type="button" variant="link" onClick={onLoginClick}>
              I am already registered
            </Button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default RegisterModal;
