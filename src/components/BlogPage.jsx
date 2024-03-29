import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Span } from "../GlobalStyle";
import BlogList from "./BlogList";
import Modal from "./Modal";
import { ReactComponent as Loader } from "../assets/loader.svg";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
};


const BlogPage = ({ inBlog = false }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://opod.in/blog/api/articles?populate=*",
        {
          headers: {
            Authorization:
              "bearer bfd2f9cb76a5aecacc871850335fb51ce5b6d114cf7d4f8ac523c96719e469ca77fb853b44f3e30806ee7f8c7904cb1ad15ac9b258e413e7f6723b7bc6b2df7d0ca623e431d8e5f86375a3255bad6a87402e72c75ecfa0864e1812a60da7b044cce26b985ba37c3c0458851345b76f9531b0e24713cbce3bd0767e7f7f9ffe05",
          },
        }
      );
      setBlogs(data?.data?.data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      time: new Date(Date.now()).toLocaleString().split(",")[0],
      name: formData.name,
      email: formData.email,
    };
    var url =
      "https://sheet2api.com/v1/fHyAsFHfRPf7/web-analytics/Website%20Emails";
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json();
        setShow(true);
      })
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
          setFormData({ ...initialState });
          setShow(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <BlogWrapper inBlog={inBlog}>
      <BlogLeft inBlog={inBlog}>
        {inBlog ? (
          <BlogSubHeading inBlog={inBlog}>
            Want to read more of these? <br />
            <Span>Join our Subscribers</Span>
          </BlogSubHeading>
        ) : (
          <>
            <BlogHeading>STAY CONNECTED</BlogHeading>
            <BlogSubHeading>
              <Span>Join us </Span> to get trending audio insights directly <br />
              <Span>to your inbox</Span>
            </BlogSubHeading>
          </>
        )}

        <BlogFormWrapper onSubmit={handleFormSubmit}>
          <div>
            <Label required={true}>My full name</Label>
            <Input
              placeholder="John Doe"
              type={"text"}
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label required={true}>You can reply me at </Label>
            <Input
              placeholder="welovelistening@abcd.in"
              type={"email"}
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
            />
          </div>
          <BlogButton type="submit">
            {loading ? <Loader className="spinner" /> : "Subscribe"}
          </BlogButton>
        </BlogFormWrapper>
        <img className="lang-image" src="./images/language.svg" alt="lang" />
      </BlogLeft>
      {inBlog ? <SuggestionText>Our Suggestions for you</SuggestionText> : null}
      <BlogRight>
        <BlogListWrapper inBlog={inBlog}>
          {blogs?.length > 0 ? (
            blogs.map(({ attributes, id }, index) => (
              <BlogList blog={attributes} key={index} id={id} inBlog={inBlog}/>
            ))
          ) : (
            <h1 style={{ margin: "auto" }}>No Blogs to show !</h1>
          )}
        </BlogListWrapper>
      </BlogRight>
      <img
        className="leftpod"
        style={{ opacity: "0.05" }}
        src="./images/leftPod.svg"
        alt="Mobile"
      />
      <img
        className="rightpod"
        style={{ opacity: "0.05" }}
        src="./images/rightPod.svg"
        alt="Mobile"
      />
      <Modal show={show} />
    </BlogWrapper>
  );
};

const BlogWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 5rem;
  flex-direction: ${({ inBlog }) => (inBlog ? "column" : "row")};
  position: relative;
  background: ${({ theme }) => `url(${theme.bgimage.purple})`};
  background-color: ${({ theme }) => theme.colors.text.purple};

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    height: fit-content;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    padding-top: 10rem;
    gap: 10rem;

    .leftpod,
    .rightpod {
      display: none;
    }
  }
`;

const BlogLeft = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: ${({ inBlog }) => (inBlog ? "3rem" : "2rem")};
  padding: ${({ inBlog }) => inBlog ? '0 7rem 5rem 7rem' : '0 7rem 5rem 0rem'};
  position: relative;
  z-index: 5;
  color: ${({ theme }) => theme.colors.text.white};

  .lang-image {
    position: absolute;
    opacity: 0.1;
    top: -12rem;
    left: 1rem;
    z-index: -3;
    pointer-events:none;
  }

  @media (max-width: 1024px) {
    padding: 0;
    margin: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    position: static;
    width: 90%;

    .lang-image {
      width: 100%;
      left: 0;
      bottom: -3%;
      opacity: 0.2;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    width: 100%;
  }
`;

const BlogRight = styled.div`
  flex: 0.5;
  overflow: scroll;
  height: 52rem;
  display: flex;
  z-index: 10;
  color: ${({ theme }) => theme.colors.text.white};
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
    height: fit-content;
    margin-bottom: 6rem;
  }
`;

const BlogHeading = styled.h1`
  font-size: 6.4rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  font-family: ${({ theme }) => theme.fontFamily.latin};

  @media (max-width: 1220px) {
    font-size: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 8rem;
    text-align: center;
  }
`;

const BlogSubHeading = styled.h3`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.weight.normal};
  font-family: ${({ theme }) => theme.fontFamily.latin};
  text-align: ${({ inBlog }) => (inBlog ? "center" : "start")};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding-bottom: 2rem;
    font-size: 4rem;
    text-align: center;
  }
`;

export const Label = styled.label`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text.white};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 2.4rem;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 1rem;
  border: none;
  background: white;
  font-size: 1.6rem;

  &::placeholder {
    color: grey;
  }

  @media (max-width: 1220px) {
     width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    border: 1px solid ${({ theme }) => theme.colors.text.light_purple};
    border-radius: 1rem;
    padding: 2rem;
    margin-top: 5px;
    font-size: 3rem;
  }
`;

const BlogFormWrapper = styled.form`
  display: flex;
  width: fit-content;
  gap: 1.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 1220px){
    gap: 0.5rem;
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
    gap: 4rem;
    margin-top: 8rem;
  }
`;

const BlogListWrapper = styled.div`
  display: flex;
  flex-direction: ${({ inBlog }) => (inBlog ? "row" : "column")};
  gap: 2rem;
  overflow: scroll;

  h1 {
    font-size: 2.5rem;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      font-size: 3rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 4rem;
    margin: auto;
    flex-direction: column;
    min-width: fit-content;
  }

  @media (max-width: 360px) {
    padding: 0;
  }
`;

export const BlogButton = styled.button`
  align-self: end;
  padding: 0.95rem 4rem;
  font-size: 18px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.btnBackground};
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: 500;
  border: none;

  @media (max-width: 1220px) {
    padding : 0.95rem 2rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    align-self:center;
    padding: 1rem 4rem;
  }
`;

const SuggestionText = styled.p`
  font-size: 2.6rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.weight.normal};
  margin-bottom: 4rem;
`;

export default BlogPage;
