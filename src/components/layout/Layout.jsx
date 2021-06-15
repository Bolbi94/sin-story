import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './header/Header';
import Footer from './footer/Footer';
import styles from './layout.module.css';

const Layout = (props) => {
  const { children } = props;
  return (
    <Grid container className={styles['app-container']}>
      <Header />
      <Grid container className={styles['body-container']}>{children}</Grid>
      <Footer />
    </Grid>
  )
}

export default Layout;
