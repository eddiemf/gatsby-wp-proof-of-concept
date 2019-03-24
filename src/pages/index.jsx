import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import MainBanner from '../components/main-banner/MainBanner';
import {
  Container,
  SectionTitle,
  Section,
  SectionContent,
  ContainerContent,
} from '../components/layout/Layout.styles';
import PersonCard from '../components/personCard/PersonCard';

const IndexPage = ({
  data: {
    wordpressPage: {
      acf: { intro, pageBanner, theProblem, theSolution, aboutMe },
    },
  },
}) => (
  <Layout page="home">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainBanner
      imageSizes={pageBanner.image.localFile.childImageSharp.fluid}
      imageAlt={pageBanner.imageAlt}
      title={pageBanner.title}
      subtitle={pageBanner.subtitle}
      buttonText={pageBanner.anchor_text}
      buttonLink={pageBanner.anchor_href}
      buttonTitle={pageBanner.anchor_title}
    />
    <Container>
      <ContainerContent>
        <Section id="intro">
          <SectionTitle dangerouslySetInnerHTML={{ __html: intro.title }} />
          <SectionContent dangerouslySetInnerHTML={{ __html: intro.content }} />
        </Section>
        <Section id="the-problem">
          <SectionTitle dangerouslySetInnerHTML={{ __html: theProblem.title }} />
          <SectionContent dangerouslySetInnerHTML={{ __html: theProblem.content }} />
        </Section>
        <Section id="the-solution">
          <SectionTitle dangerouslySetInnerHTML={{ __html: theSolution.title }} />
          <SectionContent dangerouslySetInnerHTML={{ __html: theSolution.content }} />
        </Section>
        <Section id="about-me">
          <SectionTitle>
            <h2>{aboutMe.title}</h2>
          </SectionTitle>
          <PersonCard
            name={aboutMe.name}
            position={aboutMe.position}
            description={aboutMe.description}
            image={get(aboutMe, `image.localFile.childImageSharp.fixed`)}
            alt={aboutMe.image_alt}
          />
        </Section>
      </ContainerContent>
    </Container>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    wordpressPage(slug: { eq: "home" }) {
      acf {
        pageBanner: Page_banner {
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1440, maxHeight: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image_alt
          title
          subtitle
          anchor_text
          anchor_href
          anchor_title
        }
        intro: Intro {
          title
          content
        }
        theProblem: The_problem {
          title
          content
        }
        theSolution: The_solution {
          title
          content
        }
        aboutMe: about_me {
          title
          image {
            localFile {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          image_alt
          name
          position
          description
        }
      }
    }
  }
`;
