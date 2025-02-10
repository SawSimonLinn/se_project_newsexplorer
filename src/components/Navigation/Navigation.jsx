import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

import logOutBlack from '../../assets/logout-Black.svg';
import logOutWhite from '../../assets/logout-White.svg';

import MobileMenu from '../MobileMenu/MobileMenu';

import { currentPageContext } from '../../contexts/currentPageContext';
import { mobileContext } from '../../contexts/mobileContext';
import { currentUserContext } from '../../contexts/currentUserContext';

function Navigation({ onLoginClick, onLogout }) {
  const { currentPage, activeModal } = useContext(currentPageContext);
  const { currentUser, isLoggedIn } = useContext(currentUserContext);
  const { mobileMenuOpen, openMobileMenu, closeMobileMenu } =
    useContext(mobileContext);

  const handleMobileMenu = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  return (
    <div className='nav__container'>
      <nav
        className={`nav ${currentPage === '/saved-news' ? 'nav__saved' : ''} ${
          mobileMenuOpen ? 'nav__menu-open' : ''
        }`}
      >
        {currentPage === '/' || mobileMenuOpen ? (
          <NavLink to='/'>
            <p className='nav__logo-white nav__logo '>NewsExplorer</p>
          </NavLink>
        ) : (
          <NavLink
            to='/'
            // className='nav__button-home'
          >
            <p className='nav__logo-black nav__logo '>NewsExplorer</p>
          </NavLink>
        )}

        {currentPage === '/' ? (
          <button
            className={`nav__menu-button ${
              activeModal === '' ? 'nav__menu-button_hidden' : ''
            } ${mobileMenuOpen === true ? 'nav__menu-button_close' : ''}`}
            onClick={handleMobileMenu}
          />
        ) : (
          <button
            className={`nav__saved-btn ${
              activeModal === '' ? 'nav__saved-btn_hidden' : ''
            } ${mobileMenuOpen === true ? 'nav__saved-btn_close' : ''}`}
            onClick={handleMobileMenu}
          />
        )}

        {mobileMenuOpen && (
          <MobileMenu onLoginClick={onLoginClick} onLogout={onLogout} />
        )}

        {isLoggedIn && currentPage === '/' ? (
          <nav className='nav__user-container'>
            <NavLink to='/' className='nav__button-home'>
              Home
            </NavLink>
            <NavLink to='/saved-news' className='nav__button-saved-articles'>
              Saved Articles
            </NavLink>
            <button
              className={`nav__button-loggedin ${
                currentPage === '/' ? 'nav__button-loggedin-white' : ''
              }`}
              onClick={onLogout}
            >
              <span className='nav__username'>{currentUser.name}</span>
              <img
                src={currentPage === '/' ? logOutWhite : logOutBlack}
                alt='logout'
                className='nav__logout-icon'
              />
            </button>
          </nav>
        ) : isLoggedIn && currentPage === '/saved-news' ? (
          <nav className='nav__user-container'>
            <NavLink to='/' className='nav__saved__news-button-home'>
              Home
            </NavLink>
            <NavLink
              to='/saved-news'
              className='nav__button-saved-articles-user'
            >
              Saved Articles
            </NavLink>
            <button
              className={`nav__button-loggedin-black ${
                currentPage === '/' ? 'nav__button-loggedin' : ''
              }`}
              onClick={onLogout}
            >
              <span className='nav__username'>{currentUser.name}</span>
              <img
                src={currentPage === '/' ? logOutWhite : logOutBlack}
                alt='logout'
                className='nav__logout-icon'
              />
            </button>
          </nav>
        ) : (
          <div
            className={`nav__buttons ${mobileMenuOpen ? 'nav__menu-open' : ''}`}
          >
            <NavLink to='/' className='nav__button-home'>
              Home
            </NavLink>
            <button className='nav__button-signin' onClick={onLoginClick}>
              Sign in
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
