import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '@components/general/Modal';
import List from '@components/general/List';
import CartListItem from './components/CartListItem';
import Button from '@components/general/Button';

import { useAppSelector } from '@hooks/useAppSelector';
import useCartProducts from '@hooks/useCartProducts';
import { TCartProduct } from '@helpersTypes/cart';
import { ERouteNames } from '@enums/ERouteNames';

import styles from './CartModal.module.scss';

type IProps = {
  onClose: () => void;
};

const CartModal: FC<IProps> = ({ onClose }) => {
  console.log('CartModal');
  const navigate = useNavigate();
  const { currentUser } = useAppSelector(state => state.auth);
  const { cartProducts, getPending } = useCartProducts(currentUser?.id);
  console.log('cartProducts', cartProducts);

  const handleCheckout = () => {
    navigate(ERouteNames.CHECKOUT);
    onClose();
  };

  const totalItems = cartProducts.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0,
  );

  const subtotal = cartProducts.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.quantity * currentValue.product.price,
    0,
  );

  return (
    <Modal onClose={onClose} title="Cart" size="xl">
      {getPending && <div>Loading</div>}
      <List<TCartProduct>
        items={cartProducts}
        keyField="id"
        pending={getPending}
        RenderItem={CartListItem}
        variant="list"
      />

      <div className={styles.subtotal}>
        Subtotal ({totalItems} items): €{subtotal}
      </div>

      <div className={styles.actions}>
        <Button variant="secondary" onClick={onClose}>
          Continue Shopping
        </Button>
        <Button variant="success" onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    </Modal>
  );
};

export default CartModal;
