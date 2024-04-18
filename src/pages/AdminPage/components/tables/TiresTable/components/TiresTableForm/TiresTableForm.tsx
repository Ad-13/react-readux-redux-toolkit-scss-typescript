import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';

import Input from '@components/inputs/Input';
import Textarea from '@components/inputs/Textarea';
import Button from '@components/general/Button';
import InputFileImage from '@components/inputs/InputFileImage';

import { initialValues } from './form';
import { TTire, TEditTire } from '@helpersTypes/tires';
import { useAppSelector } from '@hooks/useAppSelector';
import useEscape from '@hooks/useEscape';

import styles from './TiresTableForm.module.scss';

interface IProps {
  item: TTire | null;
  onSubmit: (value: TEditTire) => void;
  back: () => void;
}

const TiresTableForm: FC<IProps> = ({ item, onSubmit, back }) => {
  const { addPending } = useAppSelector(state => state.tires);

  useEscape(back);

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
            <Field component={Input} name="brand" label="Brand" autoFocus />
            <Field component={Input} name="model" label="Model" />
            <Field component={Input} name="size" label="Size" />
            <Field component={Input} name="speedRating" label="Speed Rating" />
            <Field component={Input} type="number" name="loadIndex" label="Load Index" />
            <Field component={Input} type="number" name="price" label="Price" />
            <Field component={Input} type="number" name="quantity" label="Quantity" />
            <Field component={Textarea} name="description" label="description" />
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

export default TiresTableForm;
