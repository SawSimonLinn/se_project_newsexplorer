import React from "react";
import "../blocks/Main.css";
import Header from "./Header";

const Main = () => {
  return (
    <main className="hero">
      <Header />
      <h1 className="hero__title">What's going on in the world?</h1>
      <p className="hero__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="hero__searchbar">
        <input
          className="hero__searchbar_input"
          type="text"
          placeholder="Enter topic"
        />
        <button className="hero__searchbar_button">Search</button>
      </div>
    </main>
  );
};

export default Main;
