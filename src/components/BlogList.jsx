import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { truncate } from "../assets/utils";

const BlogList = ({ blog,id,inBlog }) => {
 const navigate= useNavigate()
  
 const handleBlogClick = (id) =>{
  navigate(`/blog/${id}`)
 }

  return (
    <BlogContainer onClick={() => handleBlogClick(id)}>
      <BlogImage>
        <img src={blog.thumbnail.data.attributes.url} alt="pic" />
      </BlogImage>
      <BlogContent inBlog={inBlog}>
        <BlogHeading>{truncate(blog?.title, 25)}</BlogHeading>
        <BlogSubHeading>{blog?.sub_heading?.split('.')[0] || 'Will be updated shortly'}</BlogSubHeading>
        <WriterDetailWrapper>
          <img src={blog.writer_img || './images/writer.png' } alt="picwriter" />
          <p>{blog.writer_name || "OPOD Audio"}</p>
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
  
  img {
    border-radius: 10px;
    width: 20rem;
    height: 10rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
     margin: 0;
    img {
      width:24rem;
      height: 12rem;
    }
  }
`;

const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: ${({ inBlog }) => inBlog ? '300px' : 'max-content'};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
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
