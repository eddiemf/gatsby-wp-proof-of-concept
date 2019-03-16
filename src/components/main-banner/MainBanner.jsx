import React from 'react';
import Img from 'gatsby-image';
import {
  MainBannerSection,
  MainBannerBackdrop,
  MainBannerContainer,
  MainBannerTitle,
  MainBannerSubtitle,
  MainBannerButton,
} from './MainBanner.styles';

const MainBanner = ({
  imageSizes,
  imageAlt,
  title,
  subtitle,
  buttonText,
  buttonLink,
  buttonTitle,
}) => (
  <MainBannerSection>
    <Img
      style={{
        position: `absolute`,
        left: 0,
        top: 0,
        width: `100%`,
        height: `100%`,
      }}
      fluid={imageSizes}
      alt={imageAlt}
    />
    <MainBannerBackdrop>
      <MainBannerContainer>
        <MainBannerTitle dangerouslySetInnerHTML={{ __html: title }} />
        <MainBannerSubtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        {buttonText && (
          <MainBannerButton
            data-testid="button"
            href={buttonLink}
            title={buttonTitle}
            dangerouslySetInnerHTML={{ __html: buttonText }}
          />
        )}
      </MainBannerContainer>
    </MainBannerBackdrop>
  </MainBannerSection>
);

export default MainBanner;
