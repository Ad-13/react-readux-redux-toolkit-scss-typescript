import { object, string } from 'yup';

export type TLoginFormValues = {
  name: string;
  email: string;
  password: string;
};

export const initialValues: TLoginFormValues = {
  name: '',
  email: '',
  password: '',
};

export const validationSchema = object({
  name: string().required('Required'),
  email: string().email().required('Required'),
  password: string().required('Required'),
});
