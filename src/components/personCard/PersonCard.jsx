import React from 'react';
import PropTypes from 'prop-types';
import {
  PersonCardBase,
  PersonCardImageWrapper,
  PersonCardImage,
  PersonCardHeader,
  PersonCardName,
  PersonCardHeaderContent,
  PersonCardPosition,
  PersonCardSocialIcons,
  PersonCardDescription,
} from './PersonCard.styles';
import GithubIcon from '../../assets/github.svg';

const PersonCard = ({ name, position, description, image, imageAlt }) => {
  return (
    <PersonCardBase>
      <PersonCardHeader>
        <PersonCardImageWrapper>
          {image && <PersonCardImage fixed={image} alt={imageAlt} />}
        </PersonCardImageWrapper>
        <PersonCardHeaderContent>
          <PersonCardName>{name}</PersonCardName>
          <PersonCardPosition>{position}</PersonCardPosition>
          <PersonCardSocialIcons>
            <a
              href="https://github.com/eddiemf"
              title="Visit my Github page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </PersonCardSocialIcons>
        </PersonCardHeaderContent>
      </PersonCardHeader>
      <PersonCardDescription dangerouslySetInnerHTML={{ __html: description }} />
    </PersonCardBase>
  );
};

PersonCard.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  imageAlt: PropTypes.string,
};

export default PersonCard;
