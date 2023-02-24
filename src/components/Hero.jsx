import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <HeroWrapper >
            <HeroLeftContainer>
                <HeroHeading>
                    OPOD AUDIO
                </HeroHeading>
                <HeroSubHeading>
                    Get Informed <Span>in 9 languages</Span>
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

const HeroWrapper = styled.section`
display: flex;
background : ${({theme}) => `url(${theme.bgimage.purple})`};
background-size:contain;
height : 90vh;
padding : 5rem;
color : ${({theme}) => theme.colors.text.white};
position: relative;

.swipe{
    position:absolute;
    bottom: 2rem;
    left: 50%;
    right:50%;
}
`
const HeroLeftContainer = styled.div`
flex: 0.4;
display:flex;
justify-content : center;
flex-direction : column;
padding : 25rem 7rem 20rem 11rem;
gap: 1rem;
`

const HeroHeading = styled.h1`
font-size : 6.4rem;
font-weight :  ${({theme}) => theme.weight.bold};
font-family :  ${({theme}) => theme.fontFamily.latin};
`

const HeroSubHeading = styled.h3`
font-size : 4rem;
font-weight :  ${({theme}) => theme.weight.bold};
font-family :  ${({theme}) => theme.fontFamily.latin};
`

const Span = styled.span`
color: ${({theme}) => theme.colors.text.yellow};
word-break: no-break;
`

const HeroPara = styled.p`
font-size : 1.4rem;
font-weight :  ${({theme}) => theme.weight.normal};
font-family :  ${({theme}) => theme.fontFamily.devnagri};
`

const HeroRightContainer = styled.div`
flex: 0.6;
display:flex;
justify-content: start;
padding-bottom: 5rem;

img{
    width:80%;
    height: auto;
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
`

const HeroDownloadLink = styled.div`
display:flex;
gap: 1rem;
`


export default Hero;