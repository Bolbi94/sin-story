import React from 'react';
import { Grid } from '@material-ui/core';
import { RemoveShoppingCart } from '@material-ui/icons';
import { rootActions } from '../../storage';
import { useWindowSize } from '../../hooks/windowSize';
import styles from './orderItem.module.css';

const OrderItem = ({ lingerie }) => {
  const { addWaitRemoveFromCart } = rootActions.lingeriesActions.useLingeriesActions();

  const { titleImage, name, price, id } = lingerie;

  const { width } = useWindowSize();

  return (
    <Grid container item xs={12} justify='center'>
      <Grid item xs={4}>
        <div className={styles['image-cell']}>
          {
            titleImage
          }
        </div>
      </Grid>
      {
        width > 620
        ? <React.Fragment>
          <Grid item xs={4}>
            <div className={styles['cell']}>
              <h2>{name}</h2>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={styles['cell']}>
              <h2>{price}</h2>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div className={styles['cell']}>
              <RemoveShoppingCart fontSize='large' color='inherit' className={styles['icon']} onClick={() => addWaitRemoveFromCart(id)} />
            </div>
          </Grid>
        </React.Fragment>
        : <React.Fragment>
          <Grid container item xs={5} direction='column' justify='center' alignItems='center' style={{textAlign: 'center', display: 'flex'}}>
            <h2>{name}</h2>
            <h2>{price}</h2>
          </Grid>
          <Grid item xs={3}>
            <div className={styles['cell']}>
              <RemoveShoppingCart fontSize='large' color='inherit' className={styles['icon']} onClick={() => addWaitRemoveFromCart(id)} />
            </div>
          </Grid>
        </React.Fragment>
      }
      
    </Grid>
  );
}

export default OrderItem;
