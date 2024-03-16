import { useEffect } from 'react';

import { getCars } from '@reducers/cars/thunks';

import useActions from '@hooks/useActions';
import { useAppSelector } from '@hooks/useAppSelector';

export const useCars = () => {
  console.log('useCars');
  const { cars, pending } = useAppSelector(state => state.cars);
  const { getCars: getCarsThunk } = useActions({
    getCars,
  });

  useEffect(() => {
    getCarsThunk();
  }, []);

  return { cars, pending };
};
