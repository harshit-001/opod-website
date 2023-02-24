import React from 'react'
import styled from 'styled-components'

const FeatureCard = ({item}) => {
  return (
    <FeatureCardWrapper>
        <img src={item.image} alt="fearue" />
        <FeatureListContent>
            {item.content}
        </FeatureListContent>
    </FeatureCardWrapper>
  )
}

const FeatureCardWrapper = styled.div`
display:flex;
flex-direction:column;
gap:1rem;
width:16rem;
height: 20rem;
justify-content: center;

img{
    width: 12.8rem;
    height: 12.8rem;
}`

const FeatureListContent = styled.p`
font-size: 2rem;
color : ${({theme}) => theme.colors.text.white};
`

export default FeatureCard