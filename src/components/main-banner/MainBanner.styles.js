import styled from 'styled-components';
import tw from 'tailwind.macro';
import { rgba } from 'polished';

import { Container } from '../layout/Layout.styles';

const MainBannerSection = styled.section`
  position: relative;
  height: 100vh;
`;

const MainBannerBackdrop = styled.section`
  ${tw`absolute w-full h-full`}
  background-color: ${rgba(`#794acf`, 0.4)}
`;

const MainBannerContainer = styled(Container)`
  ${tw`relative h-full flex justify-center items-baseline flex-col`}
`;

const MainBannerTitle = styled.div`
  & > * {
    ${tw`text-white text-5xl font-bold my-0`}
    text-shadow: 0 2px 2px #000;
    font-family: 'Montserrat', sans-serif;
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
    shadow-md
  `}

  &:hover {
    ${tw`text-white bg-purple-dark`}
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
