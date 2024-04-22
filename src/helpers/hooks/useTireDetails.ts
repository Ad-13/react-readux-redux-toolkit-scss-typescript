import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getTireById } from '@reducers/tires/thunks';

import useActions from '@hooks/useActions';
import { useAppSelector } from '@hooks/useAppSelector';

const useTireDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { tireDetails, getPending } = useAppSelector(state => state.tires);
  const { getTireById: getTireByIdThunk } = useActions({
    getTireById,
  });

  useEffect(() => {
    if (id) getTireByIdThunk(id);
  }, [id]);

  return { tireDetails, getPending };
};

export default useTireDetails;
