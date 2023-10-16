import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import './Carousel.css'

function CarouselC(props) {
  const { images } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = images.map((image, index) => {
  return (
    <CarouselItem
      className="custom-tag"
      tag="div"
      key={index}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
    >
      <div className="">
        <img className='c-img carousel-overlay' src={image} alt={`Slide ${index + 1}`} />
        <CarouselCaption
          className="text-white text-left ctext-size"
          captionText={`Fornax is cutting-edge test automation software that streamlines testing processes and enhances software quality with precision and efficiency.`}
          captionHeader={`Welcome to FORNAX AUTOMATION`}
        />
      </div>
    </CarouselItem>
  );
});


  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 83vh;
              background: black;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={images}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default CarouselC;
