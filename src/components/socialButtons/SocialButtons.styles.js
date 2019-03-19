import styled from 'styled-components';
import tw from 'tailwind.macro';

const SocialButtonsBase = styled.div`
  ${tw`flex justify-center pt-10`}

  .SocialMediaShareButton {
    ${tw`mx-2`}
    cursor: pointer;
  }
`;

export { SocialButtonsBase };
