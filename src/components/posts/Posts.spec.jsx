import React from 'react';
import { render } from 'react-testing-library';
import Posts from './Posts';

describe(`Slider component`, () => {
  const imageSizes = {
    fixed: {
      width: 100,
      height: 100,
      srcSet: ``,
    },
  };
  const props = {
    posts: [
      {
        id: 1,
        title: `the title`,
        date: `2019-09-02T13:23:34.000Z`,
        categories: [{ slug: `slug-1`, name: `name 1` }],
        imageSizes: { fixed: { ...imageSizes.fixed, src: `source_1` } },
        imageAlt: `cool image`,
      },
      {
        id: 2,
        title: `the title 2`,
        date: `2019-03-08T13:23:34.000Z`,
        categories: [{ slug: `slug-2`, name: `name 2` }, { slug: `slug-3`, name: `name 3` }],
        imageSizes: { fixed: { ...imageSizes.fixed, src: `source_2` } },
        imageAlt: `nice image`,
      },
    ],
  };

  it(`renders a list of posts based on passed props`, () => {
    const { getByText } = render(<Posts {...props} />);

    expect(getByText(/the title/i)).toBeDefined;
    expect(getByText(/the title 2/i)).toBeDefined;
  });

  it(`renders the parsed date on each post`, () => {
    const { getByText } = render(<Posts {...props} />);

    expect(getByText(/2nd September/i)).toBeDefined;
    expect(getByText(/8th March/i)).toBeDefined;
  });

  it(`renders the lowercased categories links of each post with proper uri`, () => {
    const { getByText } = render(<Posts {...props} />);

    expect(getByText(/name 1/i).getAttribute(`href`)).toMatch(/slug-1/i);
    expect(getByText(/name 2/i).getAttribute(`href`)).toMatch(/slug-2/i);
    expect(getByText(/name 3/i).getAttribute(`href`)).toMatch(/slug-3/i);
  });

  it(`renders the image of each post with proper src and alt attributes`, () => {
    const { getByAltText } = render(<Posts {...props} />);

    expect(getByAltText(/cool image/i).getAttribute(`src`)).toMatch(/source_1/i);
    expect(getByAltText(/nice image/i).getAttribute(`src`)).toMatch(/source_2/i);
  });
});
