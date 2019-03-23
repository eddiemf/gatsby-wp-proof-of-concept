import React from 'react';
import { shallow } from 'enzyme';
import BlogLayout from './BlogLayout';
import Sidebar from '../sidebar/Sidebar';
import Posts from '../posts/Posts';

describe(`Slider component`, () => {
  const props = {
    categories: [{ slug: `slug-1`, name: `name 1` }, { slug: `slug-2`, name: `name 2` }],
    currentCategory: { slug: `slug-2`, name: `name 2` },
    posts: [
      {
        id: 1,
        title: `the title`,
        date: `2019-09-02T13:23:34.000Z`,
        categories: [{ slug: `slug-1`, name: `name 1` }],
      },
      {
        id: 2,
        title: `the title 2`,
        date: `2019-03-08T13:23:34.000Z`,
        categories: [{ slug: `slug-2`, name: `name 2` }, { slug: `slug-3`, name: `name 3` }],
      },
    ],
  };

  it(`passes down the correct props to child components`, () => {
    const wrapper = shallow(<BlogLayout {...props} />);
    expect(wrapper.find(Sidebar).props().categories).toMatchObject(props.categories);
    expect(wrapper.find(Sidebar).props().currentCategory).toMatchObject(props.currentCategory);
    expect(wrapper.find(Posts).props().posts).toMatchObject(props.posts);
  });
});
