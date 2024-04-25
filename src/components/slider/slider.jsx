import React from 'react';
import { Grid } from '@material-ui/core';
import { Slides } from './slides';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './slider.module.css';

const SliderComponent = () => {
  const settings = {
    slidesToShow: 1,
    infinite: true,
    speed: 3500,
    autoplay: true,
    autoplaySpeed: 9000,
    pauseOnHover: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  };
  
  return (
    <Grid container item direction='column'>
      <Grid container item>
        <Grid item xs={12} className={styles['container']}>
          <Slider {...settings} >
            {
            Slides?.map((slide, i) => {
                return (
                  <div key={i}>
                    {slide}
                  </div>
                )
              })
            }
          </Slider>
        </Grid>
      </Grid>
      <Grid item className={styles['bio']}>
        <h2>
          {`Купальники и бельё ручной работы с уникальным дизайном✨`}<br /><br />

          {` - Индивидуальный пошив по Вашим меркам`}<br />
          {` - Есть пошив на большие размеры`}<br />
          {` - Подарочные сертификаты от 500 грн`}<br />
          {` - Каждую позицию можно приобрести отдельно`}<br /><br />

          {`Пишите нам в instagram @sin.story_  для консультации или оставляйте заявку на нашем сайте и мы с Вами свяжемся. 📝`}
        </h2>
      </Grid>
    </Grid>
  );
};

export default SliderComponent;
