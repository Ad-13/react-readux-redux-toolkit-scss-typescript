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

import styles from './../../Tables.module.scss';

type IProps = {
  handleEdit: (data: TCar) => void;
  openGallery: (images: string[]) => void;
};

const useColumns = ({ handleEdit, openGallery }: IProps): Column<TCar>[] => {
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLImageElement>, images: string[]) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openGallery(images);
    }
  };

  return useMemo(
    () => [
      {
        Header: 'images',
        accessor: 'images',
        Cell: ({ row }) => (
          <img
            className={`responsive-img pointer ${styles.rowImg}`}
            src={`${baseUrl}/${row.original.images[0]}`}
            alt="img"
            onClick={() => openGallery(row.original.images)}
            onKeyDown={event => handleKeyDown(event, row.original.images)}
            tabIndex={0}
          />
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
