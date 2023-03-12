import React from "react";
import styled from "styled-components";

const Blog = ({ blog }) => {
  return (
    <BlogContainer>
      <BlogImage>
        <img src={blog.blogImage} alt="pic" />
      </BlogImage>
      <BlogContent>
        <BlogHeading>{blog.blogHeading}</BlogHeading>
        <BlogSubHeading>{blog.blogContent}</BlogSubHeading>
        <WriterDetailWrapper>
          <img src={blog.writerImage} alt="picwriter" />
          <p>{blog.name}</p>
        </WriterDetailWrapper>
      </BlogContent>
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: fit-content;
    height: auto;
  }
`;

const BlogImage = styled.div`
  flex: 0.25;

  img {
    border-radius: 20%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    img {
      padding: 3rem;
    }
  }
`;

const BlogContent = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    gap: 2rem;
    flex:1;
  }
`;

const BlogHeading = styled.p`
  font-size: 2.6rem;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 4rem;
  }
`;

const BlogSubHeading = styled.p`
  font-size: 1.4rem;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 2rem;
  }
`;

const WriterDetailWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 1rem;
  align-items: center;

  img {
    border-radius: 50%;
  }

  p {
    font-size: 1.6rem;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      font-size: 2.4rem;
    }
  }
`;

export default Blog;
