import React from 'react';
import { Link } from 'gatsby';
import { SidebarBase, SidebarCategoriesList, SidebarCategoriesListItem } from './Sidebar.styles';

const Sidebar = ({ categories, currentCategory }) => {
  const a = {};
  return (
    <SidebarBase>
      <SidebarCategoriesList>
        <SidebarCategoriesListItem>
          <Link to="/blog" title="See all posts">
            All posts
          </Link>
        </SidebarCategoriesListItem>
        {categories.map(category => (
          <SidebarCategoriesListItem key={category.slug}>
            <Link
              to={`/categories/${category.slug}`}
              title={`See all posts from #${category.name.toLowerCase()}`}
            >
              {`#`}
              {category.name.toLowerCase()}
            </Link>
          </SidebarCategoriesListItem>
        ))}
      </SidebarCategoriesList>
    </SidebarBase>
  );
};

export default Sidebar;
