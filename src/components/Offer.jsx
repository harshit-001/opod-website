import React from "react";
import styled from "styled-components";
import { offerArray } from "../assets/utils";
import { Span, Title } from "../GlobalStyle";
import OfferCard from "./OfferCard";

const Offer = () => {
  return (
    <OfferWrapper>
      <Title isWhiteBg={false}>
        WHAT WE <Span isWhiteBg={false}>OFFER?</Span>
      </Title>
      <OfferListContainer>
        {offerArray.map((item, index) => (
          <OfferCard item={item} key={index} />
        ))}
      </OfferListContainer>
       <img className="leftpod" src="./images/leftPod.svg" alt="Mobile" />
        <img className="rightpod" src="./images/rightPod.svg" alt="Mobile" />
    </OfferWrapper>
  );
};

const OfferWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  background-image: ${({ theme }) => `url(${theme.bgimage.purple})`};
  background-size: cover;
  padding: 5rem 4rem 10rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    gap: 5rem;
    height: fit-content;
    padding:5rem 1rem 10rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 6rem 1rem 15rem;
  }
`;
const OfferListContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-around;

   @media (max-width: ${({ theme }) => theme.media.tab}) {
    gap: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10rem 0rem;
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction:column;
    align-items:center;
  }
`;

export default Offer;
