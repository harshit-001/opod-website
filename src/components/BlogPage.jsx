import React from "react";
import styled from "styled-components";
import { Blogs } from "../assets/utils";
import { Button, Span } from "../GlobalStyle";
import Blog from "./Blog";

const BlogPage = () => {
  return (
    <BlogWrapper>
      <BlogLeft>
        <BlogHeading>OPOD AUDIO</BlogHeading>
        <BlogSubHeading>
          <Span>Subscribe </Span> to our blog to get{" "}
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
          <BlogButton isFullWidth={true} type="submit">
            Subscribe
          </BlogButton>
        </BlogFormWrapper>
      </BlogLeft>
      <BlogRight>
        <BlogListWrapper>
          {Blogs.map((blog, index) => (
            <Blog blog={blog} key={index} />
          ))}
        </BlogListWrapper>
      </BlogRight>
    </BlogWrapper>
  );
};

const BlogWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 5rem;
  height: 90vh;
  background: ${({ theme }) => `url(${theme.bgimage.purple})`};
  background-color: ${({ theme }) => theme.colors.text.purple};
  color: ${({ theme }) => theme.colors.text.white};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    gap: 10rem;
  }
`;

const BlogLeft = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-self: baseline;
  gap: 2rem;
  padding: 5rem 20rem;

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    padding: 0;
    margin: auto;
  }
`;

const BlogRight = styled.div`
  flex: 0.5;
  overflow-y: scroll;
  height: 39rem;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex: auto;
    height: 88rem;
  }
`;

const BlogHeading = styled.h1`
  font-size: 6.4rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  font-family: ${({ theme }) => theme.fontFamily.latin};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 8rem;
    width: 80%;
    margin: auto;
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
    width: 60%;
    margin: auto;
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
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 4rem;
  }
`;

const BlogButton = styled.button`
  height: fit-content;
  align-self: end;
  padding: 0.6rem;
  font-family: ${({ theme }) => theme.fontFamily.devnagri};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.btnBackground};
  color: ${({ theme }) => theme.colors.text.white};
`;

export default BlogPage;
