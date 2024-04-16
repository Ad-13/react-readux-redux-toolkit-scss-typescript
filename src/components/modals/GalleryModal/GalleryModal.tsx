import React, { FC } from 'react';

import Modal from '@components/general/Modal';
import Gallery from '@components/general/Gallery';

import { TGalleryImage } from '@helpersTypes/TGalleryImage';

// import styles from './GalleryModal.module.scss';

interface IProps {
  isOpen: boolean;
  images: TGalleryImage[];
  onClose: () => void;
}

const GalleryModal: FC<IProps> = ({ isOpen, images, onClose }) => {
  console.log('GalleryModal');

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Login">
      <Gallery images={images} />
    </Modal>
  );
};

export default GalleryModal;
