import React, { FC } from 'react';

import { TCar } from '@helpersTypes/cars';

type IProps = {
  item: TCar;
};

const CarListItem: FC<IProps> = ({ item }) => {
  console.log('CarListItem');

  return (
    <div className="item">
      <div className="make">{item.make}</div>
      <div className="model">{item.model}</div>
      <div className="year">{item.year}</div>
      <br />
      <br />
    </div>
  );
};

export default CarListItem;
