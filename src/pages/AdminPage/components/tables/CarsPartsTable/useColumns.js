import React, { useMemo } from 'react';

const useColumns = () => {
  return useMemo(
    () => [
      {
        Header: 'img',
        accessor: 'img',
      },
      {
        Header: 'id',
        accessor: 'id',
      },
      {
        Header: 'make',
        accessor: 'make',
      },
      {
        Header: 'model',
        accessor: 'model',
      },
      {
        Header: 'year',
        accessor: 'year',
      },
      {
        Header: 'price',
        accessor: 'price',
      },
      {
        Header: 'info',
        accessor: 'info',
      },
    ],
    [],
  );
};

export default useColumns;
