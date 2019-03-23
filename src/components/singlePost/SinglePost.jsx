import React from 'react';
import PropTypes from 'prop-types';
import Disqus from 'disqus-react';
import { Link } from 'gatsby';

import { Container, ContainerContent } from '../layout/Layout.styles';
import {
  SinglePostTitle,
  SinglePostImage,
  SinglePostContent,
  SinglePostArticle,
  SinglePostHeader,
  SinglePostDate,
  SinglePostCommentBox,
  SinglePostCategories,
} from './SinglePost.styles';
import SocialButtons from '../socialButtons/SocialButtons';
import useSwiperGalleryEffect from './useSwiperGalleryEffect';

const SinglePost = ({
  id,
  title,
  content,
  featuredImage,
  featuredImageAlt,
  categories,
  date,
  pageHref,
}) => {
  useSwiperGalleryEffect({
    loop: true,
    navigation: {
      nextEl: `.swiper-button-next`,
      prevEl: `.swiper-button-prev`,
    },
    pagination: {
      el: `.swiper-pagination`,
      clickable: true,
    },
  });

  const dateObj = new Date(Date.parse(date));
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const month = dateObj.toLocaleDateString(`en-US`, { month: `long` });
  const fullDate = `${month} ${day}, ${year}`;

  const disqusConfig = {
    url: pageHref,
    identifier: id,
    title: title,
  };

  return (
    <SinglePostArticle>
      <Container>
        <SinglePostHeader>
          <SinglePostTitle dangerouslySetInnerHTML={{ __html: title }} />
          <SinglePostDate>{fullDate}</SinglePostDate>
          <SinglePostImage
            style={{ display: `block` }}
            fixed={featuredImage}
            alt={featuredImageAlt}
          />
          <SinglePostCategories>
            {categories.map(({ name, slug }, index) => (
              <span key={slug}>
                <Link
                  to={`/categories/${slug}`}
                  title={`Go to the ${name.toLowerCase()} category page`}
                >
                  {`#${name.toLowerCase()}`}
                </Link>
                {index < categories.length - 1 && `, `}
              </span>
            ))}
          </SinglePostCategories>
          <SocialButtons pageHref={pageHref} />
        </SinglePostHeader>

        <hr />

        <ContainerContent>
          <SinglePostContent dangerouslySetInnerHTML={{ __html: content }} />
        </ContainerContent>

        <hr />

        <SinglePostCommentBox>
          <Disqus.DiscussionEmbed shortname={`gatsbyislove`} config={disqusConfig} />
        </SinglePostCommentBox>
      </Container>
    </SinglePostArticle>
  );
};

SinglePost.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  featuredImage: PropTypes.object.isRequired,
  featuredImageAlt: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  pageHref: PropTypes.string.isRequired,
};

export default SinglePost;
