import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Span } from "../GlobalStyle";
import BlogList from "./BlogList";
import Modal from "./Modal";

const BlogPage = ({ inBlog = false }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  console.log(inBlog)
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:1337/api/blogs", {
      method: "GET",
      headers: {
        Authorization:
          "bearer 4155c0d6663ebae86efc9b37c8ddc1337152d2abd009e22d657706fda03dd85a1607fa25d094a762534f11863a6edfc9ec3ee15fa89361eb6bdf3c8d5616ccbe060e3cfa857f7fb6a34c522d0355d6e6290ac0927bfde3e30a5677e61f8292f928b13e1ed9414b783782f163e167973947c86f92655b410b1de4f1d61463e25f",
      },
    });
    const result = await data.json();
    setBlogs(result?.data);
  };

  const handleChange = (e) => {
    if (true) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log(formData);
    }
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
        console.log("Success:", data);
        setTimeout(() => {
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
            <BlogHeading>OPOD AUDIO</BlogHeading>
            <BlogSubHeading>
              <Span>Subscribe </Span> to our blog to get <br />
              <Span>updates from us</Span>
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
              onChange={handleChange}
            />
          </div>
          <div>
            <Label required={true}>You can reply me at </Label>
            <Input
              placeholder="welovelistening@abcd.in"
              type={"email"}
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <BlogButton type="submit">Send</BlogButton>
        </BlogFormWrapper>
        <img className="lang-image" src="./images/language.svg" alt="lang" />
      </BlogLeft>
      {
        inBlog ? (<SuggestionText>Our Suggestions for you</SuggestionText>) : null
      }
      <BlogRight>
        <BlogListWrapper inBlog={inBlog}>
          {blogs.length > 0 ? (
            blogs.map(({ attributes, id }, index) => (
              <BlogList blog={attributes} key={index} id={id} />
            ))
          ) : (
            <h1>No Blogs to show !</h1>
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
  flex-direction : ${({ inBlog }) => inBlog ? 'column' : 'row'};
  position: relative;
  background: ${({ theme }) => `url(${theme.bgimage.purple})`};
  background-color: ${({ theme }) => theme.colors.text.purple};

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
  gap: ${({ inBlog }) => inBlog ? '3rem' : '2rem'};
  padding: 0 7rem 5rem 15rem;
  position: relative;
  z-index: 5;
  color: ${({ theme }) => theme.colors.text.white};

  .lang-image {
    position: absolute;
    opacity: 0.1;
    top: -12rem;
    left: 1rem;
    z-index: -2;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
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
  overflow-y: scroll;
  height: 52rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.white};

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

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 8rem;
    text-align: center;
  }
`;

const BlogSubHeading = styled.h3`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.weight.normal};
  font-family: ${({ theme }) => theme.fontFamily.latin};
  text-align: ${({ inBlog }) => inBlog ? 'center' : 'start'};

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

  &::placeholder {
    color: grey;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    border: 1px solid ${({ theme }) => theme.colors.text.light_purple};
    border-radius: 1rem;
    padding: 2rem;
    margin-top: 5px;
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
  flex-direction: ${({ inBlog }) => inBlog ? 'row' : 'column'};
  gap: 2rem;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 4rem;
  }
`;

export const BlogButton = styled.button`
  align-self: end;
  padding: 0.75rem 4rem;
  font-size: 18px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.btnBackground};
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: 500;
  border: none;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
    padding: 1rem 4rem;
  }
`;

const SuggestionText = styled.p`
font-size: 2.6rem;
color: ${({ theme }) => theme.colors.white};
font-weight: ${({ theme }) => theme.weight.normal};
margin-bottom: 4rem;`

export default BlogPage;
