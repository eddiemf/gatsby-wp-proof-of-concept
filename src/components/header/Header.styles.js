import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';
import { Container } from '../layout/Layout.styles';
import Logo from '../../assets/gatsby-logo.svg';
import tailwind from '../../../tailwind';
import { rgba } from 'polished';

const HeaderLogo = styled(Logo)`
  width: 100px;

  path {
    transition: 300ms;
  }
`;

const HeaderMenuItemLink = styled(Link)`
  ${tw`relative no-underline`}
  transition: all 300ms;

  &::after {
    ${tw`absolute block w-full bg-purple-dark`}
    content: '';
    opacity: 0;
    visibility: hidden;
    bottom: -15px;
    height: 4px;
    transition: 300ms;
  }

  &:hover,
  &:focus {
    &::after {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const HeaderBase = styled.header`
  ${tw`py-2 shadow fixed z-50 w-full`}
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${props => (props.isTransparent ? rgba(`#fff`, 0.3) : `transparent`)};
  background: ${props => (props.isTransparent ? `transparent` : `#fff`)};
  transition: all 600ms;

  ${HeaderMenuItemLink} {
    color: ${props => (props.isTransparent ? `white` : tailwind.colors[`grey-darkest`])};
  }

  ${HeaderLogo} {
    path:nth-child(1) {
      fill: ${props => (props.isTransparent ? `white` : tailwind.colors[`grey-darkest`])};
    }
  }
`;

const StyledHeaderContainer = styled(Container)`
  ${tw`flex items-center`}
`;

const HeaderMenuItem = styled.li`
  ${tw`ml-8 font-bold`}
`;

const HeaderMainMenu = styled.ul`
  ${tw`ml-5 mr-auto my-0 flex items-end list-reset`}
`;

const HeaderLinksMenu = styled.ul`
  ${tw`ml-auto my-0 flex items-center list-reset`}
`;

export {
  HeaderLogo,
  HeaderBase,
  StyledHeaderContainer,
  HeaderMainMenu,
  HeaderLinksMenu,
  HeaderMenuItem,
  HeaderMenuItemLink,
};
