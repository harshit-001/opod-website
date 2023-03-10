import React from "react";
import styled from "styled-components";

const SpendCard = ({ item, index }) => {
  return (
    <CardWrapper index={index}>
      <img src={item.image} alt="index" />
      <SpendPara>{item.content}</SpendPara>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  margin-top: ${({ index }) => `${(index + 1) * 6}rem`};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  color: ${({ theme }) => theme.colors.black};

  img {
    width: 90%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    margin: 0;
    grid-area: ${({ index }) => `image${index + 1}`};
    width: 26rem;

    img {
      width: 130%;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 30rem;

    img {
      width: 150%;
    }
  }
`;

export const SpendPara = styled.p`
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.weight.normal};
  text-align: center;
  text-transform: uppercase;
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 2.4rem;
    font-weight: ${({ theme }) => theme.weight.bold};
  }
`;

export default SpendCard;
