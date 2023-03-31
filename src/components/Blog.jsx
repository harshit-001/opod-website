import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getFormatDate } from "../assets/utils";
import BlogPage from "./BlogPage";
import SocialLinks from "./SocialLinks";

const Blog = () => {
  const [data, setData] = useState({});

  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
     const data = await axios.get(`http://65.0.176.32:1337/api/articles/${id}?populate=*`, {
      headers: {
        Authorization:
          "bearer bfd2f9cb76a5aecacc871850335fb51ce5b6d114cf7d4f8ac523c96719e469ca77fb853b44f3e30806ee7f8c7904cb1ad15ac9b258e413e7f6723b7bc6b2df7d0ca623e431d8e5f86375a3255bad6a87402e72c75ecfa0864e1812a60da7b044cce26b985ba37c3c0458851345b76f9531b0e24713cbce3bd0767e7f7f9ffe05",
      },
    });
    setData(data?.data?.data?.attributes);
  };
    fetchData();
  }, [id]);


  
  return (
    <BlogWrapper>
      <BlogContentWrapper>
        <div>
        <BlogHeader>
          <BlogImage src={data?.image?.data?.attributes.url} alt="blog" />
          <BlogCaption>
            {data?.image_caption}
          </BlogCaption>
          <BlogPublished>
            {data?.genre} / {data?.publishedAt && getFormatDate(data?.publishedAt?.substring(0, 10).split("-")?.reverse())}
          </BlogPublished>
          <BlogWriterContent>
            <WriterImage src={data?.writer_img || './images/writer.png' } alt="picwriter" />
            <WriterName>
              Anurag Bisht
            </WriterName>
          </BlogWriterContent>
        </BlogHeader>
        <ContentWrapper>
          <BlogTitle>{data?.title}</BlogTitle>
          <BlogDescription>{data?.sub_heading|| 'Will be updated shortly'}</BlogDescription>
          <BlogContent>{data?.content}</BlogContent>
        </ContentWrapper>
        <SocialLinks inBlog/>
        </div>
      </BlogContentWrapper>
      
      <BlogPage inBlog style={{textAlign:'center'}}/>
    </BlogWrapper>
  );
};

const BlogWrapper = styled.section`
  padding: 7rem 25rem;
  background: ${({ theme }) => theme.colors.blog_bg};

  @media (max-width: 1024px) {
    padding: 5rem 10rem;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    padding: 5rem 10rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0;
  }
`;

const BlogContentWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 5rem 6rem;
  width:fit-content;
  text-align: start;
  display:flex;
  justify-content:center;

  &>div{
    width: 80%;
    margin:auto;
  }
`;

const BlogHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 2rem;
  flex-direction: column;
`;

const BlogCaption = styled.p`
font-size : 2.6rem;
font-weight: 500;`

const BlogImage = styled.img`
  width: 70rem;
  height: 35rem;
  max-width: 100%;
  pointer-events:none;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 60rem;
  }
`;

const BlogDescription = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.light_purple};
`;

const ContentWrapper = styled.div`
  display:flex;
  flex-direction:column;
  gap: 2rem;
  padding: 5rem 0;
  font-size: 2rem;
`;

const BlogContent = styled.div`
  white-space: pre-wrap;
  font-size: 2rem;
`;

const BlogTitle = styled.h1`
  font-size: 5.4rem;
  color: ${({ theme }) => theme.colors.text.light_purple};
  text-transform: capitalize;
  font-weight: 600;
`;

const BlogWriterContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
const WriterImage = styled.img`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`;

const WriterName = styled.h5`
  font-size: 2.6rem;
  text-transform : capitalize;
`;

const BlogPublished = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;


export default Blog;
