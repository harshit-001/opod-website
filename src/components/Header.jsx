import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderWrapper>
      <NavLink to="/">
        <img className="desktop-logo" src="./images/Logo.svg" alt="logo" />
        <img
          className="mobile-logo"
          src="./images/LOGO_MOBILE.svg"
          alt="logo"
        />
      </NavLink>
      <div className={openMenu ? "" : "hidden"}>
        <NavWrapper className={openMenu ? "active" : ""}>
          <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <SocialLinks />
        </NavWrapper>
      </div>
      <div className="mobile-btn">
        {openMenu ? (
          <img
            src="./images/Close.png"
            alt="close"
            className={openMenu ? "activeBtn" : ""}
            onClick={() => setOpenMenu(!openMenu)}
          />
        ) : (
          <img
            src="./images/HamBurger.svg"
            alt="burger"
            onClick={() => setOpenMenu(!openMenu)}
          />
        )}
      </div>
    </HeaderWrapper>
  );
};

const NavWrapper = styled.div`
display:flex;
justify-content : space-between;
align-items : center;
gap: 10rem;

@media (max-width : ${({ theme }) => theme.media.mobile}){
  display: none;

  nav:first-child{
    div{
      ul{
       flex-direction: column;
      }
    }
  }

  nav:last-child{
    div{
      ul{
        gap: 5rem;
      }
    }
  }
  
}

}
`;

const HeaderWrapper = styled.header`
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    height : 10vh;
    justify-content : space-between;
    padding : 0 4.8rem;
    align-items : center;
    color : ${({ theme }) => theme.colors.text.white};
    position: sticky;
    top:0;
    z-index: 100;

    .mobile-btn{
     display:none;
    }

    .mobile-logo{
      display:none;
    }

    @media (max-width : ${({ theme }) => theme.media.tab}){
      height: 8vh;
    }

    @media (max-width : ${({ theme }) => theme.media.mobile}){
      
      .hidden{
        display: none;
      }

      ${NavWrapper}{
       width: 360px;
       height: 220px;
       position: absolute;
       top:50px;
       right:0;
       background-color: ${({ theme }) => theme.colors.text.light_purple};
       transform: translateX(100%);
       display:flex;
       flex-direction: column;
       gap: 3rem;
       padding: 3rem;
       justify-content: start;
       visibility: hidden;
       opacity:0;

       nav{
        width: 100%;
         
        div{
          width: 100%;
        }
       }

       ul{
        display:flex;
        align-content: center;
        font-size: 4rem;
       }
      }

      .desktop-logo{
        display: none;
      }

      .mobile-logo{
        display:block;
      }

      .mobile-btn{
        display:block;
        img{
          width: 4.4rem;
          display:inline-block;
        }
      }

      .active{
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index:10;
      }

      .activeBtn{
        position: absolute;
        top: 4rem;
        right: 6rem;
        z-index: 1200;
      }
    }
    
    
 }
`;

export default Header;
