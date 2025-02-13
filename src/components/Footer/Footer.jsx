import './Footer.css';
import githubLogo from '../../assets/githubLogo.svg';
import facebookLogo from '../../assets/facebookLogo.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__copyright'>
          &copy; {new Date().getFullYear()} Supersite, Powered by News API
        </p>
        <nav className='footer__links-wrapper'>
          <ul className='footer__links'>
            <li>
              <a href='#' className='footer__link footer__home' target='_blank'>
                Home
              </a>
            </li>
            <li>
              <a
                href='https://tripleten.com/'
                className='footer__link footer__triplenTen'
                target='_blank'
              >
                TriplenTen
              </a>
            </li>
          </ul>
          <ul className='footer__social-links'>
            <li>
              <a
                href='https://github.com/SawSimonLinn'
                className='footer__link-github'
                target='_blank'
              >
                <img
                  src={githubLogo}
                  alt='GitHub Logo'
                  className='footer__link-icon'
                />
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/sawsimonlinn/'
                className='footer__link-facebook'
                target='_blank'
              >
                <img
                  src={facebookLogo}
                  alt='Facebook Logo'
                  className='footer__link-icon'
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
