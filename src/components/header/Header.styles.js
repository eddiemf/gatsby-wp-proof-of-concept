import styled from 'styled-components';
import { Link } from 'gatsby';
import tw from 'tailwind.macro';
import { Container } from '../layout/Layout.styles';

const HeaderBase = styled.header`
  ${tw`bg-white py-2 shadow fixed z-50 w-full`}
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

const HeaderMenuItemLink = styled(Link)`
  ${tw`text-black hover:text-purple-dark focus:text-purple-dark transition transition-delay-none no-underline`}
`;

export {
  HeaderBase,
  StyledHeaderContainer,
  HeaderMainMenu,
  HeaderLinksMenu,
  HeaderMenuItem,
  HeaderMenuItemLink,
};
