import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BlogList = ({ blog,id }) => {
 const navigate= useNavigate()
  
 const handleBlogClick = (id) =>{
  navigate(`/blog/${id}`)
 }

  return (
    <BlogContainer onClick={() => handleBlogClick(id)}>
      <BlogImage>
        <img src={blog.blog_img} alt="pic" />
      </BlogImage>
      <BlogContent>
        <BlogHeading>{blog.title}</BlogHeading>
        <BlogSubHeading>{blog.description}</BlogSubHeading>
        <WriterDetailWrapper>
          <img src={blog.writer_img} alt="picwriter" />
          <p>{blog.writer_name}</p>
        </WriterDetailWrapper>
      </BlogContent>
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  gap:2rem;

  &:hover{
    cursor:pointer;
  }
  img {
    width: fit-content;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    gap: 4rem;
  }
`;

const BlogImage = styled.div`
  flex: 0.25;
 

  img {
    border-radius: 20%;
    width: 12rem;
    height: 12rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
     margin: 0;
    img {
      width:20rem;
      height: 20rem;
    }
  }
`;

const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 1200px) {
    gap: 2rem;
    flex:1;
  }
`;

const BlogHeading = styled.p`
  font-size: 2.6rem;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 5rem;
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
    width: 4rem;
    height: 4rem;

     @media (max-width: ${({ theme }) => theme.media.mobile}) {
      width: 6rem;
      height: 6rem;
    }
  }

  p {
    font-size: 1.6rem;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      font-size: 2.4rem;
    }
  }
`;

export default BlogList;
