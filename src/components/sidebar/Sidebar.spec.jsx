import React from 'react';
import { render } from 'react-testing-library';
import Sidebar from './Sidebar';

describe(`Sidebar component`, () => {
  const props = {
    categories: [{ name: `Name 1`, slug: `slug-1` }, { name: `Name 2`, slug: `slug-2` }],
    currentCategory: null,
  };

  it(`renders a list of lowercased text links based on passed categories`, () => {
    const { getByText } = render(<Sidebar {...props} />);
    expect(getByText(/name 1/i)).toBeDefined();
    expect(getByText(/name 2/i)).toBeDefined();
  });

  it(`renders the list of links with proper href`, () => {
    const { getByText } = render(<Sidebar {...props} />);
    expect(getByText(/name 1/i).getAttribute(`href`)).toMatch(/categories\/slug-1/i);
    expect(getByText(/name 2/i).getAttribute(`href`)).toMatch(/categories\/slug-2/i);
  });

  it(`renders the list of links with proper title attribute`, () => {
    const { getByTitle } = render(<Sidebar {...props} />);
    expect(getByTitle(/See all posts from #name 1/i)).toBeDefined();
    expect(getByTitle(/See all posts from #name 2/i)).toBeDefined();
  });
});
