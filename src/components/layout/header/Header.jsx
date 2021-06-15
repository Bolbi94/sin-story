import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Badge, Grid } from '@material-ui/core';
import { Instagram, FavoriteBorder, Favorite, ShoppingCart, Undo } from '@material-ui/icons';
import { rootActions } from '../../../storage';
import routes from '../../../config/routes';
import { useWindowSize } from '../../../hooks/windowSize';
import logo from '../../../assets/logo/Sin-Story.png';
import logoSmall from '../../../assets/logo/Sin-Story-litle-log.png';
import styles from './header.module.css';

const Header = () => {
  const { favorites, cart, favoriteFilter } = useSelector(state => state.lingerie);
  const { setFavoriteFilter } = rootActions.lingeriesActions.useLingeriesActions();

  const { goBack } = useHistory();
  const location = useLocation();

  const { width } = useWindowSize();

  return (
    <Grid container alignItems='center' className={styles['container']}>
      <Grid item xs={4} className={styles['links']}>
        <a href="https://www.instagram.com/sin.story_/">
          <Instagram fontSize={'large'} />
        </a>
      </Grid>
      <Grid item xs={4} className={styles['logo']}>
        <Link to={"/"}>
          {
            width > 620
            ? <img alt='Sin Story' src={logo} height={100} />
            : <img alt='Sin Story' src={logoSmall} height={100} />
          }
        </Link>
      </Grid>
      {
        location.pathname !== routes.home
        ? <Grid item xs={4} className={styles['icons']}>
          <Undo fontSize='large' color='inherit' className={styles['undo-icon']} onClick={() => goBack()} />
        </Grid>
        : <Grid item xs={4} className={styles['icons']}>
          <Badge color='secondary' badgeContent={favorites?.length} showZero className={styles['badge']}>
            {
              favoriteFilter
              ? <Favorite fontSize='large' color='inherit' onClick={() => setFavoriteFilter(false)} />
              : <FavoriteBorder fontSize='large' color='inherit' onClick={() => setFavoriteFilter(true)} />
            }
          </Badge>
          <Badge color='secondary' badgeContent={cart?.length} showZero className={styles['badge']}>
            <Link to={"/order"}>
              <ShoppingCart fontSize='large' />
            </Link>
          </Badge>
        </Grid>
      }
    </Grid>
  );
};

export default Header;
