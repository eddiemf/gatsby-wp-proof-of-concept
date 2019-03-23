import React from 'react';
import { render } from 'react-testing-library';
import { shallow } from 'enzyme';
import Disqus from 'disqus-react';

import SinglePost from './SinglePost';
import SocialButtons from '../socialButtons/SocialButtons';

describe(`Post body component`, () => {
  const props = {
    id: 1,
    title: `the title of the post`,
    content: `<p>the content of the post</p>`,
    featuredImage: {
      width: 100,
      height: 100,
      srcSet: ``,
      src: `imageSource`,
    },
    featuredImageAlt: `the image alt`,
    categories: [
      { slug: `slug-1`, name: `name 1` },
      { slug: `slug-2`, name: `name 2` },
    ],
    date: `2019-03-16T13:23:34.000Z`,
    pageHref: `someHref`,
  };

  it(`renders the post title`, () => {
    const { getByText } = render(<SinglePost {...props} />);

    expect(getByText(/the title of the post/i)).toBeDefined;
  });

  it(`renders the post date formated`, () => {
    const { getByText } = render(<SinglePost {...props} />);

    expect(getByText(/march 16, 2019/i)).toBeDefined;
  });

  it(`renders the given categories links with proper href and titles`, () => {
    const { getByTitle } = render(<SinglePost {...props} />);

    expect(getByTitle(/name 1/i).getAttribute(`href`)).toMatch(/slug-1/i);
    expect(getByTitle(/name 2/i).getAttribute(`href`)).toMatch(/slug-2/i);
  });

  it(`renders the post featured image with the given alt text`, () => {
    const { getByAltText } = render(<SinglePost {...props} />);

    expect(getByAltText(/the image alt/i)).toBeDefined;
  });

  it(`passes the given page href down to the SocialButtons component`, () => {
    const wrapper = shallow(<SinglePost {...props} />);

    expect(wrapper.find(SocialButtons).props().pageHref).toBe(`someHref`);
  });

  it(`renders the post content parsing it as HTML`, () => {
    const { getByText, queryByText } = render(<SinglePost {...props} />);

    expect(getByText(/the content of the post/i)).toBeDefined;
    expect(queryByText(/<p>the content of the post<\/p>/i)).not.toBeDefined;
  });

  it(`passes the proper config down to the Disqus.DiscussionEmbed component`, () => {
    const wrapper = shallow(<SinglePost {...props} />);

    expect(wrapper.find(Disqus.DiscussionEmbed).props().config).toMatchObject({
      url: props.pageHref,
      identifier: props.id,
      title: props.title,
    });
  });
});
