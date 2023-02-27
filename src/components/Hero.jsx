import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Animation } from './TextAnimation'

const Hero = () => {
  return (
    <HeroWrapper >
            <HeroLeftContainer>
                <HeroHeading>
                    OPOD AUDIO
                </HeroHeading>
                <HeroSubHeading>
                    Get Informed <Span><Animation /></Span>
                </HeroSubHeading>
                <HeroPara>
                With OPOD's short insightful audio content, you can stay up-to-date with the latest news and detailed analysis, on the go!
                </HeroPara>
                <HeroDownload>
                    <HeroDownloadText>
                    Available to download at:
                    </HeroDownloadText>
                    <HeroDownloadLink>
                        <img src='./images/play_store.svg' alt="play store"/>
                        <img src='./images/app_store.svg' alt="app store"/>
                    </HeroDownloadLink>
                </HeroDownload>
            </HeroLeftContainer>
            <HeroRightContainer>
                <img className='foreImage' src="./images/Hero_Img.svg" alt="Mobile"/>
            </HeroRightContainer>
            <img className='swipe' src="./images/swipe.svg" alt="Mobile"/>
    </HeroWrapper>
  )
}

const Span = styled.span`
color: ${({theme}) => theme.colors.text.yellow};
word-break: no-break;
`

const SwipeAnimation = keyframes`
0%{bottom : 2rem;}
100% {bottom: 0rem;}`

const HeroWrapper = styled.section`
display: flex;
background : ${({theme}) => `url(${theme.bgimage.purple})`};
height : 90vh;
padding : 5rem;
color : ${({theme}) => theme.colors.text.white};
position: relative;

.swipe{
    position:absolute;
    bottom: 2rem;
    left: 50%;
    right:50%;
    animation-name :${SwipeAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
}


@media (max-width : ${({theme}) => theme.media.mobile}){
    flex-direction: column;
    height: fit-content;
    align-items: center;
    text-align: center;
    padding : 8rem;

    ${Span}{
        display:block;
        margin-top: 2rem;
    }

    .swipe{
      left: 50%;
      right:50%;
      transform: translateX(-50%);
    }
}
`
const HeroLeftContainer = styled.div`
flex: 0.4;
display:flex;
justify-content : center;
flex-direction : column;
padding : 12rem 7rem 20rem 8rem;
gap: 1rem;

@media (max-width : ${({theme}) => theme.media.mobile}){
    flex-direction: column;
    gap: 1rem;
    padding : 0 10rem;
}
`

const HeroHeading = styled.h1`
font-size : 6.4rem;
font-weight :  ${({theme}) => theme.weight.bold};
font-family :  ${({theme}) => theme.fontFamily.latin};
@media (max-width : ${({theme}) => theme.media.mobile}){
    font-size : 8rem;
}
`

const HeroSubHeading = styled.h3`
font-size : 4rem;
font-weight :  ${({theme}) => theme.weight.bold};
font-family :  ${({theme}) => theme.fontFamily.latin};

@media (max-width : ${({theme}) => theme.media.mobile}){
   padding-bottom : 2rem;
}
`


const HeroPara = styled.p`
font-size : 1.4rem;
font-weight :  ${({theme}) => theme.weight.normal};
font-family :  ${({theme}) => theme.fontFamily.devnagri};
@media (max-width : ${({theme}) => theme.media.mobile}){
    font-size : 2.4rem;
}
`

const HeroRightContainer = styled.div`
flex: 0.6;
display:flex;
justify-content: start;
padding-bottom: 5rem;

img{
    width:90%;
    height: auto;
}

@media (max-width : ${({theme}) => theme.media.mobile}){
    padding : 10rem 0rem;
    margin-bottom: 3rem;
}
`

const HeroDownload = styled.div`
display:flex;
flex-direction:column;
gap: 2rem;
margin-top: 3rem;
`

const HeroDownloadText = styled.p`
font-size : 1.4rem;
color : ${({theme}) => theme.colors.text.white};
@media (max-width : ${({theme}) => theme.media.mobile}){
    font-size : 2.8rem;
}
`

const HeroDownloadLink = styled.div`
display:flex;
gap: 1rem;

@media (max-width : ${({theme}) => theme.media.mobile}){
    justify-content:center;
}
`


export default Hero;