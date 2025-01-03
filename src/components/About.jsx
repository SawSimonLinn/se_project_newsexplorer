import React from "react";
import "../blocks/About.css";
import authorProfile from "../assets/author-image.jpeg";

const About = () => {
  return (
    <section className="about__container">
      <div className="about__left">
        <img
          src={authorProfile}
          alt="author_profile"
          className="about__profile"
        />
      </div>
      <div className="about__right">
        <h2 className="about__header">About the author</h2>
        <p className="about__text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
          <br />
          <br />
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
};

export default About;
