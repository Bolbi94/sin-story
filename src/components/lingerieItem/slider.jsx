import React, { useRef } from 'react';
// import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
// import { Modal } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './lingerieItem.module.css';

const LeftArrow = (props) => {
  const { onClick } = props;

  return (
    <div className={styles['arrow-icon-left']} onClick={onClick}>
      <ChevronLeft color={'inherit'} fontSize={'large'} />
    </div>
  )
}

const RightArrow = (props) => {
  const { onClick } = props;

  return (
    <div className={styles['arrow-icon-right']} onClick={onClick}>
      <ChevronRight color={'inherit'} fontSize={'large'} />
    </div>
  )
}

const LingerieSlider = ({ slides }) => {
  // const [imageModalOpen, setImageModalOpen] = useState(false);
  // const [imageModalIndex, setImageModalIndex] = useState(0);

  const slideRef = useRef();
  // console.log(slides);
  const settings = {
    slidesToShow: 1,
    infinite: true,
    speed: 750,
    autoplay: false,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    arrows: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  }
  return (
    <div 
      onMouseOver={() => {slideRef.current.slickPlay()}} 
      onMouseOut={() => {slideRef.current.slickPause()}}
    >
      <Slider {...settings} ref={slideRef}>
        {
          slides?.map((slide, i) => {
            return (
              <div key={slide.id}>
                {slide}
              </div>
            )
          })
        }
      </Slider>
      {/* <Modal
        open={imageModalOpen}
        onClose={() => setImageModalOpen(false)}
      >
        {
          slides[imageModalIndex]
        }
      </Modal> */}
    </div>
  )
}

export default LingerieSlider;