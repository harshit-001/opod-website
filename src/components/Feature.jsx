import React from "react";
import styled from "styled-components";
import { featureArray } from "../assets/utils";
import { Span, Title } from "../GlobalStyle";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <FeatureWrapper>
      <Title>
        What does <Span> OPOD Mean? </Span>
      </Title>
      <FeatureImage>
        <div>
          <img src="./images/FeatureTitle1.svg" alt="feature" />
          <FeatureContent isWhiteBg={false}>
            Optimising your digital{" "}
            <FeatureSpan isWhiteBg={false}>consumption </FeatureSpan>
          </FeatureContent>
        </div>
        <hr />
        <div>
          <img src="./images/FeatureTitle2.svg" alt="feature" />
          <FeatureContent isWhiteBg={false}>
            Short audio snippets of{" "}
            <FeatureSpan isWhiteBg={false}>10-30 secs </FeatureSpan>
          </FeatureContent>
        </div>
      </FeatureImage>
      <FeatureListContainer>
        <FeatureListTitle>Features</FeatureListTitle>
        <div className="list-wrapper">
          {featureArray.map((item, index) => (
            <FeatureCard key={index} item={item} index={index} />
          ))}
        </div>
      </FeatureListContainer>
    </FeatureWrapper>
  );
};

const FeatureWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  background: ${({ theme }) => `url(${theme.bgimage.purple})`};
  padding: 2rem 3rem;

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    padding: 5rem 8rem;
  }
`;

const FeatureImage = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;

  hr {
    height: 180px;
    width: 0;
    border: 1px dashed white;
  }

  div {
    width: 23%;
    margin: auto;
    img {
      width: 33rem;
      height: 11.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.tab}) {
      width: 32%;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    hr {
      display: none;
    }

    div:first-child {
      display: none;
    }

    div:nth-child(3) {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const FeatureContent = styled(Title)`
  font-size: 2.6rem;
`;
const FeatureSpan = styled(Span)`
  font-size: 2.6rem;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: block;
  }
`;

const FeatureListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  .list-wrapper {
    display: flex;
    gap: 2rem;
    justify-content: center;
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      gap: 0.5rem;
      flex-wrap: wrap;
    }
  }
`;

const FeatureListTitle = styled.p`
  font-weight: ${({ theme }) => theme.weight.bold};
  font-size: 3.6rem;
  color: ${({ theme }) => theme.colors.text.white};
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    font-size: 6.2rem;
    margin-bottom: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 7.2rem;
  }
`;

export default Feature;
