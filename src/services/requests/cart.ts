import { TCart, TCartProduct, TEditCart } from '@helpersTypes/cart';
import { TId } from '@helpersTypes/TId';

import { publicApi, privateApi } from '../http';

const cartApi = {
  getCart: () => publicApi.get<TCart[]>('/cart'),
  getCartById: (id: TId) => publicApi.get<TCart>(`/cart/${id}`),
  getCartProducts: (userId: TId) => publicApi.get<TCartProduct[]>(`/cart/products/${userId}`),
  addCartProduct: (model: TEditCart) => privateApi.post<TCart>('/cart', model),
  updateCartProduct: (model: TEditCart) => privateApi.put<TCart>(`/cart/${model.id}`, model),
  deleteCartProduct: (id: TId) => privateApi.delete<TId>(`/cart/${id}`),
};

export default cartApi;
