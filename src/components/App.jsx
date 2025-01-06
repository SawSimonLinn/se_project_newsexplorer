import React from 'react';
import '../blocks/App.css';

import Main from './Main';
import About from './About';
import Footer from './Footer';
import Navigation from './Navigation';
import SearchForm from './SearchForm';

const App = () => {
  return (
    <div>
      <Main />
      <SearchForm />
      <About />
      <Navigation />
      <Footer />
    </div>
  );
};

export default App;
