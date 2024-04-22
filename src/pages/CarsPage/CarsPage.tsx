import React, { FC } from 'react';

import ProductListPage from '@components/general/ProductListPage';
import CarListItem from './components/CarListItem';

import useCarsData from '@hooks/useCarsData';
import { TCar } from '@helpersTypes/cars';

const CarsPage: FC = () => {
  console.log('CarsPage');

  const { cars, getPending } = useCarsData();

  return (
    <ProductListPage<TCar>
      title="Cars Page"
      products={cars}
      pending={getPending}
      renderItem={CarListItem}
    />
  );
};

export default CarsPage;
