import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import MainBanner from '../components/main-banner/index';
import BlogLayout from '../components/blogLayout/BlogLayout';

const Category = ({ pageContext, data }) => {
  const pageBanner = get(data, `wordpressPage.acf.pageBanner`, {});
  const posts = get(data, `allWordpressPost.edges`, []).map(({ node }) => ({
    ...node,
    id: node.wordpress_id,
    imageSizes: node.featured_media.localFile.childImageSharp,
    imageAlt: node.featured_media.alt_text,
  }));

  return (
    <Layout>
      <SEO title={pageContext.categoryName} keywords={[`gatsby`, `application`, `react`]} />
      <MainBanner
        imageSizes={pageBanner.image.localFile.childImageSharp.fluid}
        imageAlt={pageBanner.imageAlt}
        title={`<h1>${pageContext.categoryName}</h1>`}
        subtitle={`<p>${pageContext.categoryDescription}</p>`}
      />
      <BlogLayout
        categories={pageContext.categories}
        currentCategory={{
          name: pageContext.categoryName,
          slug: pageContext.categorySlug,
        }}
        posts={posts}
      />
    </Layout>
  );
};

export default Category;

export const query = graphql`
  query($categorySlug: String!) {
    allWordpressPost(filter: { categories: { elemMatch: { slug: { eq: $categorySlug } } } }) {
      edges {
        node {
          wordpress_id
          title
          date
          categories {
            slug
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            alt_text
          }
        }
      }
    }
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
