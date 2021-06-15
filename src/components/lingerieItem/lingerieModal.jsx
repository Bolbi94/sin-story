import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { rootActions } from '../../storage';
import OrderForm from '../orderForm/orderForm';
import styles from './lingerieItem.module.css';

const LingerieModal = forwardRef(({ lingerie }, ref) => {
  const { titleImage, name } = lingerie;
  const [isOpen, setIsOpen] = useState(false);

  const { setSingleBuy } = rootActions.lingeriesActions.useLingeriesActions();

  useImperativeHandle(ref, () => ({
    openModal() {
      setIsOpen(true);
    }
  }));

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setSingleBuy({});
        setIsOpen(false);
      }}
      maxWidth={'sm'}
      aria-labelledby="draggable-dialog-title"
      style={{overflowY: 'auto'}}
    >
      <DialogContent style={{overflow: 'unset'}}>
        {titleImage}
      </DialogContent>
      <DialogTitle className={styles['modal-title']} id="draggable-dialog-title">
        {name}
      </DialogTitle>
      <DialogContent style={{overflow: 'unset'}} className={styles['modal-content']}>
        <OrderForm className={styles['order-form']} />
      </DialogContent>
    </Dialog>
  )
});

export default LingerieModal;
