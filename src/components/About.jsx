import React from 'react';
import '../blocks/About.css';
import authorProfile from '../assets/author-image.jpg';

const About = () => {
  return (
    <section className='about__container'>
      <div className='about__left'>
        <img
          src={authorProfile}
          alt='author_profile'
          className='about__profile'
        />
      </div>
      <div className='about__right'>
        <h2 className='about__header'>About the author</h2>
        <p className='about__text'>
          Hello, Everyone! My name is Simon Linn and I am a Full-Stack Software
          Engineer based in California.
          <br />
          <br />
          My time at TripleTen was amazing. I learned important skills like
          JavaScript, React, and backend development by working on real
          projects. It helped me feel more confident and ready to solve real
          problems. If you are thinking about joining TripleTen, I’m happy to
          share my experience and help you get started. Let me know if you have
          any questions!
        </p>
      </div>
    </section>
  );
};

export default About;
