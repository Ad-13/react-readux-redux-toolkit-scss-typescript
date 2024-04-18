import React, { FC, useState } from 'react';

import { addTire, updateTire } from '@reducers/tires/thunks';

import Table from '@components/general/Table';
import Spinner from '@components/general/Spinner';
import Button from '@components/general/Button';
import GalleryModal from '@components/modals/GalleryModal';
import TiresTableForm from './components/TiresTableForm';

import useActions from '@hooks/useActions';
import { TTire, TEditTire } from '@helpersTypes/tires';
import useColumns from './hooks/useColumns';
import useTiresTableData from './hooks/useTiresTableData';
import { TGalleryImage } from '@helpersTypes/TGalleryImage';
import { baseUrl } from '@constants/api';

import styles from './../Tables.module.scss';

const TiresTable: FC = () => {
  console.log('TiresTable');
  const [editMode, setEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemForEdit, setItemForEdit] = useState<TTire | null>(null);
  const [imagesForGallery, setImagesForGallery] = useState<TGalleryImage[]>([]);
  const { tires, getPending } = useTiresTableData();
  const columns = useColumns({ handleEdit, openGallery });
  const { addTire: addTireThunk, updateTire: updateTireThunk } = useActions({
    addTire,
    updateTire,
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

  function handleEdit(item: TTire) {
    setEditMode(true);
    setItemForEdit(item);
  }

  const onFormSubmit = async (values: TEditTire) => {
    console.log('values', values);
    const { images, brand, loadIndex, price, model, quantity, size, speedRating, description, id } =
      values;
    const action = id ? updateTireThunk : addTireThunk;
    const formData = new FormData();

    if (id) formData.append('id', `${id}`);

    images.forEach(x => formData.append('images', x));

    formData.append('brand', brand);
    formData.append('loadIndex', `${loadIndex}`);
    formData.append('speedRating', speedRating);
    formData.append('model', model);
    formData.append('quantity', `${quantity}`);
    formData.append('size', `${size}`);
    formData.append('price', `${price}`);
    formData.append('description', description ?? '');

    await action(formData);
    back();
  };

  if (getPending) return <Spinner />;

  if (editMode) return <TiresTableForm item={itemForEdit} back={back} onSubmit={onFormSubmit} />;

  return (
    <>
      {!tires?.length ? (
        <div>No data Found</div>
      ) : (
        <Table<TTire> className={styles.table} columns={columns} data={tires} />
      )}
      <Button variant="primary" onClick={addItem}>
        Add Item
      </Button>

      <GalleryModal isOpen={isModalOpen} onClose={closeGallery} images={imagesForGallery} />
    </>
  );
};

export default TiresTable;
