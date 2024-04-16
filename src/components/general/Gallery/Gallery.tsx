import React from 'react';
import ReactImageGallery from 'react-image-gallery';

import { TGalleryImage } from '@helpersTypes/TGalleryImage';

interface GalleryProps {
  images: TGalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => <ReactImageGallery items={images} />;

export default Gallery;
