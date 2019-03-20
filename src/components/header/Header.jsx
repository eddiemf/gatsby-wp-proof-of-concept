import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import {
  HeaderMenuItem,
  HeaderMenuItemLink,
  HeaderBase,
  StyledHeaderContainer,
  HeaderMainMenu,
  HeaderLinksMenu,
} from './Header.styles';

const Header = ({ logo, isTransparent }) => {
  return (
    <HeaderBase isTransparent={isTransparent}>
      <StyledHeaderContainer>
        <Link to="/">
          <Img fixed={logo.childImageSharp.fixed} alt="Gatsby logo" />
        </Link>
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

        <HeaderLinksMenu>
          <HeaderMenuItem>
            <HeaderMenuItemLink to="/blog">Blog</HeaderMenuItemLink>
          </HeaderMenuItem>
        </HeaderLinksMenu>
      </StyledHeaderContainer>
    </HeaderBase>
  );
};

export default Header;
