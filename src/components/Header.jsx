import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'
import SocialLinks from './SocialLinks'

const Header = () => {
  return (
   <HeaderWrapper>
      <NavLink to="/" >
        <img src = "./images/Logo.svg" alt="logo" />
      </NavLink>
      <NavWrapper>
      <Navbar />
      <SocialLinks />
      </NavWrapper>
     
   </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
    background-color: ${({theme}) => theme.colors.bg};
    display: flex;
    height : 10vh;
    justify-content : space-between;
    padding : 0 4.8rem;
    align-items : center;
    color : ${({theme}) => theme.colors.text.white};
    position: sticky;
    top:0;
    z-index: 100;
`

const NavWrapper = styled.div`
display:flex;
justify-content : space-between;
align-items : center;
gap: 4rem;
`

export default Header