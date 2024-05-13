import { createAsyncThunk } from '@reduxjs/toolkit';

import cartApi from '@services/requests/cart';

import { EReducerName } from '@enums/EReducerName';
import { TId } from '@helpersTypes/TId';
import { TEditCart } from '@helpersTypes/cart';

export const getCart = createAsyncThunk(`${EReducerName.tires}/getCart`, async () => {
  const { data } = await cartApi.getCart();
  return data;
});

export const getCartById = createAsyncThunk(`${EReducerName.cars}/getCartById`, async (id: TId) => {
  const { data } = await cartApi.getCartById(id);
  return data;
});

export const getCartProducts = createAsyncThunk(
  `${EReducerName.cars}/getCartProducts`,
  async (id: TId) => {
    const { data } = await cartApi.getCartProducts(id);
    return data;
  },
);

export const addCartProduct = createAsyncThunk(
  `${EReducerName.tires}/addCartProduct`,
  async (payload: TEditCart) => {
    const { data } = await cartApi.addCartProduct(payload);
    return data;
  },
);

export const updateCartProduct = createAsyncThunk(
  `${EReducerName.tires}/updateCartProduct`,
  async (payload: TEditCart) => {
    const { data } = await cartApi.updateCartProduct(payload);
    return data;
  },
);

export const deleteCartProduct = createAsyncThunk(
  `${EReducerName.tires}/deleteCartProduct`,
  async (id: TId) => {
    const { data } = await cartApi.deleteCartProduct(id);
    return data;
  },
);
