import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import Head from "../components/Head/Head";

const notFound = () => {
  return (
    <Layout>
      <Head title="404" />

      <h1>Page not found</h1>
      <p>
        <Link to="/">Head Home</Link>
      </p>
    </Layout>
  );
};

export default notFound;
