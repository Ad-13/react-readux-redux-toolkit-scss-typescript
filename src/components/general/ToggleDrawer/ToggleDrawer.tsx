import React, { FC, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Drawer from '@components/general/Drawer';
import HamburgerButton from '@components/general/HamburgerButton';

import styles from './ToggleDrawer.module.scss';

const ToggleDrawer: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('ToggleDrawer');

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <HamburgerButton className={styles.hamburger} isOpen={isOpen} onClick={toggleIsOpen} />
      <AnimatePresence>
        {isOpen && <Drawer onOverlayClick={toggleIsOpen}>test</Drawer>}
      </AnimatePresence>
    </>
  );
};

export default ToggleDrawer;
