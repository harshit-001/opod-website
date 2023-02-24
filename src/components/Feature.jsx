import React from 'react'
import styled from 'styled-components'
import { featureArray } from '../assets/utils'
import { Span, Title } from '../GlobalStyle'
import FeatureCard from './FeatureCard'

const Feature = () => {
  return (
    <FeatureWrapper>
        <Title>
        What does <Span> OPOD Mean? </Span>
        </Title>
        <FeatureImage>
        <img src='./images/FeatureTitle.svg' alt='feature' />
        <FeatureContent isWhiteBg={false}>
        Optimising your digital <FeatureSpan  isWhiteBg={false}>consumption </FeatureSpan>
        </FeatureContent>
        </FeatureImage>
        <FeatureListContainer>
            <FeatureListTitle>
             Features
            </FeatureListTitle>
            <div className='list-wrapper'>
            {
                featureArray.map((item,index) => <FeatureCard key={index} item={item}/> )
            }
            </div>
        </FeatureListContainer>
    </FeatureWrapper>
  )
}

const FeatureWrapper= styled.section`
display:flex;
flex-direction: column;
gap: 6rem;
background : ${({theme}) => `url(${theme.bgimage.purple})`};
background-size:contain;
padding: 2rem 3rem;
`

const FeatureImage = styled.div`
display:flex;
flex-direction: column;
gap: 1rem;
justify-content: center;
align-items: center;

img{
    width: 33rem;
    height: 11.4rem;

}
`

const FeatureContent= styled(Title)`
font-size: 2.6rem;
`
const FeatureSpan= styled(Span)`
font-size: 2.6rem;
`

const FeatureListContainer = styled.div`
display:flex;
flex-direction:column;
gap: 1rem;
align-items:center;

.list-wrapper{
display:flex;
gap:2rem;
justify-content: center;
}`

const FeatureListTitle = styled.p`
font-weight : ${({theme}) => theme.weight.bold};
font-size: 3.6rem;
color:  ${({theme}) => theme.colors.text.white};`



export default Feature