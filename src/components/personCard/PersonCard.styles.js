import styled from 'styled-components';
import tw from 'tailwind.macro';
import Img from 'gatsby-image';

const PersonCardBase = styled.article`
  ${tw`shadow-lg p-5`}
`;

const PersonCardHeader = styled.header`
  ${tw`flex mb-5`}
`;

const PersonCardImageWrapper = styled.div`
  ${tw`relative`}
  width: 100px;
  height: 100px;

  &::before {
    ${tw`absolute block rounded-full border border-purple-dark bg-white`}
    content: '';
    top: -6px;
    left: -6px;
    width: 110px;
    height: 110px;
  }
`;

const PersonCardImage = styled(Img)`
  ${tw`rounded-full`}
`;

const PersonCardHeaderContent = styled.div`
  ${tw`ml-5`}
  flex: 1;
`;

const PersonCardName = styled.h1`
  ${tw`mb-0 text-xl`}
`;

const PersonCardPosition = styled.p`
  ${tw`my-0 text-lg`}
`;

const PersonCardSocialIcons = styled.div`
  ${tw`flex mt-2`}

  a {
    &:hover path {
      fill: #9561e2;
    }
  }

  svg,
  path {
    width: 30px;
    height: 30px;
    transition: 300ms;
  }
`;

const PersonCardDescription = styled.div`
  ${tw`leading-normal`}
`;

export {
  PersonCardBase,
  PersonCardHeader,
  PersonCardImageWrapper,
  PersonCardImage,
  PersonCardHeaderContent,
  PersonCardName,
  PersonCardPosition,
  PersonCardSocialIcons,
  PersonCardDescription,
};
