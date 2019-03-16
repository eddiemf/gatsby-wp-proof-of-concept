import React from 'react';
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
} from '../components/layout/Layout.styles';

const IndexPage = ({
  data: {
    wordpressPage: {
      acf: {
        intro, pageBanner, theProblem, theSolution,
      },
    },
  },
}) => (
  <Layout>
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
      <Section>
        <SectionTitle dangerouslySetInnerHTML={{ __html: intro.title }} />
        <SectionContent dangerouslySetInnerHTML={{ __html: intro.content }} />
      </Section>
      <Section>
        <SectionTitle dangerouslySetInnerHTML={{ __html: theProblem.title }} />
        <SectionContent dangerouslySetInnerHTML={{ __html: theProblem.content }} />
      </Section>
      <Section>
        <SectionTitle dangerouslySetInnerHTML={{ __html: theSolution.title }} />
        <SectionContent dangerouslySetInnerHTML={{ __html: theSolution.content }} />
      </Section>
      <Section>
        <SectionTitle>
          <h2>About me</h2>
        </SectionTitle>
      </Section>
    </Container>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    wordpressPage(slug: { eq: "home" }) {
      acf {
        pageBanner: Page_banner {
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1440, maxHeight: 500) {
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
      }
    }
  }
`;
