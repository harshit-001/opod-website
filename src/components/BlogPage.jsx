import React from "react";
import styled from "styled-components";
import { Blogs } from "../assets/utils";
import { Span } from "../GlobalStyle";
import Blog from "./Blog";

const BlogPage = () => {
  return (
    <BlogWrapper>
      <BlogLeft>
        <BlogHeading>OPOD AUDIO</BlogHeading>
        <BlogSubHeading>
          <Span>Subscribe </Span> to our blog to get <br/>
          <Span>updates from us</Span>
        </BlogSubHeading>
        <BlogFormWrapper>
          <div>
            <Label required={true}>My full name</Label>
            <Input placeholder="John Doe" type={"text"} required />
          </div>
          <div>
            <Label required={true}>You can reply me at </Label>
            <Input
              placeholder="welovelistening@abcd.in"
              type={"email"}
              required
            />
          </div>
          <BlogButton  type="submit" style={{padding : '1.5rem 4rem'}}>
            Subscribe
          </BlogButton>
        </BlogFormWrapper>
        <img className="lang-image" src="./images/language.svg" alt="lang" />
      </BlogLeft>
      <BlogRight>
        <BlogListWrapper>
          {Blogs.map((blog, index) => (
            <Blog blog={blog} key={index} />
          ))}
        </BlogListWrapper>
      </BlogRight>
      <img className="leftpod" src="./images/leftPod.svg" alt="Mobile" />
        <img className="rightpod" src="./images/rightPod.svg" alt="Mobile" />
    </BlogWrapper>
  );
};

const BlogWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 5rem;
  height: 90vh;
  position: relative;
  background: ${({ theme }) => `url(${theme.bgimage.purple})`};
  background-color: ${({ theme }) => theme.colors.text.purple};
  color: ${({ theme }) => theme.colors.text.white};

   .leftpod{
    position:absolute;
    opacity:0.1;
    height: 20rem;
    top: 2rem;
    left: 5rem;
  }

   .rightpod{
    position:absolute;
    opacity: 0.1;
    height: 15rem;
    bottom: 0;
    right: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height:fit-content;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    gap: 10rem;
  }
`;

const BlogLeft = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 2rem;
  padding: 5rem 10rem;
  position: relative;
  z-index: 5;

  .lang-image{
    position: absolute;
    opacity: 0.5;
    top: -6rem;
    left:0.8rem;
    z-index: -2;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    padding: 0;
    margin: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    position: static;
    width:90%;

    .lang-image{
      width: 100%;
      left:0;
  }
  }
`;

const BlogRight = styled.div`
  flex: 0.5;
  overflow-y: scroll;
  height: 52rem;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex: auto;
    height: 100rem;
  }
`;

const BlogHeading = styled.h1`
  font-size: 6.4rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  font-family: ${({ theme }) => theme.fontFamily.latin};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 8rem;
    text-align: center;
  }
`;

const BlogSubHeading = styled.h3`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.weight.normal};
  font-family: ${({ theme }) => theme.fontFamily.latin};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding-bottom: 2rem;
    font-size: 4rem;
    text-align: center;
  }
`;

const Label = styled.label`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text.white};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 2.4rem;
  }
`;

const Input = styled.input`
  border-radius: 10px;
  padding: 1rem;
  border: none;
  background: white;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 3rem;
  }
`;

const BlogFormWrapper = styled.div`
  display: flex;
  width: fit-content;
  gap: 1.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    flex-direction: column;
    gap: 3rem;
    width: 90%;
    margin: auto 0;

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin: auto;
  }
`;

const BlogListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 4rem;
  }
`;

const BlogButton = styled.button`
  align-self: end;
  padding: 1rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.btnBackground};
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: 500;
  border: none;

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
   width: 100%;
  }
`;

export default BlogPage;
