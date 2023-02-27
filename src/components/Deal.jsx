import React from 'react'
import styled from 'styled-components'
import { dealArray } from '../assets/utils'
import { Span, Title } from '../GlobalStyle'
import DealCard from './DealCard'

const Deal = () => {
  return (
    <DealWrapper>
        <Title isWhiteBg={true}>
        Steal the <Span isWhiteBg={true}>Deal!</Span>
        </Title>
        <DealListContainer>
            {
                dealArray.map((item,index) => <DealCard item={item} index={index} key={index} />)
            }
        </DealListContainer>
       
    </DealWrapper>
  )
}

const DealWrapper = styled.section`
display:flex;
flex-direction : column;
gap: 2rem;
background : ${({theme}) => `url(${theme.bgimage.white})`};
background-size: contain;
padding: 4rem;
padding-bottom: 10rem;
font-family : ${({theme}) => theme.fontFamily.latin};
 `


const DealListContainer = styled.div`
display:flex;
gap:1.5rem;
justify-content: center;

@media (max-width : ${({theme}) => theme.media.mobile}){
    flex-direction: column;

    div:first-child{
        align-self:end;
    }
    div:nth-child(2){
        align-self:start;
    }
 }`

export default Deal