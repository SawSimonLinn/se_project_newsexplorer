import React from "react";
import "../blocks/App.css";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import About from "./About";
import Navigation from "./Navigation";
import Preloader from "./Preloader";
import SearchForm from "./SearchForm";

const App = () => {
  return (
    <div>
      <h1>hello world</h1>
      <Header />
      <Main />
      <Footer />
      <About />
      <Navigation />
      <Preloader />
      <SearchForm />
    </div>
  );
};

export default App;
