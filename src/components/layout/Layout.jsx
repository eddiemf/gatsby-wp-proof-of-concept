import React from 'react';
import PropTypes from 'prop-types';

import '../../index.css';
import HeaderContainer from '../header';

const Layout = ({ children }) => (
  <>
    <HeaderContainer />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
