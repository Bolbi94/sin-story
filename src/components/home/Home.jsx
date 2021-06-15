import { Grid } from '@material-ui/core';
import React from 'react';
import LingerieList from '../lingerieList/lingerieList';
import Slider from '../slider/slider';
// import styles from './home.module.css';

const Home = () => {
  return (
    <Grid container item justify='center'>
      <Slider />
      <LingerieList />
    </Grid>
  )
}

export default Home;
