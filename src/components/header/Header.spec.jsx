import React from 'react';
import { render } from 'react-testing-library';
import Header from './Header';

describe(`Header component`, () => {
  const logo = {
    childImageSharp: {
      fixed: {
        width: 100,
        height: 100,
        src: `source`,
        srcSet: ``,
      },
    },
  };

  it(`renders the component`, () => {
    expect(render(<Header logo={logo} />)).toBeTruthy();
  });
});
