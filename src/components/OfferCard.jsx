import React from 'react'
import styled from 'styled-components'
import { SpendPara } from './SpendCard'

const OfferCard = ({item}) => {
  return (
    <OfferCardWrapper >
    <img src={item.image} alt="index" />
    <OfferTitle>
        {item.title}
    </OfferTitle>
    <OfferPara>
        {item.content}
    </OfferPara>
</OfferCardWrapper>
  )
}

const OfferCardWrapper= styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:1rem;
width: 25rem;

img{
    width:20rem; 
    height:20rem;
}
`

const OfferTitle = styled.p`
font-size: 3.6rem;
font-weight : ${({theme}) => theme.weight.bold};
color: ${({theme}) => theme.colors.text.yellow};
text-align: center;`

const OfferPara = styled(SpendPara)`
color: ${({theme}) => theme.colors.text.white};
`

export default OfferCard