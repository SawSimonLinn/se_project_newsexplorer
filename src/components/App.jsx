import React from 'react';
import '../blocks/App.css';

import Main from './Main';
import About from './About';
import Footer from './Footer';
import Navigation from './Navigation';
import SearchForm from './SearchForm';
import SignUpModal from './SignUpModal';

const App = () => {
  return (
    <div>
      <Main />
      <SignUpModal />
      <SearchForm />
      <About />
      <Navigation />
      <Footer />
    </div>
  );
};

export default App;
