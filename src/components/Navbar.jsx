import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ setOpenMenu, openMenu }) => {
  return (
    <nav>
      <div>
        <NavbarList>
          <li>
            <NavLink
              className="nav-link"
              activeclassname="active"
              onClick={() => setOpenMenu(!openMenu)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeclassname="active"
              onClick={() => setOpenMenu(!openMenu)}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeclassname="active"
              onClick={() => setOpenMenu(!openMenu)}
              to="/contact"
            >
              Contact us
            </NavLink>
          </li>
        </NavbarList>
      </div>
    </nav>
  );
};

const NavbarList = styled.ul`
  display: flex;
  gap: 4rem;
  color: ${({ theme }) => theme.colors.text.white};
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fontFamily.latin};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
    a:hover::after, .active::after{
      display:none;
    }
  }

  li {
    position: relative;
    padding-bottom: 3px;

    @media (min-width: 1025px) {
      a:hover::after {
      content: "";
      font-weight: ${({ theme }) => theme.weight.bolder};
      position: absolute;
      display: block;
      width: 105%;
      height: 3px;
      bottom: -4px;
      left: -1px;
      background-color: ${({ theme }) => theme.colors.text.yellow};
    }
    }
   

    .active{
       font-weight: ${({ theme }) => theme.weight.bold};
     }

    .active::after{
      content: "•";
      color: ${({ theme }) => theme.colors.text.yellow};
      position: absolute;
      bottom: -15px;
      left:50%;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      width: 35%;
      text-align: center;
      border-bottom: 1px solid white;
      padding-bottom: 8px;
      margin: auto;
      .active::after {
        width: -webkit-fill-available;
      }
    }
  }
`;

export default Navbar;
