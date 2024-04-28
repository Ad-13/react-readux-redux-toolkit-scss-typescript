import React, { PropsWithChildren, ReactNode } from 'react';

import ProductPageSlider from './components/ProductPageSlider';

import styles from './ProductPage.module.scss';

interface IProps {
  images: string[];
  price: number;
  title: string;
  description?: string;
  orderContent?: ReactNode;
}

const ProductPage = ({
  title,
  images,
  price,
  description,
  children,
  orderContent,
}: IProps & PropsWithChildren) => {
  console.log('ProductPage');

  return (
    <div className={styles.productDetails}>
      <div className={styles.productDetailsMain}>
        <div className={`${styles.productBlock} ${styles.productLeft}`}>
          <ProductPageSlider images={images} />
          {description && <div className={styles.description}>{description}</div>}
        </div>
        <div className={`${styles.productBlock} ${styles.productRigth}`}>
          <h1 className={styles.productDetailsTitle}>{title}</h1>
          <p className={styles.productPrice}>Price: ${price}</p>
          {orderContent && <div className={styles.orderContent}>{orderContent}</div>}
        </div>
      </div>
      {children && <div className={styles.customContent}>{children}</div>}
    </div>
  );
};

export default ProductPage;
