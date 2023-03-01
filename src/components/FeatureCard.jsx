import React from "react";
import styled from "styled-components";

const FeatureCard = ({ item, index }) => {
  return (
    <FeatureCardWrapper>
      <img src={item.image} alt="fearue" />
      <FeatureListContent isSecond={index === 1 || index === 4}>
        {item.content}
      </FeatureListContent>
    </FeatureCardWrapper>
  );
};

const FeatureCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 16rem;
  height: 20rem;
  align-items: center;

  img {
    width: 12.8rem;
    height: 12.8rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 17rem;

    img {
      width: 13rem;
      height: 13rem;
    }
  }
`;

const FeatureListContent = styled.p`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.white};
  width: ${({ isSecond }) => (isSecond ? "10rem" : "13rem")};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 1.6rem;
    width: ${({ isSecond }) => (isSecond ? "8rem" : "11rem")};
    padding-top: 1rem;
  }
`;

export default FeatureCard;
