import React from "react";
import styled, { keyframes } from "styled-components";
import { Animation } from "./TextAnimation";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroLeftContainer>
        <HeroHeading>OPOD AUDIO</HeroHeading>
        <HeroSubHeading>
          Get Informed{" "}
          <Span>
            <Animation />
          </Span>
        </HeroSubHeading>
        <HeroPara>
          With OPOD's short insightful audio content,
          <br /> you can stay up-to-date with the latest news and detailed
          analysis, on the go!
        </HeroPara>
        <HeroDownload>
          <HeroDownloadText>Available to download at:</HeroDownloadText>
          <HeroDownloadLink>
            <a
              href="https://play.google.com/store/apps/details?id=com.opod.news"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/play_store.svg" alt="play store" />
            </a>
            <a
              href="https://apps.apple.com/us/app/opod-audio/id1669008780"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/app_store.svg" alt="app store" />
            </a>
          </HeroDownloadLink>
        </HeroDownload>
      </HeroLeftContainer>
      <HeroRightContainer>
        <img className="foreImage" src="./images/Hero_Img.png" alt="Mobile" />
      </HeroRightContainer>
      <img className="swipe" src="./images/swipe.svg" alt="Mobile" />
      <img className="leftpod" src="./images/leftPod.svg" alt="Mobile" />
      <img className="rightpod" src="./images/rightPod.svg" alt="Mobile" />
    </HeroWrapper>
  );
};

const Span = styled.span`
  color: ${({ theme }) => theme.colors.text.yellow};

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    display: block;
  }
`;

const SwipeAnimation = keyframes`
  0%,
  100% {
    bottom: 0;
  }

  50% {
    bottom: 2rem;
  }
`;

const HeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => `url(${theme.bgimage.purple})`} fixed;
  background-size: cover;
  height: 90vh;
  padding: 5rem;
  color: ${({ theme }) => theme.colors.text.white};
  position: relative;

  .swipe {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    right: 50%;
    animation: ${SwipeAnimation} 1s ease-in-out infinite;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    height: fit-content;
    background-size: cover;
    padding: 15rem 10rem;

    .swipe {
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 8rem;
    background-attachment: scroll;

    ${Span} {
      display: block;
      margin-top: 2rem;
    }
  }

    @media (max-width: 300px) {
    flex-direction: column;
    gap: 1rem;
    padding: 8rem 0;
    margin: auto;
  }
`;
const HeroLeftContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-right: 15rem;

   @media (max-width: 1200px) {
    margin-right:0;
    margin-left:40px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    margin: auto;
  }

 
`;

const HeroHeading = styled.h1`
  font-size: 6.4rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  font-family: ${({ theme }) => theme.fontFamily.latin};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 8rem;
  }
`;

const HeroSubHeading = styled.h3`
  font-size: 4rem;
  width: 52rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  font-family: ${({ theme }) => theme.fontFamily.latin};

   @media (max-width: ${({ theme }) => theme.media.tab}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding-bottom: 2rem;
  }
`;

const HeroPara = styled.p`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.weight.normal};
  font-family: ${({ theme }) => theme.fontFamily.devnagri};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 2.4rem;
  }
`;

const HeroRightContainer = styled.div`
  display: flex;
  justify-content: start;
  padding-bottom: 5rem;

  img {
    width: 95%;
    height: auto;

     @media (max-width: 1200px) {
    width:85%;
  }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 10rem 0rem;
    margin-bottom: 3rem;
  }
`;

const HeroDownload = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`;

const HeroDownloadText = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text.white};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 2.8rem;
  }
`;

const HeroDownloadLink = styled.div`
  display: flex;
  gap: 1rem;

  img {
    width: 150px;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    justify-content: center;
    img {
      width: 130px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    justify-content: center;
    img {
      width: 120px;
    }
  }
`;

export default Hero;
