import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import OrderForm from '../../components/orderForm/orderForm';
import styles from './quickOrder.module.css';

const QuickOrder = () => {
  const { singleBuy } = useSelector(state => state.lingerie);

  return (
    <Grid container className={styles['container']}>
      <Grid item xs={12} className={styles['image']}>
        {singleBuy.titleImage}
      </Grid>
      <Grid item xs={12} className={styles['title']}>
        <h2>{singleBuy.name}</h2>
      </Grid>
      <Grid item xs={12}>
        <OrderForm className={styles['order-form']} />
      </Grid>
    </Grid>
  );
}

export default QuickOrder;
