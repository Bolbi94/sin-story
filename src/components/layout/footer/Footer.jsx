import React from 'react';
import { Grid } from '@material-ui/core';
import { Instagram, Email } from '@material-ui/icons';
import logo from '../../../assets/logo/Sin-Story.png';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <Grid container direction='column' justify='center' alignItems='center' className={styles['footer']}>
      <Grid item className={styles['links']}>
        <h2>sin.story.stefani@gmail.com</h2>
        <a href="mailto:sin.story.stefani@gmail.com">
          <Email fontSize={'large'} />
        </a>
      </Grid>
      <Grid item className={styles['links']}>
        <h2>@sin.story_</h2>
        <a href="https://www.instagram.com/sin.story_/">
          <Instagram fontSize={'large'} />
        </a>
      </Grid>
      <Grid item>
        <img alt='logo' src={logo} height={100} />
      </Grid>
    </Grid>
  )
}

export default Footer;
