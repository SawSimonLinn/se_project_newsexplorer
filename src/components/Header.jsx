import React from 'react';
import '../blocks/Header.css';

const Header = ({ handleLoginInClick }) => {
  return (
    <>
      <header className='header'>
        <div className='header__left'>
          <p className='header__logo'>NewsExplorer</p>
        </div>
        <div className='header__right'>
          <button className='header__home active'>Home</button>
          <button className='header__button' onClick={handleLoginInClick}>
            Sign in
          </button>
        </div>
      </header>
      <div className='header__underline'></div>
    </>
  );
};

export default Header;
