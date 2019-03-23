import React from 'react';
import PropTypes from 'prop-types';
import 'swiper/dist/css/swiper.min.css';

import '../../index.css';
import HeaderContainer from '../header';

const Layout = ({ page, children }) => (
  <>
    <HeaderContainer alwaysVisible={page === `single-post`} page={page} />
    {children}
  </>
);

Layout.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
