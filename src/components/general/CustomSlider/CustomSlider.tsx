import React, { ReactNode, forwardRef } from 'react';
import Slider, { Settings } from 'react-slick';

import { baseUrl } from '@constants/api';

interface IProps {
  images: string[];
  children?: ReactNode;
  settings?: Settings;
}

const defaultSettings: Settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomSlider = forwardRef<any, IProps>(({ images, children, settings = {} }, ref) => {
  if (children) {
    return (
      <Slider ref={ref} {...defaultSettings} {...settings}>
        {children}
      </Slider>
    );
  }

  return (
    <Slider ref={ref} {...defaultSettings} {...settings}>
      {images.map(x => (
        <div className="slider-slide" key={x}>
          <img className="responsive-img" src={`${baseUrl}/${x}`} alt="img" />
        </div>
      ))}
    </Slider>
  );
});

CustomSlider.displayName = 'CustomSlider';

export default CustomSlider;
