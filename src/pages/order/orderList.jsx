import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Grid, Paper, Snackbar } from '@material-ui/core';
import { rootActions } from '../../storage';
import OrderItem from './orderItem';
import OrderForm from '../../components/orderForm/orderForm';
import styles from './orderList.module.css';

const OrderList = () => {
  const { cart, goingToRemoveFromCart } = useSelector(state => state.lingerie);
  const { removeFromCart, cancelRemoveFromCart, clearWaitRemoveFromCart } = rootActions.lingeriesActions.useLingeriesActions();

  useEffect(() => {
    return () => {
      clearWaitRemoveFromCart();
    };
  }, []);

  return (
    <React.Fragment>
      {
        !!cart?.length && <Grid container spacing={3} className={styles['container']} style={{margin: 0}}>
          <Grid container item spacing={3} justify='center' style={{margin: 0}}>
            {
              cart?.map(lingerie => {
                const { id } = lingerie;

                return (
                  <Grid key={id} item xs={12}>
                    <Paper>
                      <OrderItem lingerie={lingerie} />
                    </Paper>
                  </Grid>
                );
              })
            }
          </Grid>
          <Grid container item spacing={3} justify='center' alignContent='flex-start' style={{margin: 0}}>
            <Grid item xs={12}>
              <Paper className={styles['form-container']}>
                <OrderForm className={styles['form-control']} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      }
      {
        !!goingToRemoveFromCart?.length &&
        goingToRemoveFromCart.map(lingerie => {
          const { id, name } = lingerie;

          return (
            <Snackbar
              key={id}
              open={goingToRemoveFromCart.filter(l => l.id === id).length}
              autoHideDuration={6000}
              onClose={(e, reason) => {
                if (reason === 'clickaway') {
                  return;
                }
                removeFromCart(id);
              }}
              message={`${name} был удален из корзины`}
              action={
                <Button color='secondary' size='small' onClick={() => cancelRemoveFromCart(id)}>
                  ОТМЕНА
                </Button>
              }
            />
          );
        })
      }
    </React.Fragment>
  );
};

export default OrderList;
