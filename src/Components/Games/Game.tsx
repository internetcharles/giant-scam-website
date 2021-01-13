import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

interface Props {
  images: string[]
}

export const Game: React.FC<Props> = ({ images }) => {
  return (
      <Carousel infiniteLoop showThumbs={false} swipeable={true} showArrows={true} width={"1000px"} dynamicHeight={true} autoPlay>
        <div>
          <img src={images[0]} alt="One" />
          <p></p>
        </div>
        <div>
          <img src={images[1]} alt="Two" />
          <p></p>
        </div>
        <div>
          <img src={images[2]} alt="Three" />
          <p></p>
        </div>
      </Carousel>
  );
};