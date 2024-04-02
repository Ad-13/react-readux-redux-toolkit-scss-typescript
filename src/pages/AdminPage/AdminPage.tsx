import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';

import Input from '@inputs/Input';
import Button from '@components/general/Button';
import Textarea from '@components/inputs/Textarea/Textarea';
import SelectInput from '@components/inputs/Select/Select';

import { useAppSelector } from '@hooks/useAppSelector';
import { initialValues, validationSchema } from './form';

import styles from './AdminPage.module.scss';

const AdminPage: FC = () => {
  const { pending } = useAppSelector(state => state.auth);

  const handleSubmit = async (values: any) => {
    console.log(values);
  };

  const options = [
    { value: 1, label: 'name 1' },
    { value: 2, label: 'name 2' },
    { value: 3, label: 'name 3' },
  ];

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
              <Field component={SelectInput} name="test" label="test" options={options} isMulti />
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
