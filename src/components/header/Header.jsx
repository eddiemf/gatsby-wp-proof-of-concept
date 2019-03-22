import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
  HeaderMenuItem,
  HeaderMenuItemLink,
  HeaderBase,
  StyledHeaderContainer,
  HeaderMainMenu,
  HeaderLinksMenu,
  HeaderLogo,
} from './Header.styles';

const Header = ({ isTransparent }) => {
  return (
    <HeaderBase isTransparent={isTransparent}>
      <StyledHeaderContainer>
        <Link to="/">
          <HeaderLogo alt="Gatsby logo" />
        </Link>

        <nav>
          <HeaderMainMenu>
            <HeaderMenuItem>
              <HeaderMenuItemLink to="/#intro">Intro</HeaderMenuItemLink>
            </HeaderMenuItem>
            <HeaderMenuItem>
              <HeaderMenuItemLink to="/#the-problem">The problem</HeaderMenuItemLink>
            </HeaderMenuItem>
            <HeaderMenuItem>
              <HeaderMenuItemLink to="/#the-solution">The solution</HeaderMenuItemLink>
            </HeaderMenuItem>
            <HeaderMenuItem>
              <HeaderMenuItemLink to="/#about-me">About me</HeaderMenuItemLink>
            </HeaderMenuItem>
          </HeaderMainMenu>
        </nav>

        <HeaderLinksMenu>
          <HeaderMenuItem>
            <HeaderMenuItemLink to="/blog">Blog</HeaderMenuItemLink>
          </HeaderMenuItem>
        </HeaderLinksMenu>
      </StyledHeaderContainer>
    </HeaderBase>
  );
};

Header.propTypes = {
  isTransparent: PropTypes.bool,
};

export default Header;
