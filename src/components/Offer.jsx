import React from 'react'
import styled from 'styled-components'
import { offerArray } from '../assets/utils'
import { Span, Title } from '../GlobalStyle'
import OfferCard from './OfferCard'

const Offer = () => {
  return (
   <OfferWrapper>
    <Title isWhiteBg={false}>
        WHAT WE <Span isWhiteBg={false}>OFFER?</Span>
    </Title>
    <OfferListContainer>
    {
        offerArray.map((item,index) => <OfferCard item={item} key={index}/>)
    }
    </OfferListContainer>
   </OfferWrapper>
  )
}

const OfferWrapper= styled.section`
display:flex;
flex-direction : column;
gap: 2rem;
padding-bottom: 3rem;
background : ${({theme}) => `url(${theme.bgimage.purple})`};
padding: 4rem;

@media (max-width : ${({theme}) => theme.media.tab}){
   gap: 10rem;
   padding-top: 10rem;
   padding-bottom: 20rem;
}

`
const OfferListContainer = styled.div`
display:flex;
gap:2rem;
justify-content: space-around;

@media (max-width : ${({theme}) => theme.media.mobile}){
    display: grid;
    grid-template-columns : auto auto;
    gap : 20rem 1rem;
 }
`

export default Offer