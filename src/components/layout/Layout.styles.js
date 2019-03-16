import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div`
  ${tw`mx-auto px-4`}
  width: 100%;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Section = styled.section`
  ${tw`pt-10 pb-4`}
`;

const SectionTitle = styled.div`
  & > * {
    ${tw`relative text-grey-darkest text-4xl text-center`}

    &::after {
      ${tw`absolute block w-10 h-1 bg-purple rounded`}
      content: '';
      bottom: -8px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
`;

const SectionContent = styled.div`
  ${tw`leading-normal`}
`;

export {
  Container, Section, SectionTitle, SectionContent,
};
