import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <FooterWrapper>
      <TopContainer>
        <NavLink to="/">
          <img className="logo" src="./images/Logo.svg" alt="logo" />
        </NavLink>
        <Company>
          <h3>Company</h3>
          <LinkWrapper>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blogs">Blog</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </LinkWrapper>
        </Company>
        <Supported>
          <h3>Supported By</h3>
          <SupportImageContainer>
            <a
              href="https://blog.google/intl/en-in/introducing-the-inaugural-class-of-the-google-for-startups-accelerator-india-women-founders/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/Supporter1.svg" alt="1" />
            </a>
            <a
              href="https://timesofindia.indiatimes.com/city/kolkata/us-consulate-holds-boot-camp-for-women-entrepreneurs-in-kolkata/articleshow/87675089.cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/Supporter2.svg" alt="2" />
            </a>
            <a
              href="https://nsrcel.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/Supporter3.svg" alt="3" />
            </a>
            <a
              href="https://www.startupnexus.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={process.env.PUBLIC_URL + "/images/supporter4.png"} className="round-image" alt="4" />
            </a>
            <a
              href="https://aicbanasthali.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
                <img src={process.env.PUBLIC_URL + "/images/supporter5.png"} className="round-image" alt="5" />
            </a>
            <a
              href="https://cradle-edii.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="support-div">
                <img src={process.env.PUBLIC_URL + "/images/supporter6.png"} alt="6" />
              </div>
            </a>
          </SupportImageContainer>
        </Supported>
        <Download>
          <DownloadTitle>
            <span>Download</span> the app now
          </DownloadTitle>
          <DownloadLinkContainer>
            <DownloadLeft>
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
            </DownloadLeft>
            <DownloadRight>
              <img src="./images/QRcode.svg" alt="app store" />
              <img src="./images/AppleQR.png" alt="app store" />
            </DownloadRight>
          </DownloadLinkContainer>
        </Download>
      </TopContainer>
      <LinkContainer>
        <a
          href="https://opod.in/legal/opod_privacy_policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Privacy Policy</p>
        </a>

        <NavLink to="contact">
          <p>Contact Us</p>
        </NavLink>

        <a
          href="https://opod.in/legal/opod_terms_and_conditions.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Terms & Conditions</p>
        </a>

        <a
          href="https://opod.in/legal/opod_end_user_agreement.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>End User Agreement</p>
        </a>

        <a
          href="https://opod.in/legal/opod_gratitude_and_thanks.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Credits and Gratitude</p>
        </a>
      </LinkContainer>
      <SocialLinks isFooter={true} />
      <Hr />
      <Rights>©2023 HWO MEDIA PVT. LTD. All Rights Reserved</Rights>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 4rem 8rem;
  background-color: ${({ theme }) => theme.colors.footer_bg};
  color: ${({ theme }) => theme.colors.text.white};

  h3 {
    font-size: 2.6rem;
    font-weight: 500;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    padding: 4rem 12rem;
    gap: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    text-align: center;
    background: ${({ theme }) => theme.colors.text.purple};
    h3:first-child {
      font-size: 4rem;
    }
    h3:nth-child(2) {
      font-size: 2.4rem;
    }
  }

  @media only screen and (max-device-width: 480px){
    padding : 40px 20px; 
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;

  .logo {
    width: 18rem;
    vertical-align: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .logo {
      max-width: 120px;
      width: 24rem;
    }

    flex-direction: column;
    div:nth-child(3),
    div:nth-child(2),
    div:nth-child(1) {
      order: 2;
    }
    gap: 4rem;
  }
`;

const Company = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text.yellow};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    a {
      font-size: 2.5rem;
    }
  }
`;

const SupportImageContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1rem;
  width: fit-content;

  img {
    width: 4.4rem;
  }

  a{
    .support-div {
     width: 100%;
     height: 92%;
     background: white;
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;
     margin-top:1px;
    }

    .round-image{
       border-radius: 50%;
    }
  }

  

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    gap: 2rem;
    grid-template-columns: repeat(6, auto);

    img {
      width: 6rem;
    }
  }

  @media only screen and (max-device-width: 480px){
    gap : 8px;

    img{
      width: 30px;
    }
  }
`;

const Supported = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    gap: 2rem;
  }
`;

const Download = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    gap: 3rem;
  }
`;

const DownloadTitle = styled.h4`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.weight.normal};
  color: ${({ theme }) => theme.colors.text.white};
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.text.yellow};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 4rem;
  }
`;

const DownloadLinkContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    gap: 2rem;
  }
`;

const DownloadLeft = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: space-between;
  

  img {
    width: 12rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    justify-content: center;
    img {
      width: 20rem;
      max-width: 100px;
    }
  }
`;

const DownloadRight = styled.div`
  display: flex;
  gap: 4rem;
  pointer-events:none;

  img {
    width: 12rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    img {
      max-width: 115px;
      width: 23rem;
    }
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;

  p {
    font-size: 1.6rem;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      font-size: ${({ device }) => device==='Android' ? '2.2rem' : '13px'};
    }
  }

  p:hover {
    color: ${({ theme }) => theme.colors.text.yellow};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.text.yellow};
`;

const Rights = styled.p`
  color: ${({ theme }) => theme.colors.text.yellow};
  font-weight: 400;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 2rem;
  }
`;

export default Footer;
