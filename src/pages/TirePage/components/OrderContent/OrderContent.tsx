import React, { FC, useRef, useState } from 'react';

import { addCartProduct } from '@reducers/cart/thunks';

import CartModal from '@components/modals/CartModal';
import LoginRegisterModal, {
  LoginRegisterModalRef,
} from '@components/modals/LoginRegisterModal/LoginRegisterModal';

import { ECategories } from '@enums/ECategories';
import { TTire } from '@helpersTypes/tires';
import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';

import styles from './OrderContent.module.scss';

type IProps = {
  item: TTire;
};

const OrderContent: FC<IProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector(state => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef<LoginRegisterModalRef>(null);

  const handleBuyClick = async () => {
    if (!currentUser?.id) {
      ref.current?.handleLogin();
      return;
    }

    try {
      await dispatch(
        addCartProduct({
          userId: currentUser.id,
          productId: item.id,
          productType: ECategories.tires,
          quantity: 1,
        }),
      ).unwrap();
      setIsModalOpen(true);
    } catch (error) {
      /* empty */
    }
  };

  return (
    <>
      <button className={styles.buyButton} onClick={handleBuyClick}>
        Buy Now
      </button>
      <LoginRegisterModal ref={ref} />
      {isModalOpen && <CartModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default OrderContent;
