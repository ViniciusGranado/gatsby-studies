import React from "react";
import { Layout } from "../components/Layout/Layout";
import Head from "../components/Head/Head";

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />

      <h1>Contact</h1>
      <p>
        Please visit my
        <a href="https://github.com/ViniciusGranado" target="_blank">
          GitHub
        </a>
      </p>
    </Layout>
  );
};

export default Contact;
