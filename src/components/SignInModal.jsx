import React, { useEffect } from 'react';
import ModalWithForm from './ModalWithForm';
import { useFormWithValidation } from '../hooks/useForm';

const SignInModal = ({
  isOpen,
  onClose,
  onLogin,
  onClick,
  btnText,
  secondaryBtnText,
}) => {
  // const currentUser = useContext(CurrentUserContext);
  const inputValues = {
    email: '',
    password: '',
  };

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation(inputValues);

  const handleSubmit = e => {
    e.preventDefault();
    onLogin(values);
  };

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  return (
    <ModalWithForm
      title='Sign in'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      btnText={btnText}
      secondaryBtnText={secondaryBtnText}
      onSecondaryBtnClick={onClick}
    >
      <label className='modal__label'>Email</label>
      <input
        type='email'
        name='email'
        placeholder='Enter email'
        value={values.email || ''}
        onChange={handleChange}
        className={`modal__input ${
          errors.email ? 'modal__input_type_error' : ''
        }`}
        required
        autoComplete='email'
      />
      <label className='modal__label'>Password</label>
      <input
        type='password'
        name='password'
        placeholder='Enter password'
        value={values.password || ''}
        onChange={handleChange}
        className={`modal__input ${
          errors.password ? 'modal__input_type_error' : ''
        }`}
        required
        autoComplete='current-password'
      />
    </ModalWithForm>
  );
};

export default SignInModal;
