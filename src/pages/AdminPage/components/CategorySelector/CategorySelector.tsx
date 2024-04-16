import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';

import Select from '@components/inputs/Select';
import AutoSubmit from '@components/inputs/AutoSubmit';

import { OptionType } from '@helpersTypes/selectOption';
import { ECategories } from '@enums/ECategories';
import { initialValues, options } from './form';

interface IProps {
  onSelectCategory: (value: ECategories) => void;
}

const CategorySelector: FC<IProps> = ({ onSelectCategory }) => {
  const handleSubmit = ({ category }: typeof initialValues) => {
    onSelectCategory(category.value);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field
          component={Select}
          name="category"
          label="Choose a category"
          autoFocus
          placeholder="category"
          options={options}
          customCallback={(option: OptionType<ECategories>) => onSelectCategory(option.value)}
        />
        <AutoSubmit />
      </Form>
    </Formik>
  );
};

export default CategorySelector;
