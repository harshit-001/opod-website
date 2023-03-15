import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Blogs } from "../assets/utils";
import { Span } from "../GlobalStyle";
import Blog from "./Blog";
import Modal from "./Modal";

const BlogPage = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    console.log("first");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:1337/api/blogs", {
      method: "GET",
      headers: {
        Authorization:
          "bearer 41e834389f0330b870af663e2d0242ae71ecbf666218a36c1a4d0700a3dd67e06e6b90f5d2e4e3729021af56913906a6ac9a0c72523fe5959ead9e766f82088df06b66d0af81fa54296b27bcae1ef269fe8325f40b3a690245dc2ba77827c0959687113c4fab722b2b2cd37b91f5416cf7781401da8838a73c96dab260bd6235",
      },
    });
    const result = await data.json();
    console.log(result);
  };

  const handleChange = (e) => {
    if (true) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log(formData);
    }
  };
 
  const handleFormSubmit= (e) =>{
    e.preventDefault()
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
  }
 

  return (
    <BlogWrapper>
      <BlogLeft>
        <BlogHeading>OPOD AUDIO</BlogHeading>
        <BlogSubHeading>
          <Span>Subscribe </Span> to our blog to get <br />
          <Span>updates from us</Span>
        </BlogSubHeading>
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
      <BlogRight>
        <BlogListWrapper>
          {Blogs.map((blog, index) => (
            <Blog blog={blog} key={index} />
          ))}
        </BlogListWrapper>
      </BlogRight>
      <img className="leftpod" src="./images/leftPod.svg" alt="Mobile" />
      <img className="rightpod" src="./images/rightPod.svg" alt="Mobile" />
      <Modal show={show} />
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

  .leftpod {
    position: absolute;
    opacity: 0.1;
    height: 20rem;
    top: 2rem;
    left: 5rem;
  }

  .rightpod {
    position: absolute;
    opacity: 0.1;
    height: 15rem;
    bottom: 0;
    right: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    height: fit-content;
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
  color: ${({ theme }) => theme.colors.text.white};

  .lang-image {
    position: absolute;
    opacity: 0.5;
    top: -6rem;
    left: 0.8rem;
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
    }
  }
`;

const BlogRight = styled.div`
  flex: 0.5;
  overflow-y: scroll;
  height: 52rem;
  color: ${({ theme }) => theme.colors.text.white};

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex: auto;
    height:fit-content;
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
  padding: 1.1rem 4rem;
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
