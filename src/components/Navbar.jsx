import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = ({setOpenMenu, openMenu}) => {

  return (
    <nav>
        <div>
            <NavbarList>
                <li>
                    <NavLink className="nav-link" activeClassName= "active" onClick={() => setOpenMenu(!openMenu)}  to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" activeClassName="active" onClick={() => setOpenMenu(!openMenu)} to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" activeClassName="active" onClick={() => setOpenMenu(!openMenu)}  to="/contact">Contact us</NavLink>
                </li>
            </NavbarList>

        </div>
    </nav>
  )
}


const NavbarList = styled.ul`
  display:flex;
  gap: 4rem;
  color : ${({theme}) => theme.colors.text.white };
  font-size: 2rem;
  font-family :  ${({theme}) => theme.fontFamily.latin};


  li{
    position: relative;
    padding-bottom : 1px;
   
    a:hover::after,
     .active::after{
      content:"";
      font-weight : ${({theme}) => theme.weight.bolder};
      position: absolute;
      display:block;
      width:105%;
      height: 3px;
      bottom: -4px;
      left: -1px;
      background-color: ${({theme}) => theme.colors.text.yellow}
    }

    @media (max-width : ${({theme}) => theme.media.mobile}){
      text-align:center;
     .active::after{
        width: -webkit-fill-available;
     }
   }
  }

`

export default Navbar