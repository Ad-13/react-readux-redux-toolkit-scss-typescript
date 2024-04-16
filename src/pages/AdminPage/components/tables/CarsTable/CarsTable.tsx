import React, { FC, useState } from 'react';

import { addCar, updateCar } from '@reducers/cars/thunks';

import Table from '@components/general/Table';
import Spinner from '@components/general/Spinner';
import Button from '@components/general/Button';
import CarsTableForm from './components/CarsTableForm';

import useActions from '@hooks/useActions';
import { TCar, TEditCar } from '@helpersTypes/cars';
import useColumns from './hooks/useColumns';
import useCarsTableData from './hooks/useCarsTableData';

const CarsTable: FC = () => {
  console.log('CarsTable');
  const [editMode, setEditMode] = useState(false);
  const [itemForEdit, setItemForEdit] = useState<TCar | null>(null);
  const { cars, getPending } = useCarsTableData();
  const columns = useColumns({ handleEdit });
  const { addCar: addCarThunk, updateCar: updateCarThunk } = useActions({
    addCar,
    updateCar,
  });

  const addItem = () => setEditMode(true);

  const back = () => {
    setEditMode(false);
    setItemForEdit(null);
  };

  function handleEdit(item: TCar) {
    setEditMode(true);
    setItemForEdit(item);
  }

  const onFormSubmit = async (values: TEditCar) => {
    console.log('values', values);
    const { images, make, model, price, year, info, id } = values;
    const action = id ? updateCarThunk : addCarThunk;
    const formData = new FormData();

    if (id) formData.append('id', `${id}`);

    images.forEach(x => formData.append('images', x));

    formData.append('make', make);
    formData.append('model', model);
    formData.append('year', `${year}`);
    formData.append('price', `${price}`);
    formData.append('info', info ?? '');

    await action(formData);
    back();
  };

  if (getPending) return <Spinner />;

  if (editMode) return <CarsTableForm item={itemForEdit} back={back} onSubmit={onFormSubmit} />;

  return (
    <>
      {!cars?.length ? (
        <>
          <div>No data Found</div>
        </>
      ) : (
        <Table<TCar> columns={columns} data={cars} />
      )}
      <Button variant="primary" onClick={addItem}>
        Add Item
      </Button>
    </>
  );
};

export default CarsTable;
