import React, { useMemo, useState } from 'react';
import { Column, Row } from 'react-table';

import { deleteTire } from '@reducers/tires/thunks';

import Button from '@components/general/Button';
import Spinner from '@components/general/Spinner';

import { baseUrl } from '@constants/api';
import { TTire } from '@helpersTypes/tires';
import { TId } from '@helpersTypes/TId';
import { useAppSelector } from '@hooks/useAppSelector';
import useActions from '@hooks/useActions';

import styles from './../../Tables.module.scss';

type IProps = {
  handleEdit: (data: TTire) => void;
  openGallery: (images: string[]) => void;
};

const useColumns = ({ handleEdit, openGallery }: IProps): Column<TTire>[] => {
  const [deletingRowId, setDeletingRowId] = useState<TId | null>(null);
  const { deletePending } = useAppSelector(state => state.tires);
  const { deleteTire: deleteTireThunk } = useActions({
    deleteTire,
  });

  const handleDelete = async (id: TId) => {
    setDeletingRowId(id);
    await deleteTireThunk(id);
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
        Header: 'brand',
        accessor: 'brand',
      },
      {
        Header: 'model',
        accessor: 'model',
      },
      {
        Header: 'size',
        accessor: 'size',
      },
      {
        Header: 'load Index',
        accessor: 'loadIndex',
      },
      {
        Header: 'speed Rating',
        accessor: 'speedRating',
      },
      {
        Header: 'quantity',
        accessor: 'quantity',
      },
      {
        Header: 'price',
        accessor: 'price',
      },
      {
        Header: 'info',
        accessor: 'description',
      },
      {
        Header: 'actions',
        Cell: ({ row }: { row: Row<TTire> }) => (
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
