import { bindActionCreators, ActionCreatorsMapObject } from 'redux';

import { useAppDispatch } from './useAppDispatch';

export default function useActions<T extends ActionCreatorsMapObject<unknown>>(actionCreators: T) {
  const dispatch = useAppDispatch();

  return bindActionCreators(actionCreators, dispatch);
}
