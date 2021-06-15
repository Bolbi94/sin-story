import React from 'react';
import slide1 from '../../assets/slides/1.jpg';
import slide2 from '../../assets/slides/2.jpg';
import slide3 from '../../assets/slides/3.jpg';
import styles from './slides.module.css';

const descr1 = 'Срок изготовления 3-4 рабочих дня, бесплатная доставка при покупке от 1 комплекта';
const descr2 = 'Шьём по вашим меркам, чтобы сидело идеально';
const descr3 = 'Уникальный дизайн, который не оставит вас равнодушными';

export const Slides = [
  <div className={styles['container']}>
    <img src={slide1} alt='sin story slide' className={styles['slide']} />
    <div className={styles['description']}>
      <h2>{descr1}</h2>
    </div>
  </div>,
  <div className={styles['container']}>
  <img src={slide2} alt='sin story slide' className={styles['slide']} />
    <div className={styles['description']}>
      <h2>{descr2}</h2>
    </div>
  </div>,
  <div className={styles['container']}>
  <img src={slide3} alt='sin story slide' className={styles['slide']} />
    <div className={styles['description']}>
      <h2>{descr3}</h2>
    </div>
  </div>,
]
