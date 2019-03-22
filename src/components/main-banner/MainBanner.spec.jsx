import React from 'react';
import { render } from 'react-testing-library';
import MainBanner from './MainBanner';

describe(`Main banner component`, () => {
  const imageSizes = {
    src: `source`,
    srcSet: ``,
    sizes: ``,
    aspectRatio: 0,
  };

  it(`renders the component properly based on given props`, () => {
    const component = (
      <MainBanner
        imageSizes={imageSizes}
        imageAlt="Some image alt"
        title="Some title"
        subtitle="Some subtitle"
        buttonText="Some button text"
        buttonLink="Some button link"
        buttonTitle="Some button title"
      />
    );
    const { getByText, getByAltText } = render(component);
    const button = getByText(/Some button text/i);
    const image = getByAltText(/Some image alt/i);

    expect(image).toBeDefined;
    expect(image.getAttribute(`src`)).toMatch(/source/i);
    expect(image).toHaveProperty(`srcset`, ``);
    expect(button).toBeDefined;
    expect(button).toHaveProperty(`title`, `Some button title`);
    expect(button.getAttribute(`href`)).toMatch(/Some button link/i);
  });

  it(`does not render the button if no text was passed`, () => {
    const { queryByTestId } = render(<MainBanner imageSizes={imageSizes} />);

    expect(queryByTestId(`button`)).toBeNull();
  });
});
