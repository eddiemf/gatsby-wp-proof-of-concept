import styled from 'styled-components';
import tw from 'tailwind.macro';
import Img from 'gatsby-image';

const SinglePostArticle = styled.article`
  ${tw`py-20`}
`;

const SinglePostHeader = styled.header`
  padding-top: 100px;
  padding-bottom: 40px;
`;

const SinglePostTitle = styled.h1`
  ${tw`text-xl5 text-center`}
`;

const SinglePostCategories = styled.p`
  ${tw`text-center`}
`;

const SinglePostDate = styled.span`
  ${tw`block text-center my-5 uppercase`}
`;

const SinglePostImage = styled(Img)`
  ${tw`mx-auto`}
`;

const SinglePostContent = styled.div`
  ${tw`py-10 leading-normal text-lg`}

  h1, h2, h3, h4, h5, h6 {
    ${tw`text-xl2`}
  }

  a {
    color: #794acf;
  }

  .gallery-container {
    height: 400px;
  }

  .gallery-container img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .swiper-button {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    background-size: 10px;
  }
`;

const SinglePostCommentBox = styled.div`
  ${tw`py-10`}
`;

export {
  SinglePostArticle,
  SinglePostHeader,
  SinglePostTitle,
  SinglePostCategories,
  SinglePostImage,
  SinglePostContent,
  SinglePostDate,
  SinglePostCommentBox,
};
