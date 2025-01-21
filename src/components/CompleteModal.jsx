import React from 'react';
import '../blocks/CompleteModal.css';
import closeIcon from '../assets/close-icon.png';

const CompleteModal = ({ isOpen, onClose, onLoginClick }) => {
  return (
    <>
      <div className={`modal ${isOpen ? 'modal__opened' : ''}`}>
        <div className='complete__modal_container'>
          <button type='button' className='modal__close-btn' onClick={onClose}>
            <img src={closeIcon} alt='Close' draggable='false' />
          </button>
          <h3 className='complete__modal_title'>
            Registration successfully
            <br />
            completed!
          </h3>
          <button
            type='button'
            className='compete__modal_btn'
            onClick={onLoginClick}
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default CompleteModal;
