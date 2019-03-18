import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import MainBanner from '../components/main-banner/index';
import BlogLayout from '../components/blogLayout/BlogLayout';

const BlogPage = ({
  data: {
    allWordpressCategory: { edges: categoriesEdges },
    wordpressPage: {
      acf: { pageBanner },
    },
    allWordpressPost: { edges: postsEdges },
  },
}) => {
  const categories = categoriesEdges.map(({ node }) => node);
  const posts = postsEdges.map(({ node }) => ({
    ...node,
    id: node.wordpress_id,
    imageSizes: node.featured_media.localFile.childImageSharp,
    imageAlt: node.featured_media.alt_text,
  }));

  return (
    <Layout>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
      <MainBanner
        imageSizes={pageBanner.image.localFile.childImageSharp.fluid}
        imageAlt={pageBanner.imageAlt}
        title={pageBanner.title}
        subtitle={pageBanner.subtitle}
      />
      <BlogLayout categories={categories} posts={posts} />
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    allWordpressCategory(filter: { slug: { ne: "uncategorized" } }) {
      edges {
        node {
          name
          slug
        }
      }
    }
    allWordpressPost {
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
