import React, { FC } from 'react';

import ProductPage from '@components/general/ProductPage';

import useCarDetails from '@hooks/useCarDetails';

const CarPage: FC = () => {
  const { carDetails, getPending } = useCarDetails();

  if (!carDetails) return <div>Car not found</div>;

  return (
    <ProductPage
      images={carDetails.images}
      price={carDetails.price}
      title={carDetails.make}
      product={carDetails}
      pending={getPending}
    />
  );
};

export default CarPage;
