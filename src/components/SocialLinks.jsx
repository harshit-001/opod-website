import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SocialLinks = ({ isFooter = false }) => {
  return (
    <nav>
      <div>
        <SocialList isFooter={isFooter}>
          <li>
            <NavLink to="/">
              <img src="./images/twitter.svg" alt="twt" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src="./images/facebook.svg" alt="twt" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src="./images/linkidin.svg" alt="twt" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src="./images/insta.svg" alt="twt" />
            </NavLink>
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
    border-radius: 50%;

    &:nth-child(2) {
      padding: 1.2rem 1.6rem;
    }

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
