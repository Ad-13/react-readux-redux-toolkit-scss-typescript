import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';

import reducers from './reducers';

const logoutActionType = 'auth/logout/fulfilled';

const rootReducer = combineReducers(reducers);

const resettableRootReducer: Reducer<RootState, AnyAction> = (state, action) => {
  if (action.type === logoutActionType) return rootReducer(undefined, action);

  return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default resettableRootReducer;
