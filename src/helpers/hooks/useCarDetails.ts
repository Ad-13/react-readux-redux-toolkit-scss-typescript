import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCarById } from '@reducers/cars/thunks';

import useActions from '@hooks/useActions';
import { useAppSelector } from '@hooks/useAppSelector';

const useCarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { carDetails, getPending } = useAppSelector(state => state.cars);
  const { getCarById: getCarByIdThunk } = useActions({
    getCarById,
  });

  useEffect(() => {
    if (id) getCarByIdThunk(id);
  }, [id]);

  return { carDetails, getPending };
};

export default useCarDetails;
