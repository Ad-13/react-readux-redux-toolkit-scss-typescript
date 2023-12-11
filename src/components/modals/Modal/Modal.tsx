import React, { FC, PropsWithChildren, MouseEvent, ReactElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import useEscape from './hooks/useEscape';

import styles from './Modal.module.scss';

interface IProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  header?: ReactElement;
  footer?: ReactElement;
}

const Modal: FC<PropsWithChildren<IProps>> = ({ title, isOpen, onClose, children, header, footer }) => {
  console.log('Modal');

  useEscape(onClose, isOpen);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.modalOverlay}
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modalContent}
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
            transition={{ type: 'tween' }}
          >
            {header || (
              <div className={styles.modalHeader}>
                {title && <h4 className={styles.modalTitle}>{title}</h4>}
                <button
                  type="button"
                  className={styles.close}
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={onClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}

            <div className={styles.modalBody}>{children}</div>
            {footer && <div className={styles.modalFooter}>{footer}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ModalWithPortal: FC<PropsWithChildren<IProps>> = props => createPortal(<Modal {...props} />, document.body);

export default ModalWithPortal;
