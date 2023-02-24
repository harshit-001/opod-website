import React, { useState } from 'react'
import styled from 'styled-components'
import { FaqList } from '../assets/utils'
import { Title } from '../GlobalStyle'

const FAQ = () => {
    const [showAns, setShowAns] = useState(FaqList.map(_ => false));
    var updatedList=[]
    const handleClick= (index) => {
        updatedList= [...showAns]
        updatedList[index] = !updatedList[index]
        setShowAns([...updatedList])
    }
  return (
    <FaqWrapper>
        <Title isWhiteBg={true}>
            FAQ
        </Title>
        <FaqListWrapper>
            {
                FaqList.map((item,index) => (
                    <QuesWrapper>
                        <QuesPara>
                            {item.ques} <span onClick={() => handleClick(index)}><img src={`./images/${showAns[index] ? "up" : "down"}-arrow.svg`} alt="" /></span>
                        </QuesPara>
                        <AnsPara isVisible={showAns[index]}>
                        {item.ans}
                        </AnsPara>
                    </QuesWrapper>
                ))
            }
        </FaqListWrapper>
    </FaqWrapper>
  )
}

const FaqWrapper = styled.section`
display:flex;
flex-direction:column;
gap: 3rem;
align-items:center;
padding: 3rem;`

const FaqListWrapper = styled.div`
display: grid;
grid-template-columns : auto auto;
gap: 2rem 6rem;
font-family: ${({theme}) => theme.fontFamily.devnagri}`

const QuesWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:start;
width: 59rem;`

const QuesPara = styled.p`
color: ${({theme}) => theme.colors.text.purple};
font-weight : ${({theme}) => theme.weight.bolder};
font-size: 2rem;

span{
    margin-left: 2rem;
    align-self: center;
    vertical-align : sub;
}

img{
    width: 2rem;
}`

const AnsPara = styled.p`
fontweight : ${({theme}) => theme.weight.normal};
font-size: 1.4rem;
display: ${({isVisible}) => isVisible ? 'block' : 'none'};`

export default FAQ