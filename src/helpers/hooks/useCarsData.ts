import { useEffect } from 'react';

import { getCars } from '@reducers/cars/thunks';

import useActions from '@hooks/useActions';
import { useAppSelector } from '@hooks/useAppSelector';

const useCarsData = () => {
  console.log('useCarsData');
  const { cars, getPending } = useAppSelector(state => state.cars);
  const { getCars: getCarsThunk } = useActions({
    getCars,
  });

  useEffect(() => {
    getCarsThunk();
  }, []);

  return { cars, getPending };
};

export default useCarsData;
