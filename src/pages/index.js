import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import Head from '../components/Head/Head';

const Home = () => {
  return (
    <Layout>
      <Head title='Home'/>

      <h1>Home</h1>
      <p>This is the home page</p>
      <p>
        <Link to="/contact">Contact me!</Link>
      </p>
    </Layout>
  );
};

export default Home;
