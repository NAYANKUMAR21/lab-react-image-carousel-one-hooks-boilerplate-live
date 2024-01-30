import React, { useState } from 'react';
import './Carousel.css';
import { images } from '../data/CarouselData';

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// complete the function below:
function Carousel() {
  const [index, setIndex] = useState(0);
  console.log(index);
  //   console.log(images);

  return (
    <div>
      <ArrowBackIosIcon
        onClick={() => {
          if (index == 0) {
            setIndex(2);
          } else {
            setIndex(index - 1);
          }
        }}
      />

      <img src={images[index].img} alt="" style={{ width: '150px' }} />

      <ArrowForwardIosIcon
        onClick={() => {
          if (index == 2) {
            setIndex(0);
          } else {
            setIndex(index + 1);
          }
        }}
      />
    </div>
  );
}

export default Carousel;
