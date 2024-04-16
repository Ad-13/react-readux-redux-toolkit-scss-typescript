import React, { FC } from 'react';

import { ECategories } from '@enums/ECategories';

import { categoryComponents } from './helper';

interface IProps {
  selectedCategory: ECategories | null;
}

const TableSwitcher: FC<IProps> = ({ selectedCategory }) => {
  const ComponentToRender =
    categoryComponents.get(selectedCategory) || (() => <div>No table selected</div>);

  return <ComponentToRender />;
};

export default TableSwitcher;
