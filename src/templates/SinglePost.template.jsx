import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import SinglePost from '../components/singlePost/SinglePost';

const SinglePostTemplate = ({ data: { wordpressPost: post }, location }) => {
  const parsedPost = {
    id: post.wordpress_id,
    title: post.title,
    content: post.content,
    featuredImage: post.featured_media.localFile.childImageSharp.fixed,
    featuredImageAlt: post.featured_media.alt_text,
    categories: post.categories.slice(),
    date: post.date,
  };
  const singlePostProps = {
    ...parsedPost,
    pageHref: location.href,
  }

  return (
    <Layout page="single-post">
      <SEO title={post.title} />
      <SinglePost {...singlePostProps} />
    </Layout>
  );
};

SinglePostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default SinglePostTemplate;

export const query = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      wordpress_id
      title
      content
      date
      categories {
        slug
        name
      }
      featured_media {
        localFile {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
        alt_text
      }
    }
  }
`;
