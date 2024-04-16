import React, { FC } from 'react';

import List from '@components/general/List';
import CarListItem from './components/CarListItem';

import { useCars } from './hooks/useCars';
import { TCar } from '@helpersTypes/cars';

const CarsPage: FC = () => {
  console.log('CarsPage');

  const { cars, getPending } = useCars();

  return (
    <>
      <div>CarsPage</div>
      <List<TCar> items={cars} pending={getPending} renderItem={CarListItem} />
    </>
  );
};

export default CarsPage;
