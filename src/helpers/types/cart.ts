import { ECategories } from '@enums/ECategories';

import { TId } from './TId';
import { TProduct } from './TProduct';

export type TCart = {
  id: TId;
  userId: TId;
  productId: TId;
  productType: ECategories;
  quantity: number;
  createdAt: Date;
};

export type TEditCart = Omit<TCart, 'id' | 'createdAt'> & { id?: TId; createdAt?: Date };

export type TOutputCart = TCart;

export type TCartProduct = TCart & {
  product: TProduct;
};
