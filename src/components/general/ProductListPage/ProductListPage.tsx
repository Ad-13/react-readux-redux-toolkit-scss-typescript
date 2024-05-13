import React from 'react';

import List from '@components/general/List';

import { TObjectWithItemProp } from '@helpersTypes/list';

import styles from './ProductListPage.module.scss';

interface IProps<T> {
  title: string;
  products: T[];
  RenderItem: React.ElementType<TObjectWithItemProp<T>>;
  pending: boolean;
}

const ProductListPage = <T extends object>({ title, products, RenderItem, pending }: IProps<T>) => {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <List<T> items={products} pending={pending} RenderItem={RenderItem} />
    </>
  );
};

export default ProductListPage;
