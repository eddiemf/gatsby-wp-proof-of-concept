import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import MainBanner from '../components/main-banner/MainBanner';
import { Container, Section } from '../components/layout/Layout.styles';

const BlogPage = ({
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
    />
    <Container>
      <Section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus sunt ex et optio
        harum! Dignissimos eius libero veritatis vel quaerat aspernatur sed cumque quasi doloribus
        accusamus unde, quidem optio?
      </Section>
    </Container>
  </Layout>
);

export default BlogPage;

export const pageQuery = graphql`
  query {
    wordpressPage(slug: { eq: "blog" }) {
      acf {
        pageBanner: Page_banner {
          image_alt
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1440, maxHeight: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          title
          subtitle
        }
      }
    }
  }
`;
