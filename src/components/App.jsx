import React from "react";
import "../blocks/App.css";

import Main from "./Main";
import About from "./About";
import Footer from "./Footer";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div>
      <Main />
      <About />
      <Navigation />
      <Footer />
    </div>
  );
};

export default App;
