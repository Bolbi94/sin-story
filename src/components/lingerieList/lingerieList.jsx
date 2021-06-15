import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';
import { Undo } from '@material-ui/icons';
import LingerieItem from '../lingerieItem/lingerieItem';
import { rootActions } from '../../storage';
import styles from './lingerieList.module.css';

const LingerieList = () => {
  const { lingeries, favorites, favoriteFilter } = useSelector(state => state.lingerie);
  const { setFavoriteFilter } = rootActions.lingeriesActions.useLingeriesActions();

  return (
    <Grid container item spacing={5} xs={12} justify='center' className={styles['container']}>
      {
        favoriteFilter
        ? favorites?.length 
        ? favorites.map((lingerie) => {
          const { id } = lingerie;
          
          return  (
            <Grid key={id} item>
              <Paper>
                <LingerieItem lingerie={lingerie} />
              </Paper>
            </Grid>
          );
        })
        : <Grid item xs={12}>
          <Paper className={styles['empty-list']}>
            <h1>Вы еще не добавили комплектов в избранное</h1>
            <Undo fontSize='large' color='inherit' className={styles['icon']} onClick={() => setFavoriteFilter(false)} />
          </Paper>
        </Grid>
        : lingeries?.length 
        ? lingeries.map((lingerie) => {
          const { id } = lingerie;

          return  (
            <Grid key={id} item>
              <Paper>
                <LingerieItem lingerie={lingerie} />
              </Paper>
            </Grid>
          );
        })
        : <Grid item xs={12}>
          <Paper className={styles['empty-list']}>
            <h1>Нет доступных комплетков</h1>
          </Paper>
        </Grid>
      }
    </Grid>
  );
};

export default LingerieList;
