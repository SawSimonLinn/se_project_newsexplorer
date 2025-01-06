import React from 'react';
import '../blocks/ModalWithForm.css';
import closeIcon from '../assets/close-icon.png';

const ModalWithForm = ({ title, children, btnText, secondaryBtnText }) => {
  return (
    <div>
      <div className='modal'>
        <div className='modal__container'>
          <button type='button' className='modal__close-btn'>
            <img src={closeIcon} alt='Close' draggable='false' />
          </button>
          <h3 className='modal__title'>{title}</h3>
          <form className='modal__form'>
            {children}
            <div className='button__container'>
              <button type='submit' className='modal__submit-btn'>
                {btnText}
              </button>
              <button type='button' className='modal__secondary-btn'>
                or {secondaryBtnText}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='overlay'></div>
    </div>
  );
};

export default ModalWithForm;
