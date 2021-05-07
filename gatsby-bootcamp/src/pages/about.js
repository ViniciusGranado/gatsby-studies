import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Link } from 'gatsby';


const About = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>This is the about page.</p>
      <p><Link to='/contact'>Contact me!</Link></p>
      <Footer />
    </div>
  );
};

export default About;