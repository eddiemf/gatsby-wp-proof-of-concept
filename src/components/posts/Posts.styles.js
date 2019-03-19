import styled from 'styled-components';
import tw from 'tailwind.macro';
import Img from 'gatsby-image';

const PostsSection = styled.section`
  ${tw`p-10`}
  flex: 1;
`;

const PostsList = styled.ul`
  ${tw`list-reset m-0`}
`;

const StyledPost = styled.article`
  ${tw`flex items-center p-5 mb-10 shadow`}
  transition: all 300ms;

  &:hover {
    ${tw`shadow-md`}
  }
`;

const PostContent = styled.div`
  ${tw`mr-10`}
  flex: 1;
`;

const PostImage = styled(Img)``;

const PostTitle = styled.h1`
  ${tw`text-2xl mt-0`}
`;

export {
  PostsSection, StyledPost, PostTitle, PostsList, PostContent, PostImage,
};
