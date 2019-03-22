import React, { useEffect, useState } from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

const HeaderContainer = ({ alwaysVisible = false }) => {
  const [isTransparent, setIsTransparent] = useState(!alwaysVisible);
  useEffect(() => {
    if (alwaysVisible) return;

    document.addEventListener(`scroll`, () => {
      if (window.scrollY > 80) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    });
  }, []);

  return <Header isTransparent={isTransparent} />;
};

HeaderContainer.propTypes = {
  alwaysVisible: PropTypes.bool,
};

export default HeaderContainer;
