import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';

import Input from '@inputs/Input';
import Button from '@components/general/Button';
import Textarea from '@components/inputs/Textarea/Textarea';
import InputFile from '@components/inputs/InputFile';

import { useAppSelector } from '@hooks/useAppSelector';
import { initialValues, validationSchema } from './form';

import styles from './AdminPage.module.scss';

const AdminPage: FC = () => {
  const { pending } = useAppSelector(state => state.auth);

  const handleSubmit = async (values: any) => {
    console.log(values);
  };

  return (
    <>
      <div className={styles.title}>AdminPage</div>
      <div className={styles.form}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form>
              <Field component={Input} name="make" label="Make" autoFocus />
              <Field component={Input} name="model" label="Model" />
              <Field component={InputFile} name="test" label="test" multiple />
              <Field component={Input} name="year" type="number" label="Year" />
              <Field component={Input} name="price" type="number" label="Price" />
              <Field component={Input} name="quantity" type="number" label="Quantity" />
              <Field component={Input} name="img" type="file" label="Image" />
              <Field component={Textarea} name="info" label="Description" />
              <Button type="submit" variant="primary" pending={pending} disabled={!isValid}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AdminPage;
