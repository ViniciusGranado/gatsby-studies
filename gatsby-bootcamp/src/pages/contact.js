import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>Please visit my <a href='https://github.com/ViniciusGranado' target='_blank'>GitHub</a></p>
      <Footer />
    </div>
  );
};

export default Contact;