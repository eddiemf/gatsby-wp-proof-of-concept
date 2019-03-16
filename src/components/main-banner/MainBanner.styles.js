import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { rgba } from 'polished';

import { Container } from '../layout/Layout.styles';

const MainBannerSection = styled.section`
  position: relative;
  height: 500px;
`;

const MainBannerBackdrop = styled.section`
  ${tw`absolute w-full h-full`}
  background-color: ${rgba(`#794acf`, 0.7)}
`;

const MainBannerContainer = styled(Container)`
  ${tw`relative h-full flex justify-center items-baseline flex-col`}
`;

const MainBannerTitle = styled.div`
  & > * {
    ${tw`text-yellow text-5xl font-normal my-0`}
    text-shadow: 0 2px 2px #000;
    font-family: 'Ubuntu', sans-serif;
  }
`;

const MainBannerSubtitle = styled.div`
  & > * {
    ${tw`text-white my-2 text-2xl font-normal`}
    text-shadow: 0 2px 2px #000;
  }
`;

const MainBannerButton = styled.a`
  ${tw`
    bg-purple
    text-white
    font-bold py-3 px-5
    rounded
    no-underline
    mt-4
  `}
  text-shadow: 0 0 4px #000;

  &:hover {
    opacity: 0.9;
  }
`;

export {
  MainBannerSection,
  MainBannerBackdrop,
  MainBannerContainer,
  MainBannerTitle,
  MainBannerSubtitle,
  MainBannerButton,
};
