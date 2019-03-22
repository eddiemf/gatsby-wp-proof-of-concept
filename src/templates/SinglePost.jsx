import React from 'react';
import { graphql } from 'gatsby';
import Disqus from 'disqus-react';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Container, ContainerContent } from '../components/layout/Layout.styles';
import {
  SinglePostTitle,
  SinglePostImage,
  SinglePostContent,
  SinglePostArticle,
  SinglePostHeader,
  SinglePostDate,
  SinglePostCommentBox,
} from './SinglePost.styles';
import SocialButtons from '../components/socialButtons/SocialButtons';

const SinglePost = ({ data: { wordpressPost: post } }) => {
  const imageSizes = post.featured_media.localFile.childImageSharp.fixed;

  const date = new Date(Date.parse(post.date));
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.toLocaleDateString(`en-US`, { month: `long` });
  const fullDate = `${month} ${day}, ${year}`;

  const disqusConfig = {
    url: location.href,
    identifier: post.wordpress_id,
    title: post.title,
  };

  return (
    <Layout page="single-post">
      <SEO title={post.title} keywords={[`gatsby`, `application`, `react`]} />
      <SinglePostArticle>
        <Container>
          <SinglePostHeader>
            <SinglePostTitle dangerouslySetInnerHTML={{ __html: post.title }} />
            <SinglePostDate>{fullDate}</SinglePostDate>
            <SinglePostImage
              style={{ display: `block` }}
              fixed={imageSizes}
              alt={post.featured_media.alt_text}
            />
            <SocialButtons pageHref={location.href} />
          </SinglePostHeader>

          <hr />

          <ContainerContent>
            <SinglePostContent dangerouslySetInnerHTML={{ __html: post.content }} />
          </ContainerContent>

          <hr />

          <SinglePostCommentBox>
            <Disqus.DiscussionEmbed shortname={`gatsbyislove`} config={disqusConfig} />
          </SinglePostCommentBox>
        </Container>
      </SinglePostArticle>
    </Layout>
  );
};

export default SinglePost;

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
