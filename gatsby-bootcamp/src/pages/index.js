import React from "react";
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Link } from 'gatsby';

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <p>This is the home page</p>
      <p><Link to='/contact'>Contact me!</Link></p>
      <Footer />
    </div>
  );
};

export default Home;