import styled from 'styled-components';
import { Link } from 'gatsby';
import tw from 'tailwind.macro';
import { Container } from '../layout/Layout.styles';

const HeaderMenuItemLink = styled(Link)`
  ${tw`hover:text-purple-dark focus:text-purple-dark no-underline`}
  transition: all 300ms;
`;

const HeaderBase = styled.header`
  transition: all 300ms;
  ${tw`py-2 shadow fixed z-50 w-full`}
  ${props =>
    props.isTransparent ? tw`bg-transparent border-b-2` : tw`bg-white`}

  ${HeaderMenuItemLink} {
    ${props => (props.isTransparent ? tw`text-white` : tw``)}
    text-shadow: ${props => (props.isTransparent ? `0 1px 1px #000` : `none`)};
  }
`;

const StyledHeaderContainer = styled(Container)`
  ${tw`flex items-center`}
`;

const HeaderMenuItem = styled.li`
  ${tw`ml-6 font-bold`}
`;

const HeaderMainMenu = styled.ul`
  ${tw`ml-5 mr-auto my-0 flex items-end list-reset`}
`;

const HeaderLinksMenu = styled.ul`
  ${tw`ml-auto my-0 flex items-center list-reset`}
`;

export {
  HeaderBase,
  StyledHeaderContainer,
  HeaderMainMenu,
  HeaderLinksMenu,
  HeaderMenuItem,
  HeaderMenuItemLink,
};
