import React from "react";
import { Link } from 'gatsby';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
      <p><Link to='/contact'>Contact me!</Link></p>
    </div>
  );
};

export default Home;