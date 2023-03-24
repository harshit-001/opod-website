import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getMobileOperatingSystem } from "../assets/utils";
import { Button } from "../GlobalStyle";

const DealCard = ({ item, index }) => {
  const [device, setDevice] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    setDevice(getMobileOperatingSystem())
  },[device])

  const handleClick=(action) =>{
     if(action === 'Download Now'){
       console.log(device)
       if(device === 'Android'){
        window.open('https://play.google.com/store/apps/details?id=com.opod.news', '_blank')
       }else{
        window.open('https://apps.apple.com/us/app/opod-audio/id1669008780', '_blank')
       }
     }else{
      navigate("/contact")
     }
  }

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
      <Button textBold style={{width : '28rem', position:'absolute', bottom : '8%'}} 
       onClick={()=> handleClick(item.btnTitle)} >{item.btnTitle}</Button>
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
  padding: 3rem;
  width: 42rem;
  height: 52.5rem;
  border-radius: 38px;
  position: relative;
  align-items:center;
  position: relative;

  .img-rocket {
    position: absolute;
    height: 40rem;
    bottom: -25%;
    left: -65%;
  }
  .img-girl {
    position: absolute;
    bottom: -19%;
    right: -39%;
  }

   @media (max-width: 1200px) {
    .img-girl {
      width:20rem;
      position: absolute;
      bottom: -19%;
      right: -30%;
    }
  }

   @media (max-width: 1112px) {
    width: 37rem;
   }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    width: 40rem;

    .img-rocket {
      width: 400px;
      bottom: -25%;
      left: -80%;
    }

    .img-girl {
      position: absolute;
      width: 132px;
      bottom: -20%;
      right: -26%;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-right: ${({ index }) => `${(index + 1) * 3}rem`};
    width: 50rem;
    height: 56rem;
    padding: 6rem;

    .img-rocket {
      position: absolute;
      width: 60rem;
      bottom: -15%;
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
    max-width: 75%;
    height: 56rem;
    padding: 5rem;

    .img-rocket {
      position: absolute;
      width: 60rem;
      bottom: -15%;
      left:-78%;
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
  line-height: 4rem;
  font-weight: ${({ theme }) => theme.weight.bolder};
  color: ${({ theme }) => theme.colors.text.purple};
  text-align: center;
`;

const DealList = styled.ul`
  font-weight: ${({ theme }) => theme.weight.normal};
  list-style: circle;
  margin-bottom: 6rem;
  width:80%;

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
  line-height: 3rem;
    margin-left: 2rem;

  @media (min-width: ${({ theme }) => theme.media.mobile}) {
    
    li::before {
      left: -20px;
    }
  }
`;

export default DealCard;
