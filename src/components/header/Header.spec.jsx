import React from 'react';
import { render } from 'react-testing-library';
import Header from './Header';

describe(`Header component`, () => {
  it(`renders the component`, () => {
    expect(render(<Header />)).toBeTruthy();
  });
});
