import React from 'react';

const Footer = () => {

  return (
    <footer style={{}}>
      <h2>Contatti</h2>
      <p>----------------------------------------</p>
      <p>#Indirizzo:Via Caravaggio, 32 - Treviglio</p>
      <p>#Per contattarci ecco le nostre mail:</p>
      <ul style={{ listStyle: 'none'}}>
        <li style={{ marginRight: '10px' }}>
          <a href='mailto: {casalixluca@gmail.com}' style={{ color: '#fff' }}>casalixluca@gmail.com</a>
        </li>
        <li style={{ marginRight: '10px' }}>
            <a href='mailto: {muscolinoalessandro05@gmail.com}' style={{ color: '#fff' }}>muscolinoalessandro05@gmail.com</a>
        </li>
        <li>
            <a href='mailto: {thatboifrunz@gmail.com}' style={{ color: '#fff' }}>thatboifrunz@gmail.com</a>
        </li>
        <li>
            <a href='mailto: {simone.conca2006@gmail.com}' style={{ color: '#fff' }}>simone.conca2006@gmail.com</a>
        </li>
        <li>
            <a href='mailto: {laila0azza5@gmail.com}' style={{ color: '#fff' }}>laila0azza5@gmail.com</a>
        </li>
        <li>
            <a href='mailto: {malaikaahmad03@gmail.com}' style={{ color: '#fff' }}>malaikaahmad03@gmail.com</a>
        </li>
        <li>
            <a href='mailto: {misciapopov199@gmail.com}' style={{ color: '#fff' }}>misciapopov199@gmail.com</a>
        </li>
        <li>
            <a href='mailto: {n.giavarini05@gmail.com}' style={{ color: '#fff' }}>n.giavarini05@gmail.com</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;