import React from 'react';
import PropTypes from 'prop-types';

import '../../index.css';
import HeaderContainer from '../header';

const Layout = ({ isSinglePost = false, children }) => (
  <>
    <HeaderContainer alwaysVisible={isSinglePost} />
    {children}
  </>
);

Layout.propTypes = {
  isSinglePost: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
