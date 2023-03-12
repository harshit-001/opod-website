import React from "react";
import styled from "styled-components";
import { spendArray } from "../assets/utils";
import { Span, Title } from "../GlobalStyle";
import SpendCard from "./SpendCard";

const Spend = () => {
  return (
    <SpendWrapper>
      <SpendContent isWhiteBg={true}>
        Spend 5 mins with <Span isWhiteBg={true}>OPOD...</Span>
      </SpendContent>
      {spendArray.map((item, index) => (
        <SpendCard item={item} index={index} key={index} />
      ))}
    </SpendWrapper>
  );
};

const SpendContent = styled(Title)`
  position: absolute;
  top: 5rem;
  right: 15rem;

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    position: static;
    margin: 4rem 0;
    grid-area: title;
  }
`;

const SpendWrapper = styled.section`
  height: 90vh;
  background: ${({ theme }) => `url(${theme.bgimage.white})`};
  background-size: contain;
  display: flex;
  justify-content: center;
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily.latin};

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    height: 40vh;
    display: grid;
    grid-template-areas:
      "title title title title"
      "image1 image2 image3 image4";
    gap: 0 0.7rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: fit-content;
    grid-template-areas:
      "title title"
      "image1 image2"
      "image3 image4";
    gap: 3rem 0;
    padding-bottom: 3rem;
  }
`;

export default Spend;
