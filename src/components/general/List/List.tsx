import React from 'react';

import Spinner from '@components/general/Spinner';

interface ItemPropT<T> {
  item: T;
}

interface RenderItemPropsT<T> extends ItemPropT<T> {
  [key: string]: unknown;
}

interface ListProps<T> {
  items: T[] | null;
  pending: boolean;
  renderItem: (props: RenderItemPropsT<T>) => React.ReactNode;
  containerTag?: string;
  itemTag?: string;
}

const List = <T extends object>({
  items,
  containerTag = 'ul',
  itemTag = 'li',
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
            <Container>
              {items.map((item, i) => (
                <Item key={i}>{renderItem({ item })}</Item>
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
