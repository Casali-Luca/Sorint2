// import React from 'react'

// const Footer = ()=>{
//     return(
//         <footer>
//             <div className='footer-container'>
//                 <div></div>
//                 <div></div>
//                 <div></div>
//                 <div></div>
//             </div>
//         </footer>
//     )
// }
// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer>
      <h2>Contatti</h2>
      <p>----------------------------------------</p>
      <p>#Indirizzo:Via Caravaggio, 32 - Treviglio</p>
      <p>#Per contattarci ecco le nostre mail:</p>
      <ul style={{ listStyle: 'none'}}>
        <li style={{ marginRight: '10px' }}>
          <a style={{ color: '#fff' }}>casalixluca@gmail.com</a>
        </li>
        <li style={{ marginRight: '10px' }}>
            <a style={{ color: '#fff' }}>muscolinoalessandro05@gmail.com</a>
        </li>
        <li>
            <a style={{ color: '#fff' }}>thatboifrunz@gmail.com</a>
        </li>
        <li>
            <a style={{ color: '#fff' }}>simone.conca2006@gmail.com</a>
        </li>
        <li>
            <a style={{ color: '#fff' }}>laila0azza5@gmail.com</a>
        </li>
        <li>
            <a style={{ color: '#fff' }}>malaikaahmad03@gmail.com</a>
        </li>
        <li>
            <a style={{ color: '#fff' }}>malaikaahmad03@gmail.com</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;