import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BlogPage from "./BlogPage";
import SocialLinks from "./SocialLinks";

const Blog = () => {
  const [data, setData] = useState({});

  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
     const data = await fetch(`http://65.0.176.32:1337/api/articles/${id}?populate=*`, {
      method: "GET",
      headers: {
        Authorization:
          "bearer bfd2f9cb76a5aecacc871850335fb51ce5b6d114cf7d4f8ac523c96719e469ca77fb853b44f3e30806ee7f8c7904cb1ad15ac9b258e413e7f6723b7bc6b2df7d0ca623e431d8e5f86375a3255bad6a87402e72c75ecfa0864e1812a60da7b044cce26b985ba37c3c0458851345b76f9531b0e24713cbce3bd0767e7f7f9ffe05",
      },
    });
    const result = await data?.json();
    console.log("data", result);
    setData(result?.data.attributes);
  };
    fetchData();
  }, [id]);

  
  return (
    <BlogWrapper>
      <BlogContentWrapper>
        <BlogHeader>
          <BlogPublished>
            Politics/{data?.publishedAt?.substring(0, 10)}
          </BlogPublished>
          <BlogTitle>{data?.title}</BlogTitle>
          <BlogImage src={data?.image?.data?.attributes.url} alt="blog" />
          <BlogDescription>{data?.description}</BlogDescription>
        </BlogHeader>
        <ContentWrapper>
          <p>The Blog</p>
          <BlogContent>{data?.content}</BlogContent>
        </ContentWrapper>
        <SocialLinks inBlog/>
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
  padding: 5rem 10rem;
`;

const BlogHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-direction: column;
`;

const BlogImage = styled.img`
  width: 70rem;
  height: 40rem;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 60rem;
  }
`;

const BlogDescription = styled.p`
  font-size: 2.6rem;
  font-weight: 400;
  text-align: start;
`;

const ContentWrapper = styled.div`
  p {
    font-size: 3.5rem;
    color: ${({ theme }) => theme.colors.text.blogTitle};
    weight: 700;
  }
  padding: 5rem 0;
  font-size: 2rem;
`;

const BlogContent = styled.div`
  white-space: pre-wrap;
  font-size: 2rem;
  padding: 4rem 5rem;
`;

const BlogTitle = styled.h1`
  font-size: 5.2rem;
  color: ${({ theme }) => theme.colors.text.blogTitle};
  text-transform: capitalize;
`;

// const BlogWriterContent = styled.div`
//   display: flex;
//   gap: 2rem;
//   align-items: center;
// `;
// const WriterImage = styled.img`
//   border-radius: 50%;
//   width: 5rem;
//   height: 5rem;
// `;

// const WriterName = styled.h5`
//   font-size: 1.5rem;
// `;

const BlogPublished = styled.p`
  font-size: 2rem;
`;

// const BlogRecommend = styled.div`
//   background: ${({ theme }) => `url(${theme.bgimage.purple})`};
// `;

// const Title = styled.p`
//   font-size: 2.8rem;
//   font-weight: ${({ theme }) => theme.weight.normal};
// `;

// const FormWrapper = styled.form`
// display:flex;
// gap: 1rem;

// div{
//     display:flex;
//     flex-direction:column;
//     gap: 1rem;
// }`

// const BlogListWrapper = styled.div`
// display:flex;
// gap: 2rem;`

export default Blog;
