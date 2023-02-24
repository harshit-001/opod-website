import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SocialLinks = () => {
  return (
    <nav>
    <div>
        <SocialList>
            <li>
                <NavLink to="/">
                    <img src="./images/twitter.svg" alt="twt" />
                </NavLink>
            </li>
            <li>
                <NavLink to="/">
                <img src="./images/facebook.svg" alt="twt" />
                </NavLink>
            </li>
            <li>
                <NavLink to="/">
                <img src="./images/linkidin.svg" alt="twt" />
                </NavLink>
            </li>
            <li>
                <NavLink to="/">
                <img src="./images/insta.svg" alt="twt" />
                </NavLink>
            </li>
        </SocialList>
    </div>
</nav>
  )
}

const SocialList = styled.ul`
  display: flex;
  gap: 4rem;
  color : ${({theme}) => theme.colors.text};
  justify-content: center;
  align-items: center;
`

export default SocialLinks