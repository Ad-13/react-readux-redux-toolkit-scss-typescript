import { useEffect } from 'react';

import { getCartProducts } from '@reducers/cart/thunks';

import useActions from '@hooks/useActions';
import { useAppSelector } from '@hooks/useAppSelector';
import { TId } from '@helpersTypes/TId';

const useCartProducts = (id?: TId) => {
  console.log('useCartProducts');
  console.log(id);
  const { getCartProducts: getCartProductsThunk } = useActions({ getCartProducts });
  const { cartProducts, getPending } = useAppSelector(state => state.cart);

  useEffect(() => {
    if (id) getCartProductsThunk(id);
  }, []);

  return { cartProducts, getPending };
};

export default useCartProducts;
