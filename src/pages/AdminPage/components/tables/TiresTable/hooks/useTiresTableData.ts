import { useEffect } from 'react';

import { getTires } from '@reducers/tires/thunks';

import useActions from '@hooks/useActions';
import { useAppSelector } from '@hooks/useAppSelector';

const useTiresTableData = () => {
  console.log('useTiresTableData');
  const { tires, getPending } = useAppSelector(state => state.tires);
  const { getTires: getTiresThunk } = useActions({
    getTires,
  });

  useEffect(() => {
    getTiresThunk();
  }, []);

  return { tires, getPending };
};

export default useTiresTableData;
