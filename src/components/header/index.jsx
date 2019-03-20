import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';

const HeaderContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);
  const [isTransparent, setIsTransparent] = useState(true);
  useEffect(() => {
    document.addEventListener(`scroll`, () => {
      if (window.scrollY > 80) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    });
  }, []);

  return <Header logo={data.logo} isTransparent={isTransparent} />;
};

export default HeaderContainer;
