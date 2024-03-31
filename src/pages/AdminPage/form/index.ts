import { object, array } from 'yup';

export const initialValues = {
  test: '',
};

export const validationSchema = object({
  test: array().required('Please select a file'),
});
