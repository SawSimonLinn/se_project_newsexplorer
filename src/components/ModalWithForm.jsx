import React from 'react';
import '../blocks/ModalWithForm.css';
import closeIcon from '../assets/close-icon.png';

const ModalWithForm = ({
  children,
  btnText,
  title,
  isOpen,
  onClose,
  onSubmit,

  onSecondaryBtnClick,
  secondaryBtnText,
}) => {
  return (
    <div>
      <div className={`modal ${isOpen ? 'modal_opened' : ''}`}>
        <div className='modal__container'>
          <button type='button' className='modal__close-btn' onClick={onClose}>
            <img src={closeIcon} alt='Close' draggable='false' />
          </button>
          <h3 className='modal__title'>{title}</h3>
          <form className='modal__form' onSubmit={onSubmit}>
            {children}
            <div className='button__container'>
              <button type='submit' className='modal__submit-btn'>
                {btnText}
              </button>
              <button
                type='button'
                className='modal__secondary-btn'
                onClick={onSecondaryBtnClick}
              >
                or
                <span className='modal__secondary-btn-color'>
                  {' '}
                  {secondaryBtnText}
                </span>
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
