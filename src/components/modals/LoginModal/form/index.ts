import { object, string } from 'yup';

export type TLoginFormValues = {
  username: string;
  password: string;
};

export const initialValues: TLoginFormValues = {
  username: '',
  password: '',
};

export const validationSchema = object({
  username: string().required('Required'),
  password: string().required('Required'),
});
