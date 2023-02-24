import React from 'react'
import styled from 'styled-components'

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
    <Button>
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
    bottom:-160px;
    left:-300px;
}
.img-girl{
    position:absolute;
    bottom:-100px;
    right:-130px;
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
li{
   font-size: 2.6rem;
   color: black;
}
`

const Button= styled.button`
background:${({theme}) => theme.colors.btnBackground};
padding: 1rem 3rem;
color: ${({theme}) => theme.colors.text.white};
font-weight: ${({theme}) => theme.weight.bold};
font-size: 2.6rem;
border-radius : 2rem;  
border: none;`

export default DealCard