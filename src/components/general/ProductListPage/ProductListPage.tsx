import React from 'react';

import List from '@components/general/List';

import { TObjectWithItemProp } from '@helpersTypes/list';

import styles from './ProductListPage.module.scss';

interface IProps<T> {
  title: string;
  products: T[];
  renderItem: (props: TObjectWithItemProp<T>) => React.ReactNode;
  pending: boolean;
}

const ProductListPage = <T extends object>({ title, products, renderItem, pending }: IProps<T>) => {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <List<T> items={products} pending={pending} renderItem={renderItem} />
    </>
  );
};

export default ProductListPage;
