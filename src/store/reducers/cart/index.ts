import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { EReducerName } from '@enums/EReducerName';
import { TCartProduct } from '@helpersTypes/cart';

import { getCartProducts, addCartProduct, deleteCartProduct, updateCartProduct } from './thunks';

type TInitialState = {
  cartProducts: TCartProduct[];
  getPending: boolean;
  addPending: boolean;
  deletePending: boolean;
  error?: string;
};

const initialState: TInitialState = {
  cartProducts: [],
  getPending: false,
  addPending: false,
  deletePending: false,
  error: '',
};

const cartSlice = createSlice({
  name: EReducerName.cart,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCartProducts.fulfilled, (state, { payload }) => {
      state.cartProducts = payload;
      state.getPending = false;
    });
    builder.addCase(getCartProducts.rejected, state => {
      state.getPending = false;
    });
    builder.addCase(getCartProducts.pending, state => {
      state.getPending = true;
    });
    builder.addCase(deleteCartProduct.fulfilled, (state, { payload }) => {
      state.cartProducts = state.cartProducts.filter(x => x.id !== payload);
      state.deletePending = false;
    });
    builder.addCase(deleteCartProduct.rejected, state => {
      state.deletePending = false;
    });
    builder.addCase(deleteCartProduct.pending, state => {
      state.deletePending = true;
    });
    builder.addCase(addCartProduct.fulfilled, state => {
      state.addPending = false;
    });
    builder.addCase(addCartProduct.rejected, (state, { error }) => {
      state.addPending = false;
      state.error = error.message;
    });
    builder.addCase(addCartProduct.pending, state => {
      state.addPending = true;
    });
    builder.addCase(updateCartProduct.fulfilled, (state, { payload }) => {
      state.cartProducts = state.cartProducts.map(x =>
        x.id === payload.id ? { ...payload, product: x.product } : x,
      );
      state.addPending = false;
    });
    builder.addMatcher(isAnyOf(addCartProduct.pending, updateCartProduct.pending), state => {
      state.addPending = true;
    });
    builder.addMatcher(isAnyOf(addCartProduct.rejected, updateCartProduct.rejected), state => {
      state.addPending = false;
    });
  },
});

export default cartSlice.reducer;
