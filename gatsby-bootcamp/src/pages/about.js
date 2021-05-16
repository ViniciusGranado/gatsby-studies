import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Link } from "gatsby";

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>This is the about page.</p>
      <p>
        <Link to="/contact">Contact me!</Link>
      </p>
    </Layout>
  );
};

export default About;
