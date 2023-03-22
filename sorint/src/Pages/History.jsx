import React from 'react';
import Slideshow from '../Components/Slideshow';
import images from '../Js/images';
import '../Styles/History.css'

const History = () => {
  return (
    <>
    <h1 className='titolo'>History</h1>
    <div className="container"> 
    <Slideshow images={images} />
    </div>
    <p>paragrafo di testo</p>
  </>
    
  );
};

export default History;