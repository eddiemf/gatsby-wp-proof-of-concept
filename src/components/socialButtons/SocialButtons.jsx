import React from 'react';
import { SinglePostSocialIcons } from '../../templates/SinglePost.styles';
import PropTypes from 'prop-types';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';

import { SocialButtonsBase } from './SocialButtons.styles';

const SocialButtons = ({ pageHref }) => {
  return (
    <SocialButtonsBase>
      <FacebookShareButton
        additionalProps={{ title: `Share on Facebook` }}
        url={pageHref}
      >
        <FacebookIcon round size={44} />
      </FacebookShareButton>
      <TwitterShareButton
        additionalProps={{ title: `Share on Twitter` }}
        url={pageHref}
      >
        <TwitterIcon round size={44} />
      </TwitterShareButton>
      <WhatsappShareButton
        additionalProps={{ title: `Share on What's App` }}
        url={pageHref}
      >
        <WhatsappIcon round size={44} />
      </WhatsappShareButton>
      <LinkedinShareButton
        additionalProps={{ title: `Share on LinkedIn` }}
        url={pageHref}
      >
        <LinkedinIcon round size={44} />
      </LinkedinShareButton>
    </SocialButtonsBase>
  );
};

SocialButtons.propTypes = {
  pageHref: PropTypes.string.isRequired,
};

export default SocialButtons;
