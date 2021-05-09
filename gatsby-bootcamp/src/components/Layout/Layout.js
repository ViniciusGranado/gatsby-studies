import React, { Children } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import '../../styles/index.scss';
import * as layoutStyles from './Layout.module.scss';

export const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>

      <Footer />
    </div>
  );
};