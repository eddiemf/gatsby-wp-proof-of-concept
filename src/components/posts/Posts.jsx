import React from 'react';
import { Link } from 'gatsby';

import {
  PostsSection,
  StyledPost,
  PostTitle,
  PostsList,
  PostImage,
  PostContent,
} from './Posts.styles';

const parseRawDate = rawDate => {
  const date = new Date(Date.parse(rawDate));
  const day = date.getDate();
  const month = date.toLocaleDateString(`en-US`, { month: `long` });
  let dayString = `${day}th`;

  if (day === 1) {
    dayString = `1st`;
  } else if (day === 2) {
    dayString = `2nd`;
  } else if (day === 3) {
    dayString = `3rd`;
  }

  return `${dayString} ${month}`;
};

const Posts = ({ posts }) => (
  <PostsSection>
    <PostsList>
      {posts.map(
        ({ id, slug, title, date, categories, imageSizes, imageAlt }) => (
          <li key={id}>
            <StyledPost>
              <PostContent>
                <Link
                  data-testid={`link-${id}`}
                  to={`/blog/${slug}`}
                  title="Read post"
                >
                  <PostTitle dangerouslySetInnerHTML={{ __html: title }} />
                </Link>
                <p>
                  {`Posted on `}
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
                  {` on `}
                  {parseRawDate(date)}
                </p>
              </PostContent>
              <PostImage fixed={imageSizes.fixed} alt={imageAlt} />
            </StyledPost>
          </li>
        )
      )}
    </PostsList>
  </PostsSection>
);

export default Posts;
