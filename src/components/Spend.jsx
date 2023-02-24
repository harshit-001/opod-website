import React from 'react'
import styled from 'styled-components'
import { spendArray } from '../assets/utils'
import { Span, Title } from '../GlobalStyle'
import SpendCard from './SpendCard'

const Spend = () => {
  return (
   <SpendWrapper>
     <SpendContent isWhiteBg={true}>
     Spend 5 mins with <Span isWhiteBg={true}>OPOD...</Span>
     </SpendContent>
     {
        spendArray.map((item,index) => (
            <SpendCard item={item} index={index} key={index} />
        ))
     }
   </SpendWrapper>
  )
}
const SpendWrapper = styled.section`
height : fit-content;
background : ${({theme}) => `url(${theme.bgimage.white})`};
background-size:contain;
display:flex;
justify-content:center;
padding: 5rem;
position: relative;
font-family: ${({theme}) => theme.fontFamily.latin};
`

const SpendContent = styled(Title)`
position: absolute;
top: 2rem;
right: 5rem;
`

export default Spend