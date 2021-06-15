import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import routes from '../../config/routes';
import LingerieSlider from './slider';
import LingerieModal from './lingerieModal';
import { rootActions } from '../../storage';
import { useWindowSize } from '../../hooks/windowSize';
import styles from './lingerieItem.module.css';

const LingerieItem = ({ lingerie }) => {  
  const { favoriteIds, cartIds } = useSelector(state => state.lingerie);
  const { addFavorite, removeFavorite, addToCart, removeFromCart, setSingleBuy } = rootActions.lingeriesActions.useLingeriesActions();

  const { images, name, price, id } = lingerie;

  const { width, height } = useWindowSize();

  const modalRef = useRef();

  const history = useHistory();

  return (
    <Grid container direction='column' justify='space-between' className={styles['container']}>
      <div className={styles['like-icon']}>
        {
          favoriteIds.includes(id)
          ? <Favorite fontSize='large' color='inherit' onClick={() => removeFavorite(id)} />
          : <FavoriteBorder fontSize='large' color='inherit' onClick={() => addFavorite(id)} />
        }
      </div>
      <Grid container item xs={12} direction='row'>
        <Grid item xs={12} className={styles['slider-container']}>
          <LingerieSlider slides={images} />
        </Grid>
      </Grid>
      <Grid container xs={12} spacing={3} item style={{margin: 0}}>
        <Grid item xs={12} className={styles['name']}>
          <h2>{name}</h2>
        </Grid>
        <Grid item xs={12} className={styles['price']}>
          <h3>{price}</h3>
        </Grid>
        <Grid item xs={12} className={styles['buttons']}>
          {
            cartIds.includes(id)
            ? <Button variant="outlined" onClick={() => removeFromCart(id)}>Убрать из корзины</Button>
            : <Button variant="outlined" onClick={() => addToCart(id)}>Добавить в корзину</Button>
          }
          <Button variant="outlined" onClick={() => {
              setSingleBuy(id);
              if (width > 620 && height > 620) {
                modalRef.current.openModal();
              } else {
                history.push(routes.quickorder);
              }
            }}>Купить в один клик</Button>
        </Grid>
      </Grid>
      <LingerieModal lingerie={lingerie} ref={modalRef} />
    </Grid>
  );
};

export default LingerieItem;
