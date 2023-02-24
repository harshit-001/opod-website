import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {

  return (
    <nav>
        <div>
            <NavbarList>
                <li>
                    <NavLink className="nav-link" activeClassName= "active"  to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" activeClassName="active" to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/contact">Contact us</NavLink>
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


  li{
    position: relative;
   
    &:hover::after,
     .active::after{
      content:"";
      font-weight : ${({theme}) => theme.weight.bolder};
      position: absolute;
      display:block;
      width:110%;
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: ${({theme}) => theme.colors.text.yellow}
    }
  
`

export default Navbar