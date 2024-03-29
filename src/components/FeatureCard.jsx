import React from "react";
import styled from "styled-components";
import { useDevice } from "../assets/UseDevice";

const FeatureCard = ({ item, index }) => {
  const device= useDevice()
  return (
    <FeatureCardWrapper>
      <img src={item.image} alt="fearue" />
      <FeatureListContent isSecond={index === 1 || index === 4} device={device}>
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
    pointer-events:none;
    width: 12.8rem;
    height: 12.8rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 17rem;
    margin-bottom: 3rem;

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
    font-size: 2rem;
    width: ${({ isSecond }) => (isSecond ? "8rem" : "13rem")};
    padding-top: 1rem;
  }

  @media only screen and (max-device-width: 480px){
    font-size: ${({ device }) => device==='Android' ? '2rem' : '13px'};
  }
`;

export default FeatureCard;
