import React from 'react';
import Slideshow from '../Components/Slideshow';
import images from '../Js/images';
import '../Styles/History.css'

const History = () => {
  return (
    
    <div style={{
      
      backgroundImage: 'url(ping-pong.gif)',
      backgroundRepeat:'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
    }}>
    <h1 className='titolo'>History</h1>
    <p className="gTitolo">"<span style={{color: '#a50000'}}>COME A CASA</span> MA PIU' IN GRANDE" - STAR</p>
    <p className = 'sottotesto'>Il presente progetto di PCTO si avvale dell'utilizzo della libreria OpenCV di Python 
          al fine di tracciare il percorso degli oggetti in gioco, nello specifico, la pallina. In caso la suddetta dovesse abbandonare il campo di gioco per 
          un intervallo di tempo maggiore di un secondo, fuori dal campo visivo della webcam, il punto verrà assegnato alla persona che ha effettuato il tiro, 
          attenendosi alle regole stabilite. Tuttavia, si rende necessario ancora l'avvio dell'implementazione del processo di tracciamento e la definizione 
          dell'evento che avverrà in concomitanza con l'uscita della pallina dal campo di gioco.</p>
    <div className="container"> 
    <Slideshow images={images}/>
    </div>

    <p className="gTitolo">"<span style={{color: '#a50000'}}>DREAM</span> TEAM" - I.G.N.</p>
    <p className = 'sottotesto'>A febbraio l'azienda Sorint è venuta nella nostra scuola con l'intento di farci seguire un corso di 6 ore sulla libreria React, seguiti dall'esperta Elisa Mazzeri. Ogni gruppo aveva il compito di realizzare un sito web di presentazione del proprio progetto utilizzando React e le conoscenze acquisite nelle ore del corso, ed è così che è nato questo portale.</p>
    </div>
  
  );
};

export default History; 