import React from 'react'
import styled from 'styled-components'

const SpendCard = ({item, index}) => {
  return (
        <CardWrapper index={index}>
            <img src={item.image} alt="index" />
            <SpendPara>
                {item.content}
            </SpendPara>
        </CardWrapper>
  )
}

const CardWrapper= styled.div`
margin-top : ${({index}) => `${(index+1)*5}rem`};
display:flex;
flex-direction:column;
align-items:center;
width: 30rem;

img{
    width:30rem; 
    height:28rem;
}
`

export const SpendPara = styled.p`
font-size: 2.6rem;
font-weight : ${({theme}) => theme.weight.normal};
text-align: center;`


export default SpendCard