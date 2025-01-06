import React from 'react';
import ModalWithForm from './ModalWithForm';

const SignUpModal = ({}) => {
  return (
    <ModalWithForm title='Sign in' btnText='Sign in' secondaryBtnText='Sign up'>
      <label className='modal__label'>Email</label>
      <input
        type='email'
        className='modal__input'
        placeholder='Enter email'
        required
      />
      <label className='modal__label'>Password</label>
      <input
        type='password'
        className='modal__input'
        placeholder='Enter password'
        required
      />
    </ModalWithForm>
  );
};

export default SignUpModal;
