import styled from 'styled-components';
import tw from 'tailwind.macro';

const SidebarBase = styled.aside`
  ${tw`relative bg-grey-lighter py-10`}
  width: 260px;
  min-height: 500px;

  &::before {
    ${tw`absolute pin-y block w-screen h-full bg-grey-lighter`}
    content: '';
    left: -100vw;
  }
`;

const SidebarCategoriesList = styled.ul`
  ${tw`flex flex-col list-reset pr-5 pb-10 my-0`}
`;

const SidebarCategoriesListItem = styled.li`
  ${tw`my-2`}

  &:first-child {
    ${tw`relative mb-5 text-3xl`}

    &::after {
      content: '';
      ${tw`absolute block h-1 w-full shadow`}
      top: calc(100% + 4px);
      left: -10px;
    }

    a {
      ${tw`no-underline`}
    }
  }
`;

export { SidebarBase, SidebarCategoriesList, SidebarCategoriesListItem };
