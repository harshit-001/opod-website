import React from "react";
import styled from "styled-components";

const SocialLinks = ({ isFooter = false }) => {
  return (
    <nav>
      <div>
        <SocialList isFooter={isFooter}>
          <li>
            <a
              href="https://twitter.com/AudioOpod"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width='18px' height='18px' src="./images/twitter.svg" alt="twt" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/hello.OPOD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width='18px' height='18px' src="./images/facebook.svg" alt="twt" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/opod-audio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/linkidin.svg" alt="twt" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/hello_opod/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/insta.svg" alt="twt" />
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
  color: ${({ theme }) => theme.colors.text};
  justify-content: center;
  align-items: center;
  li {
    padding: 1.2rem;
    border-radius: 20%;

    &:hover {
      background-color: ${({ theme }) => theme.colors.text.purple};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    img {
      width: ${({ isFooter }) => (isFooter ? "1.4rem" : "3rem")};
      height: ${({ isFooter }) => (isFooter ? "1.4rem" : "3rem")};
    }
  }
`;

export default SocialLinks;
