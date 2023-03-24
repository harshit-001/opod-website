import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogPage from "./BlogPage";
import SocialLinks from "./SocialLinks";

const Blog = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:1337/api/blogs/1", {
      method: "GET",
      headers: {
        Authorization:
          "bearer 4155c0d6663ebae86efc9b37c8ddc1337152d2abd009e22d657706fda03dd85a1607fa25d094a762534f11863a6edfc9ec3ee15fa89361eb6bdf3c8d5616ccbe060e3cfa857f7fb6a34c522d0355d6e6290ac0927bfde3e30a5677e61f8292f928b13e1ed9414b783782f163e167973947c86f92655b410b1de4f1d61463e25f",
      },
    });
    const result = await data.json();
    console.log("data", result);
    setData(result.data.attributes);
  };
  return (
    <BlogWrapper>
      <BlogContentWrapper>
        <BlogHeader>
          <BlogPublished>
            Politics/{data?.publishedAt?.substring(0, 10)}
          </BlogPublished>
          <BlogTitle>{data.title}</BlogTitle>
          <BlogImage src={data.blog_img} alt="blog" />
          <BlogDescription>{data.description}</BlogDescription>
        </BlogHeader>
        <ContentWrapper>
          <p>The Blog</p>
          <BlogContent>{data.content}</BlogContent>
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
