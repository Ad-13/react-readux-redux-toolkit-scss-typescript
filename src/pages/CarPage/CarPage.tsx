import React, { FC, useState } from 'react';

import Spinner from '@components/general/Spinner';
import ProductPage from '@components/general/ProductPage';
import ContactModal from '@components/modals/ContactModal';

import useCarDetails from '@hooks/useCarDetails';

import styles from './CarPage.module.scss';

const OrderContent: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContact = () => setIsModalOpen(true);

  const close = () => setIsModalOpen(false);

  return (
    <>
      <button className={styles.buyButton} onClick={handleContact}>
        Contact seller
      </button>
      {isModalOpen && <ContactModal onClose={close} />}
    </>
  );
};

const CarPage: FC = () => {
  const { carDetails, getPending } = useCarDetails();
  console.log(carDetails);

  if (!carDetails) return <div>Car not found</div>;

  if (getPending) return <Spinner />;

  return (
    <ProductPage
      images={carDetails.images}
      price={carDetails.price}
      title={carDetails.make}
      description={carDetails.description}
      orderContent={<OrderContent />}
    />
  );
};

export default CarPage;
