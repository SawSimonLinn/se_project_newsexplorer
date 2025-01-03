import React from "react";
import "../blocks/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__text">
          &copy; 2024 Supersite, Powered by News API
        </p>
      </div>
      <div className="footer__right">
        <div className="footer__icons">
          <button className="footer__button">Home</button>
          <button className="footer__button">TripleTen</button>
          <button className="footer__link github__icon"></button>
          <button className="facebook__icon"></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
