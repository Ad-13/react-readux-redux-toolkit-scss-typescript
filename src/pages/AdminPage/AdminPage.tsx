import React, { FC, useState } from 'react';

import CategorySelector from './components/CategorySelector';
import TableSwitcher from './components/TableSwitcher';

import { ECategories } from '@enums/ECategories';

import styles from './AdminPage.module.scss';

const AdminPage: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ECategories | null>(null);

  const handleSelectCategory = async (value: ECategories) => {
    console.log(value);
    setSelectedCategory(value);
  };

  return (
    <>
      <div className={styles.title}>AdminPage</div>
      <CategorySelector onSelectCategory={handleSelectCategory} />
      <TableSwitcher selectedCategory={selectedCategory} />
    </>
  );
};

export default AdminPage;
