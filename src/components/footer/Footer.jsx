import React from 'react';
import { FooterBase } from './Footer.styles';

const Footer = () => {
  return (
    <FooterBase>
      <p>
        Created with ❤️ and{` `}
        <a
          href="https://www.gatsbyjs.org/"
          title="Visit the Gatsby website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
        .
      </p>
    </FooterBase>
  );
};

export default Footer;
