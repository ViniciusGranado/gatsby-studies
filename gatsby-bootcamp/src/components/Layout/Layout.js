import React, { Children } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import '../../styles/index.scss';

export const Layout = (props) => {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  );
};