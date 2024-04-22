import React, { FC } from 'react';

import ProductPage from '@components/general/ProductPage';

import useTireDetails from '@hooks/useTireDetails';

const TirePage: FC = () => {
  const { tireDetails, getPending } = useTireDetails();

  if (!tireDetails) return <div>Tire not found</div>;

  return (
    <ProductPage
      images={tireDetails.images}
      price={tireDetails.price}
      title={tireDetails.brand}
      product={tireDetails}
      pending={getPending}
    />
  );
};

export default TirePage;
