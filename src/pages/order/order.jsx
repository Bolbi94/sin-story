import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Grid, Paper } from '@material-ui/core';
import { Undo } from '@material-ui/icons';
import OrderList from './orderList';
import styles from './order.module.css';

const Order = () => {
  const { cart, goingToRemoveFromCart } = useSelector(state => state.lingerie);

  const { goBack } = useHistory();

  return (
    <React.Fragment>
      {
        !!(cart?.length || goingToRemoveFromCart?.length) && <OrderList />
      }
      {
        !cart?.length && <Grid container justify='center' alignContent='center' className={styles['container']}>
          <Grid container item xs={12}>
            <Paper className={styles['empty-list']}>
              <h1>Ваша корзина пуста</h1>
              <Undo fontSize='large' color='inherit' className={styles['undo']} onClick={() => goBack()} />
            </Paper>
          </Grid>
        </Grid>
      }
    </React.Fragment>
  )
}

export default Order;
