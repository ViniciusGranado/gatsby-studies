import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Link } from "gatsby";
import Head from "../components/Head/Head";

const About = () => {
  return (
    <Layout>
      <Head title="About" />

      <h1>About</h1>
      <p>This is the about page.</p>
      <p>
        <Link to="/contact">Contact me!</Link>
      </p>
    </Layout>
  );
};

export default About;
