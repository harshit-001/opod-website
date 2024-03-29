import React from "react";
import styled from "styled-components";
import { useDevice } from "../assets/UseDevice";
import { FaqList } from "../assets/utils";
import { Title } from "../GlobalStyle";

const FAQ = () => {
 const device= useDevice()
  return (
    <FaqWrapper device={device}>
      <Title isWhiteBg={true}>FAQ</Title>
      <FaqListWrapper device={device}>
        {FaqList.map((item, index) => (
          <QuesWrapper key={index}>
            <QuesPara>{item.ques}</QuesPara>
            <AnsPara>{item.ans}</AnsPara>
          </QuesWrapper>
        ))}
      </FaqListWrapper>
    </FaqWrapper>
  );
};

const FaqWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ device }) => device==='Android' ? '5rem' : '25px'};
  align-items: center;
  padding: 5rem 8rem 10rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 2rem 8rem;
  }
`;

const FaqListWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 4rem 6rem;
  font-family: ${({ theme }) => theme.fontFamily.devnagri};

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    padding: 2rem 8rem;
    margin-bottom: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  @media only screen and (max-device-width: 480px){
    padding: ${({ device }) => device==='Android' ? '2rem 0' : '5px 0'};
  }
`;

const QuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    width: 100%;
  }
`;

const QuesPara = styled.p`
  color: ${({ theme }) => theme.colors.text.purple};
  font-weight: ${({ theme }) => theme.weight.bolder};
  font-size: 2rem;

  span {
    margin-left: 2rem;
    align-self: center;
    vertical-align: sub;
  }

  img {
    width: 2rem;
  }
`;

const AnsPara = styled.p`
  font-weight: ${({ theme }) => theme.weight.normal};
  font-size: 1.4rem;

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    font-size: 1.7rem;
  }
`;

export default FAQ;
