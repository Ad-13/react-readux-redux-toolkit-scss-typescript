import React, { FC } from 'react';

import ProductCard from '@components/general/ProductCard';

import { TCar } from '@helpersTypes/cars';
import { baseUrl } from '@constants/api';
import { truncateTxt } from '@utils/truncateTxt';

type IProps = {
  item: TCar;
};

const CarListItem: FC<IProps> = ({ item }) => {
  console.log('CarListItem');

  return (
    <ProductCard
      linkUrl={String(item.id)}
      imageUrl={`${baseUrl}/${item.images[0]}`}
      name={`${item.make} ${item.model}`}
      price={item.price}
    >
      {truncateTxt(item.description)}
    </ProductCard>
  );
};

export default CarListItem;
