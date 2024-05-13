import React, { FC } from 'react';

import Spinner from '@components/general/Spinner';
import ProductPage from '@components/general/ProductPage';
import OrderContent from './components/OrderContent';

import useTireDetails from '@hooks/useTireDetails';

// import styles from './TirePage.module.scss';

const TirePage: FC = () => {
  const { tireDetails, getPending } = useTireDetails();

  if (!tireDetails) return <div>Tire not found</div>;

  if (getPending) return <Spinner />;

  return (
    <ProductPage
      images={tireDetails.images}
      price={tireDetails.price}
      title={tireDetails.brand}
      orderContent={<OrderContent item={tireDetails} />}
    />
  );
};

export default TirePage;
