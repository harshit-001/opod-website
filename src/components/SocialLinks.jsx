import React from "react";
import styled from "styled-components";

const SocialLinks = ({ isFooter = false, inBlog = false }) => {
  return (
    <nav>
      <div>
        <SocialList isFooter={isFooter} inBlog={inBlog}>
          <li>
            <a
              href="https://twitter.com/AudioOpod"
              target="_blank"
              rel="noopener noreferrer"
            >
              {inBlog ? (
                <img
                  width="18px"
                  height="18px"
                  src="./images/twitterBlog.svg"
                  alt="twt"
                />
              ) : (
                <img
                  width="18px"
                  height="18px"
                  src="./images/twitter.svg"
                  alt="twt"
                />
              )}
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/hello.OPOD"
              target="_blank"
              rel="noopener noreferrer"
            >
              {inBlog ? (
                <img
                  width="18px"
                  height="18px"
                  src="./images/facebookBlog.svg"
                  alt="twt"
                />
              ) : (
                <img
                  width="18px"
                  height="18px"
                  src="./images/facebook.svg"
                  alt="twt"
                />
              )}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/opod-audio"
              target="_blank"
              rel="noopener noreferrer"
            >
              {inBlog ? (
                <img
                  width="18px"
                  height="18px"
                  src="./images/linkedinBlog.svg"
                  alt="twt"
                />
              ) : (
                <img
                  width="18px"
                  height="18px"
                  src="./images/linkidin.svg"
                  alt="twt"
                />
              )}
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/hello_opod/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {inBlog ? (
                <img
                  width="18px"
                  height="18px"
                  src="./images/instaBlog.svg"
                  alt="twt"
                />
              ) : (
                <img
                  width="18px"
                  height="18px"
                  src="./images/Insta.svg"
                  alt="twt"
                />
              )}
            </a>
          </li>
        </SocialList>
      </div>
    </nav>
  );
};

const SocialList = styled.ul`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  li {
    padding: 1.2rem;
    border-radius: 20%;

    &:hover {
      background-color: ${({ theme ,inBlog}) =>inBlog ?  theme.colors.text.yellow : theme.colors.text.purple};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    gap: 8rem;
    img {
      width: 3rem;
      height: 3rem;
    }
  }

   @media (max-width: 360px) {
    gap: 5rem;
  }
`;

export default SocialLinks;
