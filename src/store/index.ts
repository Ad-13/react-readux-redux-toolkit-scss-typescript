import { configureStore } from '@reduxjs/toolkit';

import errorMiddleware from '@middlewares/errorMiddleware';

import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(errorMiddleware),
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;

export default store;
