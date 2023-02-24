import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <FooterWrapper>
      <TopContainer>
      <NavLink to="/" >
        <img src = "./images/Logo.svg" alt="logo" />
      </NavLink>
        <Company>
          <h3>Company</h3>
          <LinkWrapper>
          <NavLink to="/" >
        About Us
      </NavLink>
      <NavLink to="/" >
       Careers
      </NavLink>
      <NavLink to="/" >
        Blog
      </NavLink>
          </LinkWrapper>
        </Company>
        <Supported>
        <h3>Supported By</h3>
        <SupportImageContainer>
        <img src='./images/Supporter1.svg' alt="1"/>
        <img src='./images/Supporter2.svg' alt="2"/>
        <img src='./images/Supporter3.svg' alt="3"/>
        <img src='./images/Supporter4.svg' alt="4"/>
        </SupportImageContainer>
        </Supported>
        <Download>
          <DownloadTitle><span>Download</span> the app now</DownloadTitle>
          <DownloadLinkContainer>
            <DownloadLeft>
            <img src='./images/play_store.svg' alt="play store"/>
            <img src='./images/app_store.svg' alt="app store"/>
            </DownloadLeft>
            <img src='./images/QRcode.svg' alt="app store"/>
          </DownloadLinkContainer>
        </Download>
      </TopContainer>
      <LinkContainer>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
        <p>Terms & Conditions</p>
        <p>End user agreement</p>
        <p>Credits and Gratitude</p>
      </LinkContainer>
     <SocialLinks />
     <Hr />
     <Rights>
     ©2022 HWO MEDIA Pvt. Ltd. All Rights Reserved
     </Rights>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.section`
display:flex;
flex-direction:column;
gap: 2rem;
padding : 2rem 8rem;
background : ${({theme}) => theme.colors.footer_bg};
color: ${({theme}) => theme.colors.text.white};

h3{
  font-size: 2.6rem;
  font-weight : 500;
 
}`

const TopContainer = styled.div`
display:flex;
justify-content: space-around;
gap:2rem;
`

const Company = styled.div`
display:flex;
flex-direction:column;
gap: 1.5rem;

`

const LinkWrapper =styled.div`
display:flex;
flex-direction:column;
gap:1rem;

a{
  color: ${({theme}) => theme.colors.text.yellow};
}
`

const SupportImageContainer = styled.div`
display: grid;
grid-template-columns : auto auto;

img{
  width: 4.4rem;
}`

const Supported = styled.div`
display:flex;
flex-direction:column;
gap:1rem;`

const Download = styled.div`
display:flex;
flex-direction:column;
gap:2rem;
`

const DownloadTitle = styled.h4`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.weight.normal};
  color: ${({ theme}) => theme.colors.text.white};
  text-align: center;

  span{
    color: ${({ theme}) => theme.colors.text.yellow};
  }
`

const DownloadLinkContainer = styled.div`
display:flex;
gap: 2rem;

img{
  width: 9.3rem;
}`

const DownloadLeft = styled.div`
display:flex;
flex-direction:column;
gap: 1rem;

img{
  width: 12rem;
}`

const LinkContainer = styled.div`
display:flex;
justify-content: space-around;

p{
  font-size: 1.6rem;
}
`
const Hr= styled.hr`
color: ${({ theme}) => theme.colors.text.white}; `

const Rights= styled.p`
color: ${({ theme}) => theme.colors.text.yellow};
font-weight : 400;
text-align : center `

export default Footer