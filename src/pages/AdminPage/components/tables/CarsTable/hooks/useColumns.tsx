import React, { useMemo, useState } from 'react';
import { Column, Row } from 'react-table';

import { deleteCar } from '@reducers/cars/thunks';

import Button from '@components/general/Button';
import Spinner from '@components/general/Spinner';

import { baseUrl } from '@constants/api';
import { TCar } from '@helpersTypes/cars';
import { TId } from '@helpersTypes/TId';
import { useAppSelector } from '@hooks/useAppSelector';
import useActions from '@hooks/useActions';

import styles from './../CarsTable.module.scss';

type IProps = {
  handleEdit: (data: TCar) => void;
};

const useColumns = ({ handleEdit }: IProps): Column<TCar>[] => {
  const [deletingRowId, setDeletingRowId] = useState<TId | null>(null);
  const { deletePending } = useAppSelector(state => state.cars);
  const { deleteCar: deleteCarThunk } = useActions({
    deleteCar,
  });

  const handleDelete = async (id: TId) => {
    setDeletingRowId(id);
    await deleteCarThunk(id);
    setDeletingRowId(null);
  };

  return useMemo(
    () => [
      {
        Header: 'images',
        accessor: 'images',
        Cell: ({ row }) => (
          <img className="responsive-img" src={`${baseUrl}/${row.original.images[0]}`} alt="img" />
        ),
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
        Header: 'quantity',
        accessor: 'quantity',
      },
      {
        Header: 'info',
        accessor: 'info',
      },
      {
        Header: 'actions',
        Cell: ({ row }: { row: Row<TCar> }) => (
          <>
            <div className={styles.btnWrapper}>
              <Button variant="info" onClick={() => handleEdit(row.original)}>
                <i className="fa-regular fa-pen-to-square" />
              </Button>
              <Button variant="danger" onClick={() => handleDelete(row.original.id)}>
                <i className="fa-regular fa-trash-can" />
              </Button>
            </div>
            {deletePending && deletingRowId === row.original.id && (
              <div className={styles.spinnerWrapper}>
                <Spinner />
              </div>
            )}
          </>
        ),
        className: styles.actionsCell,
      },
    ],
    [],
  );
};

export default useColumns;
