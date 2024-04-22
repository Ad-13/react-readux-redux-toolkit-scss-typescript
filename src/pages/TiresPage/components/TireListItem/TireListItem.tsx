import React, { FC } from 'react';

import ProductCard from '@components/general/ProductCard';

import { TTire } from '@helpersTypes/tires';
import { baseUrl } from '@constants/api';
import { truncateTxt } from '@utils/truncateTxt';

type IProps = {
  item: TTire;
};

const TireListItem: FC<IProps> = ({ item }) => {
  console.log('TireListItem');

  return (
    <ProductCard
      linkUrl={`${item.id}`}
      imageUrl={`${baseUrl}/${item.images[0]}`}
      name={`${item.brand} ${item.model}`}
      price={item.price}
    >
      {truncateTxt(item.description)}
    </ProductCard>
  );
};

export default TireListItem;
