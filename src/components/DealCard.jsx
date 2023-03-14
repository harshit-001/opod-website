import React from "react";
import styled from "styled-components";
import { Button } from "../GlobalStyle";

const DealCard = ({ item, index }) => {
  return (
    <DealCardWrapper index={index}>
      <DealTitle>{item.title}</DealTitle>
      <DealList>
        {item.offerList.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
          </li>
        ))}
      </DealList>
      <Button textBold>{item.btnTitle}</Button>
      {index === 0 ? (
        <img
          className="img-rocket"
          src="./images/OfferRocket.svg"
          alt="rocket"
        />
      ) : (
        <img className="img-girl" src="./images/OfferChar.svg" alt="Girl" />
      )}
    </DealCardWrapper>
  );
};

const DealCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.dealCardBackground};
  margin-top: ${({ index }) => `${(index + 1) * 3}rem`};
  padding: 2rem 3rem;
  width: 35rem;
  height: fit-content;
  border-radius: 3.8rem;
  position: relative;

  .img-rocket {
    position: absolute;
    width: 40rem;
    bottom: -32%;
    left: -68%;
  }
  .img-girl {
    position: absolute;
    bottom: -16%;
    right: -52%;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    width: 40rem;

    .img-rocket {
      width: 400px;
      bottom: -40%;
      left: -80%;
    }

    .img-girl {
      position: absolute;
      width: 165px;
      bottom: -24%;
      right: -40%;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-right: ${({ index }) => `${(index + 1) * 3}rem`};
    width: 50rem;
    height: 56rem;
    padding: 10rem;

    .img-rocket {
      position: absolute;
      width: 60rem;
      bottom: -14%;
      left:-65%;
    }
    .img-girl {
      position: absolute;
      width: 24rem;
      bottom: -18%;
      right: -35%;
    }
  }

   @media (max-width:360px) {
    margin-right: ${({ index }) => `${(index + 1) * 3}rem`};
    max-width: 80%;
    height: 56rem;
    padding: 5rem;

    .img-rocket {
      position: absolute;
      width: 60rem;
      bottom: -14%;
      left:-86%;
    }
    .img-girl {
      position: absolute;
      width: 24rem;
      bottom: -18%;
      right: -35%;
    }
  }
`;
const DealTitle = styled.h4`
  font-size: 3.6rem;
  font-weight: ${({ theme }) => theme.weight.bolder};
  color: ${({ theme }) => theme.colors.text.purple};
  text-align: center;
`;

const DealList = styled.ul`
  font-weight: ${({ theme }) => theme.weight.normal};
  list-style: circle;
  

  li {
    font-size: 2.5rem;
    position: relative;
    list-style: none;
  }

  li::before {
    content: "•";
    color: black;
    position: absolute;
    left: -10px;
  }
  line-height: 2.7rem;
    margin-left: 2rem;

  @media (min-width: ${({ theme }) => theme.media.mobile}) {
    

    li::before {
      left: -15px;
    }
  }
`;

export default DealCard;
