import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Posts from '../posts/Posts';
import { BlogLayoutContainer } from './BlogLayout.styles';

const BlogLayout = ({ categories, currentCategory, posts }) => (
  <section>
    <BlogLayoutContainer>
      <Sidebar categories={categories} currentCategory={currentCategory} />
      <Posts posts={posts} />
    </BlogLayoutContainer>
  </section>
);

export default BlogLayout;
