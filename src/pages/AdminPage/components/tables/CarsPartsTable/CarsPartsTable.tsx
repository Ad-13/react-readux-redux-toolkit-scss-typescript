import React, { FC } from 'react';

import Table from '@components/general/Table';

// import { TCar } from '@helpersTypes/cars';

// import useColumns from './useColumns';

const CarsPartsTable: FC = () => {
  // const columns = useColumns();

  const data = [
    { name: 'aaa', age: 30, country: 'USA' },
    { name: 'sss', age: 25, country: 'Canada' },
    { name: 'dddd', age: 35, country: 'UK' },
  ];

  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
      id: 'aaa',
    },
    {
      Header: 'Age',
      accessor: 'age',
      id: 'age',
    },
    {
      Header: 'Country',
      accessor: 'country',
      id: 'country',
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Table<any> columns={columns} data={data} />;
};

export default CarsPartsTable;
