import { ECategories } from '@enums/ECategories';

export const options = [
  {
    value: ECategories.cars,
    label: 'Cars',
  },
  {
    value: ECategories.tires,
    label: 'Tires',
  },
];

export const initialValues: { category: (typeof options)[0] } = {
  category: '' as unknown as (typeof options)[0],
};
