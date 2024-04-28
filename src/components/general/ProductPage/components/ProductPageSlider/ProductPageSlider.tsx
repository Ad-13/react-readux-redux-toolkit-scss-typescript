import React, { FC, useEffect, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import CustomSlider from '@components/general/CustomSlider';

import styles from './ProductPageSlider.module.scss';

interface IProps {
  images: string[];
}

const ProductPageSlider: FC<IProps> = ({ images }) => {
  const [nav1, setNav1] = useState<Slider | undefined>();
  const [nav2, setNav2] = useState<Slider | undefined>();
  const sliderRef1 = useRef<Slider>(null);
  const sliderRef2 = useRef<Slider>(null);

  const settings1: Settings = {
    asNavFor: nav2,
    dots: false,
    arrows: true,
    infinite: true,
    className: styles.mainSlider,
  };

  const settings2: Settings = {
    asNavFor: nav1,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    className: styles.navSlider,
  };

  useEffect(() => {
    if (sliderRef1.current) setNav1(sliderRef1.current);
    if (sliderRef2.current) setNav2(sliderRef2.current);
  }, []);

  return (
    <div className={styles.sliders}>
      <CustomSlider images={images} ref={sliderRef1} settings={settings1} />
      <CustomSlider images={images} ref={sliderRef2} settings={settings2} />
    </div>
  );
};

export default ProductPageSlider;
