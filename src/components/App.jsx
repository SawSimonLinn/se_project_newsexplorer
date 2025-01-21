import React, { useState } from 'react';
import '../blocks/App.css';

import Main from './Main';
import About from './About';
import Footer from './Footer';
import Navigation from './Navigation';
import SearchForm from './SearchForm';
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';
import CompleteModal from './CompleteModal';

const App = () => {
  const [activeModal, setActiveModal] = useState('');

  const handleRegisterModalClick = () => {
    setActiveModal('sign-up');
  };

  const handleLoginInClick = () => {
    setActiveModal('sign-in');
  };

  const closeActiveModal = () => {
    setActiveModal('');
  };

  const [isSuccessfulRegistration, setIsSuccessfulRegistration] =
    useState(false);

  const onCloseSuccessModal = () => {
    setIsSuccessfulRegistration(false);
  };

  const handleSignInModalClick = () => {
    setIsSuccessfulRegistration(true);
  };

  return (
    <div>
      <Main handleLoginInClick={handleLoginInClick} />
      <SignUpModal
        isOpen={activeModal === 'sign-up'}
        onClose={closeActiveModal}
        onLogin={handleRegisterModalClick}
        onClick={handleLoginInClick}
        btnText={'Sign up'}
        secondaryBtnText={'Sign in'}
      />
      <SignInModal
        isOpen={activeModal === 'sign-in'}
        onClose={closeActiveModal}
        onLogin={handleLoginInClick}
        onClick={handleRegisterModalClick}
        btnText={'Sign in'}
        secondaryBtnText={'Sign up'}
      />
      <CompleteModal
        onClose={onCloseSuccessModal}
        isOpen={isSuccessfulRegistration}
        onLoginClick={() => {
          handleSignInModalClick();
          onCloseSuccessModal();
        }}
      />
      <SearchForm />
      <About />
      <Navigation />
      <Footer />
    </div>
  );
};

export default App;
