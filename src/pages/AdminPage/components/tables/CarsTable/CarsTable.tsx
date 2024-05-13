import React, { FC, useState } from 'react';

import { addCar, updateCar } from '@reducers/cars/thunks';

import Table from '@components/general/Table';
import Spinner from '@components/general/Spinner';
import Button from '@components/general/Button';
import GalleryModal from '@components/modals/GalleryModal';
import CarsTableForm from './components/CarsTableForm';

import useActions from '@hooks/useActions';
import { TCar, TEditCar } from '@helpersTypes/cars';
import useColumns from './hooks/useColumns';
import useCarsData from '@hooks/useCarsData';
import { TGalleryImage } from '@helpersTypes/TGalleryImage';
import { baseUrl } from '@constants/api';

import styles from './../Tables.module.scss';

const CarsTable: FC = () => {
  console.log('CarsTable');
  const [editMode, setEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemForEdit, setItemForEdit] = useState<TCar | null>(null);
  const [imagesForGallery, setImagesForGallery] = useState<TGalleryImage[]>([]);
  const { cars, getPending } = useCarsData();
  const columns = useColumns({ handleEdit, openGallery });
  const { addCar: addCarThunk, updateCar: updateCarThunk } = useActions({
    addCar,
    updateCar,
  });

  const addItem = () => setEditMode(true);

  const back = () => {
    setEditMode(false);
    setItemForEdit(null);
  };

  const closeGallery = () => {
    setIsModalOpen(false);
    setImagesForGallery([]);
  };

  function openGallery(images: string[]) {
    const galleryImages: TGalleryImage[] = images.map(src => ({
      original: `${baseUrl}/${src}`,
      thumbnail: `${baseUrl}/${src}`,
    }));
    setIsModalOpen(true);
    setImagesForGallery(galleryImages);
  }

  function handleEdit(item: TCar) {
    setEditMode(true);
    setItemForEdit(item);
  }

  const onFormSubmit = async (values: TEditCar) => {
    console.log('values', values);
    const { images, make, model, price, year, description, quantity, id } = values;
    const action = id ? updateCarThunk : addCarThunk;
    const formData = new FormData();

    if (id) formData.append('id', `${id}`);

    images.forEach(x => formData.append('images', x));

    formData.append('make', make);
    formData.append('model', model);
    formData.append('year', `${year}`);
    formData.append('price', `${price}`);
    formData.append('quantity', `${quantity}`);
    formData.append('description', description ?? '');

    await action(formData);
    back();
  };

  if (getPending) return <Spinner />;

  if (editMode) return <CarsTableForm item={itemForEdit} back={back} onSubmit={onFormSubmit} />;

  return (
    <>
      {!cars?.length ? (
        <div>No data Found</div>
      ) : (
        <Table<TCar> className={styles.table} columns={columns} data={cars} />
      )}
      <Button variant="primary" onClick={addItem}>
        Add Item
      </Button>

      {isModalOpen && <GalleryModal onClose={closeGallery} images={imagesForGallery} />}
    </>
  );
};

export default CarsTable;
