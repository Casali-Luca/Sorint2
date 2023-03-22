import React from 'react';
import Slideshow from '../Components/Slideshow';
import images from '../Js/images';

const History = () => {
  return (
    <div>
      <h1>History</h1>
      <Slideshow images={images} />
      <p>paragrafo di testo</p>
    </div>
  );
};

export default History;