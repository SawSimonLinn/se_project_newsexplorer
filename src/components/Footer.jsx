import React from 'react';
import '../blocks/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__left'>
        <p className='footer__text'>
          &copy; 2024 Supersite, Powered by News API
        </p>
      </div>
      <div className='footer__right'>
        <ul className='footer__icons'>
          <li className='footer__links'>
            <a className='footer__item' href='#'>
              Home
            </a>
          </li>
          <li className='footer__links'>
            <a
              className='footer__item'
              href='https://tripleten.com/'
              target='blank'
            >
              TripleTen
            </a>
          </li>
          <li className='footer__link'>
            <a
              className='footer__item'
              href='https://github.com/SawSimonLinn'
              target='blank'
            >
              <div className='github__icon'></div>
            </a>
          </li>
          <li className='footer__link'>
            <a
              className='footer__item'
              href='https://www.facebook.com/sawsimonlinn/'
              target='blank'
            >
              <div className='facebook__icon'></div>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
