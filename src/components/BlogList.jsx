import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { truncate } from "../assets/utils";

const BlogList = ({ blog,id,inBlog }) => {
 const navigate= useNavigate()
  
 const handleBlogClick = (id) =>{
  navigate(`/blogs/${id}`)
 }

  return (
    <BlogContainer onClick={() => handleBlogClick(id)}>
      <BlogImage>
        {/* <img src={blog?.thumbnail?.data?.attributes?.url} alt="pic" /> */}
        <img src={blog?.image?.data?.attributes.url} alt="pic" />
      </BlogImage>
      <BlogContent inBlog={inBlog}>
        <BlogHeading>{truncate(blog?.title, 75)}</BlogHeading>
        <BlogSubHeading>{truncate(blog?.sub_heading, 25)|| 'Will be updated shortly'}</BlogSubHeading>
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


export default BlogList;
