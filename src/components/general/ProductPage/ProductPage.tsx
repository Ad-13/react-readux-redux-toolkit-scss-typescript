import React, { PropsWithChildren, useState } from 'react';

import Spinner from '@components/general/Spinner';

import { baseUrl } from '@constants/api';

import styles from './ProductPage.module.scss';

interface IProps<T> {
  images: string[];
  price: number;
  title: string;
  product: T;
  pending: boolean;
}

const ProductPage = <T extends object>({
  title,
  images,
  price,
  pending,
  children,
}: IProps<T> & PropsWithChildren) => {
  const [isBought, setIsBought] = useState(false);

  const handleBuyClick = () => {
    console.log('handleBuyClick');
    setIsBought(true);
  };

  if (pending) return <Spinner />;

  return (
    <div className={styles.carDetails}>
      <h1 className={styles.carDetailsTitle}>{title}</h1>
      <div className={styles.carImgWrapper}>
        <img className={styles.carImg} src={`${baseUrl}/${images[0]}`} alt={title} />
      </div>
      <p className={styles.carPrice}>Price: ${price}</p>
      <div className={styles.customContent}>{children}</div>
      {!isBought && (
        <button className={styles.buyButton} onClick={handleBuyClick}>
          Buy Now
        </button>
      )}
      {isBought && <p className={styles.successMessage}>Thank you for your purchase!</p>}
    </div>
  );
};

export default ProductPage;
