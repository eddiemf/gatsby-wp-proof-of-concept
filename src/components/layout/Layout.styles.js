import styled from 'styled-components';
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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`relative mb-10 text-grey-darkest text-4xl text-center`}

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
  ${tw`leading-normal text-lg`}

  h1, h2, h3, h4, h5, h6 {
    ${tw`text-xl2 m-0`}
  }

  p {
    margin: 0;
  }

  a {
    color: #794acf;
  }
`;

const ContainerContent = styled.div`
  ${tw`mx-auto`}
  max-width: 700px;
`;

export { Container, Section, SectionTitle, SectionContent, ContainerContent };
