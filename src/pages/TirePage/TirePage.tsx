import React, { FC, useState } from 'react';

import Spinner from '@components/general/Spinner';
import ProductPage from '@components/general/ProductPage';

import useTireDetails from '@hooks/useTireDetails';

import styles from './TirePage.module.scss';

const OrderContent: FC = () => {
  const [isBought, setIsBought] = useState(false);

  const handleBuyClick = () => {
    console.log('handleBuyClick');
    setIsBought(true);
  };

  return (
    <>
      {!isBought && (
        <button className={styles.buyButton} onClick={handleBuyClick}>
          Buy Now
        </button>
      )}
      {isBought && <p className={styles.successMessage}>Thank you for your purchase!</p>}
    </>
  );
};

const TirePage: FC = () => {
  const { tireDetails, getPending } = useTireDetails();

  if (!tireDetails) return <div>Tire not found</div>;

  if (getPending) return <Spinner />;

  return (
    <ProductPage
      images={tireDetails.images}
      price={tireDetails.price}
      title={tireDetails.brand}
      orderContent={<OrderContent />}
    />
  );
};

export default TirePage;
