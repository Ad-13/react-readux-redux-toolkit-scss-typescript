import React from 'react';

import Spinner from '@components/general/Spinner';

import { TObjectWithItemProp } from '@helpersTypes/list';

import styles from './List.module.scss';

type ListProps<T> = {
  items: T[] | null;
  pending: boolean;
  renderItem: (props: TObjectWithItemProp<T>) => React.ReactNode;
  containerTag?: string;
  itemTag?: string;
  variant?: 'grid' | 'list';
};

const List = <T extends object>({
  items,
  containerTag = 'ul',
  itemTag = 'li',
  variant = 'grid',
  pending,
  renderItem,
}: ListProps<T>) => {
  console.log('List');

  const Container = containerTag as keyof JSX.IntrinsicElements;
  const Item = itemTag as keyof JSX.IntrinsicElements;

  return (
    <>
      {pending ? (
        <Spinner width={25} />
      ) : (
        <>
          {items?.length ? (
            <Container className={styles[variant]}>
              {items.map((item, i) => (
                <Item key={i} className={styles.item}>
                  {renderItem({ item })}
                </Item>
              ))}
            </Container>
          ) : (
            'No items found'
          )}
        </>
      )}
    </>
  );
};

export default List;
