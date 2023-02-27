import React from 'react'
import styled from 'styled-components'
import {Button}  from '../GlobalStyle'

const DealCard = ({item,index}) => {
  return (
   <DealCardWrapper index={index}>
    <DealTitle>
        {item.title}
    </DealTitle>
    <DealList>
    {
        item.offerList.map((item,index) => <li key={index}><span>{item}</span></li>)
    }
    </DealList>
    <Button textBold>
       { item.btnTitle}
    </Button>
    {index === 0 ?
         <img className='img-rocket' src="./images/OfferRocket.svg" alt="rocket"/> :
         <img className='img-girl' src="./images/OfferChar.svg" alt="Girl"/>
    }
   </DealCardWrapper>
  )
}

const DealCardWrapper = styled.div`
display:flex;
flex-direction:column;
gap: 2rem;
background: ${({theme}) => theme.colors.dealCardBackground};
margin-top : ${({index}) => `${(index+1)*3}rem`};
padding: 6rem 5rem;
width: 38rem;
height: fit-content;
border-radius : 3.8rem;
position:relative;

.img-rocket{
    position:absolute;
    bottom:-32%;
    left:-83%;
}
.img-girl{
    position:absolute;
    bottom:-19%;
    right:-35%;
}

@media (max-width : ${({theme}) => theme.media.mobile}){
    margin-right : ${({index}) => `${(index+1)*3}rem`};
    width: 45rem;

    .img-rocket{
        position:absolute;
        width: 300px;
        bottom:-16%;
        left:-80%;
    }
    .img-girl{
        position:absolute;
        width: 120px;
        bottom:-19%;
        right:-35%;
    }
 }
`
const DealTitle= styled.h4`
font-size: 3.6rem;
font-weight : ${({theme}) => theme.weight.bolder};
color: ${({theme}) => theme.colors.text.purple};
text-align: center;`

const DealList = styled.ul`
font-weight:${({theme}) => theme.weight.normal};
list-style: circle;
line-height: 31px;
li{
    font-size: 2.6rem;
    position: relative;
    list-style:none;
 }

li::before {
    content: "•"; 
    color: black;
    position: absolute;
    left: -15px
}


`


export default DealCard