import React, { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductCard.module.scss';

interface IProps {
  linkUrl: string;
  imageUrl: string;
  name: string;
  price: number;
}

const ProductCard: FC<PropsWithChildren<IProps>> = ({
  linkUrl,
  imageUrl,
  name,
  price,
  children,
}) => {
  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <div className={styles.productDetails}>
        <h2 className={styles.productName}>{name}</h2>
        <div className={styles.productPrice}>${price}</div>
        <div className={styles.customContent}>{children}</div>
      </div>
      <Link className={styles.productLink} to={linkUrl} />
    </div>
  );
};

export default ProductCard;
