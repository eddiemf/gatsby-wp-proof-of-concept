import React from 'react';
import { render } from 'react-testing-library';
import PersonCard from './PersonCard';

describe(`PersonCard component`, () => {
  const props = {
    name: `the name`,
    position: `unemployed`,
    description: `<p>the description</p>`,
    image: {
      width: 100,
      height: 100,
      srcSet: ``,
      src: `someSource`,
    },
    imageAlt: `cool image`,
  };

  it(`renders the given name`, () => {
    const { getByText } = render(<PersonCard {...props} />);

    expect(getByText(/the name/i)).toBeDefined();
  });

  it(`renders the given position`, () => {
    const { getByText } = render(<PersonCard {...props} />);

    expect(getByText(/unemployed/i)).toBeDefined();
  });

  it(`renders the given description parsing contained HTML`, () => {
    const { getByText, queryByText } = render(<PersonCard {...props} />);

    expect(getByText(/the description/i)).toBeDefined();
    expect(queryByText(/<p>the description<\/p>/i)).toBeNull();
  });

  it(`renders the given image with the given alt attribute`, () => {
    const { getByAltText } = render(<PersonCard {...props} />);

    expect(getByAltText(/cool image/i).getAttribute(`src`)).toMatch(/someSource/i);
  });

  it(`does not break when an image is not provided`, () => {
    const { container } = render(<PersonCard {...props} image={null} />);

    expect(container).toBeTruthy();
  });
});
