import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';

import Input from '@components/inputs/Input';
import Textarea from '@components/inputs/Textarea';
import Button from '@components/general/Button';
import InputFileImage from '@components/inputs/InputFileImage';

import { initialValues } from './form';
import { TCar, TEditCar } from '@helpersTypes/cars';
import { useAppSelector } from '@hooks/useAppSelector';

import styles from './CarsTableForm.module.scss';

interface IProps {
  item: TCar | null;
  onSubmit: (value: TEditCar) => void;
  back: () => void;
}

const CarsTableForm: FC<IProps> = ({ item, onSubmit, back }) => {
  const { addPending } = useAppSelector(state => state.cars);

  return (
    <>
      <div className={styles.actions}>
        <Button variant="primary" onClick={back}>
          Back
        </Button>
      </div>
      <Formik initialValues={{ ...initialValues, ...item }} onSubmit={onSubmit}>
        {({ isValid }) => (
          <Form>
            <Field component={Input} name="make" label="Make" autoFocus />
            <Field component={Input} name="model" label="Model" />
            <Field component={Input} type="number" name="year" label="Year" />
            <Field component={Input} type="number" name="price" label="Price" />
            <Field component={Input} type="number" name="quantity" label="Quantity" />
            <Field component={Textarea} name="info" label="Info" />
            <Field
              component={InputFileImage}
              name="images"
              label="Foto"
              placeholder="Choose a foto..."
              multiple
            />
            <Button variant="primary" type="submit" pending={addPending} disabled={!isValid}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CarsTableForm;
