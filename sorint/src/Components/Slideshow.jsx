import React, { useState } from 'react';
import images from '../Js/images';

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      <img src={images[currentIndex]} alt="Slideshow" />
      <button onClick={prevImage}>Prev</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default SlideShow;