import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';

const HeaderContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Header logo={data.logo} />;
};

export default HeaderContainer;
