import React, { FC } from 'react';

import ProductListPage from '@components/general/ProductListPage';
import TireListItem from './components/TireListItem';

import useTiresData from '@hooks/useTiresData';
import { TTire } from '@helpersTypes/tires';

const TiresPage: FC = () => {
  console.log('TiresPage');

  const { tires, getPending } = useTiresData();

  return (
    <ProductListPage<TTire>
      title="Tires Page"
      products={tires}
      pending={getPending}
      RenderItem={TireListItem}
    />
  );
};

export default TiresPage;
