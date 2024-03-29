import React from "react";
import styled from "styled-components";
import { useDevice } from "../assets/UseDevice";
import { SpendPara } from "./SpendCard";

const OfferCard = ({ item }) => {
  const device= useDevice()
  return (
    <OfferCardWrapper device={device}>
      <img src={item.image} alt="index" />
      <OfferTitle>{item.title}</OfferTitle>
      <OfferPara>{item.content}</OfferPara>
    </OfferCardWrapper>
  );
};

const OfferCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 25rem;

  img {
    width: 20rem;
    height: 20rem;
    pointer-events: none;
  }

   @media (max-width: 1024px){
    img{
      width: 15rem;
      height: 15rem;
    }
   }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 27rem;
    gap: 2rem;
    

    img {
      width: 26rem;
      height: 26rem;
      max-width: 100%;
    }
  }

  @media only screen and (max-device-width: 480px){
    width: ${({ device }) => device==='Android' ? '150px' : '186px'};
    gap: 7px;
    
    img {
      width: 130px;
      height: 130px;
      max-width: 100%;
    }
  }

   @media (max-width: 360px) {
    width: 60%;
   }
`;

const OfferTitle = styled.p`
  font-size: 3.6rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.text.yellow};
  text-align: center;

  @media only screen and (max-width: 1024px) and (min-width: 768px){
    font-size:2.6rem;
  }
`;

const OfferPara = styled(SpendPara)`
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: ${({ theme }) => theme.weight.normal};
  text-transform: lowercase;

  @media only screen and (max-width: 1024px) and (min-width: 768px){
    font-size:1.8rem;
  }

  @media (max-width: 360px) {
    width: 80%;
  }
`;

export default OfferCard;
