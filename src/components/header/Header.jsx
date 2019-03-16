import React from 'react';
import Img from 'gatsby-image';

import {
  HeaderMenuItem,
  HeaderMenuItemLink,
  HeaderBase,
  StyledHeaderContainer,
  HeaderMainMenu,
  HeaderLinksMenu,
} from './Header.styles';

const Header = ({ logo }) => (
  <HeaderBase>
    <StyledHeaderContainer>
      <Img fixed={logo.childImageSharp.fixed} alt="Gatsby logo" />
      <HeaderMainMenu>
        <HeaderMenuItem>
          <HeaderMenuItemLink to="/">Intro</HeaderMenuItemLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <HeaderMenuItemLink to="/">The problem</HeaderMenuItemLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <HeaderMenuItemLink to="/">The solution</HeaderMenuItemLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <HeaderMenuItemLink to="/">About</HeaderMenuItemLink>
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

export default Header;
