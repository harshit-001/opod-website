import React from "react";
import styled from "styled-components";
import { useDevice } from "../assets/UseDevice";
import { spendArray } from "../assets/utils";
import { Span, Title } from "../GlobalStyle";
import SpendCard from "./SpendCard";

const Spend = () => {
  const device = useDevice()
  return (
    <SpendWrapper>
      <SpendContent isWhiteBg={true} device={device}>
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
    margin: ${({ device }) => device==='Android' ? '3rem 0' : '12px 0'};
    grid-area: title;
  }
`;

const SpendWrapper = styled.section`
  background: ${({ theme }) => `url(${theme.bgimage.white})`};
  background-size: contain;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0 4rem 4rem;
  font-family: ${({ theme }) => theme.fontFamily.latin};

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    display: grid;
    grid-template-areas:
      "title title"
      "image1 image2"
      "image3 image4";
    gap: 5rem 20rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: fit-content;
    grid-template-areas:
      "title title"
      "image1 image2"
      "image3 image4";
    gap: 8rem 0;
    padding-top: 6rem;
    padding-bottom : 15rem;
  }
`;

export default Spend;
