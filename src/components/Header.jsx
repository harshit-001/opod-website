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
      <NavWrapper className={openMenu ? "activeDiv" : "hiddenDiv"}>
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <SocialLinks />
      </NavWrapper>
      <div className="mobile-btn">
         <div className="icon" onClick={() => setOpenMenu(!openMenu)} >
          <span className={openMenu ? "activeIcon" : ""} ></span>
          <span className={openMenu ? "activeIcon" : ""} ></span>
          <span className={openMenu ? "activeIcon" : ""} ></span>
         </div>
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
  width: 360px;
  height: 220px;
  position: fixed;
  top:50px;
  right:0;
  transition :transform 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.colors.text.light_purple};
  flex-direction: column;
  gap: 3rem;
  padding: 3rem;
  justify-content: start;
  z-index:20;

  &.hiddenDiv{
    transform: translateX(100%);
  }

  &.activeDiv{
    display:flex;
    transform: translateX(0);
  }

  nav{
   width: 100%;
  } 

  div{
     width: 100%;
  }

  ul{
   display:flex;
   align-content: center;
   font-size: 4rem;
  }

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

  @media (max-width : 350px){
       width: 320px;
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
      
      .desktop-logo{
        display: none;
      }

      .mobile-logo{
        display:block;
      }
      .mobile-btn{
        display:block;
        
        .icon{
           width: 30px;
           height: 45px;
           position: relative;
           margin: auto 2px;
           transform: rotate(0deg);
           transition: .5s ease-in-out;
           cursor: pointer;

           span{
             display: block;
             position: absolute;
             height: 2.5px;
             width: 80%;
             background: #fff;
             border-radius: 1px;
             opacity: 1;
             right: 0;
             transform: rotate(0deg);
             transition: .25s ease-in-out;
           }

           span:nth-child(1) {
             top: 12px;

             &.activeIcon{
               top: 20px;
               transform: rotate(135deg);
             }
           }

           span:nth-child(2){
             top:20px;

              &.activeIcon{
                opacity:0;
                right: 40px;
              }
           }

           span:nth-child(3) {
             top: 28px;

              &.activeIcon{
               top:20px;
               transform: rotate(-135deg);
             }
           }
        }
      }
    }
 }
`;

export default Header;
