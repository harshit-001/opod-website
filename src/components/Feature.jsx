import React, { useState } from "react";
import styled from "styled-components";
import { useDevice } from "../assets/UseDevice";
import { featureArray } from "../assets/utils";
import { Span, Title } from "../GlobalStyle";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  const device = useDevice()
  const [image, setImage] = useState({
    first: true,
    second: false
  })

  const handleImageClick=(tag) =>{
    if(window.innerWidth > 768){
      return
    }

    tag==="first" ? setImage({first: true, second:false}) : setImage({first: false, second:true})
  }

  return (
    <FeatureWrapper>
      <Title>
        What does <Span> OPOD Mean? </Span>
      </Title>
      <FeatureImage>
        <div className="first-image">

          <div className="opod-image">
               <img className="o-image" src={`./images/o-${image.first ? "selected" : "unselected"}.svg`} alt="feature" 
               onClick={()=> handleImageClick("first")
              } />
                <img src={`./images/pod-${image.second ? "selected" : "unselected"}.svg`} alt="feature" 
                 onClick={()=> handleImageClick("second")
              }/>
          </div>
            {
              image.first ? (<FeatureContent isWhiteBg={false}>
            Optimising your digital <br/> <FeatureSpan>consumption</FeatureSpan>
          </FeatureContent>) : (<FeatureContent isWhiteBg={false}>
             Short audio snippets of <br/><FeatureSpan>10-30 secs</FeatureSpan>
          </FeatureContent>)
          }

        </div>
        <hr />
        <div className="sec-image">
          <div className="opod-image">
             <img className="o-image" src="./images/o-unselected.svg" alt="feature" />
              <img className="pod-image"src="./images/pod-selected.svg" alt="feature" />
          </div>
         
          <FeatureContent isWhiteBg={false}>
             Short audio snippets of <br/><FeatureSpan>10-30 secs</FeatureSpan>
          </FeatureContent>
        </div>
      </FeatureImage>
      <FeatureListContainer device={device}>
        <FeatureListTitle>Features</FeatureListTitle>
        <div className="list-wrapper">
          {featureArray.map((item, index) => (
            <FeatureCard key={index} item={item} index={index} />
          ))}
        </div>
      </FeatureListContainer>
       <img className="leftpod" src="./images/leftPod.svg" alt="Mobile" />
        <img className="rightpod" src="./images/rightPod.svg" alt="Mobile" />
    </FeatureWrapper>
  );
};

const FeatureWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  background: ${({ theme }) => `url(${theme.bgimage.purple})`};
  background-repeat: repeat;
  padding: 5rem 3rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    padding: 5rem 8rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 6rem 15rem;
  }
`;

const FeatureImage = styled.div`
  display: flex;
  gap: 10rem;
  justify-content: center;
  align-items: center;

  hr {
    height: 180px;
    width: 0;
    border: 1px dashed white;
  }

  .opod-image{
    display:flex;
    gap: 2rem;
    margin-bottom: 2rem;
    z-index: 10;

    img {
      width: 33rem;
      height: 11.4rem;
    }

    .o-image{
      width: 8rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      gap:0;

      .o-image{
        max-width: 60px;
      }

      .pod-image{
        max-width: 135px;
      }

      img {
        width: 27rem;
      }
    }

    @media only screen and (max-device-width: 480px ){
      
    }
  }

  .first-image,.sec-image {
    width: 26%;
    
    @media (max-width: ${({ theme }) => theme.media.tab}) {
      width: 32%;
    }

    @media only screen and (max-device-width: 480px ){
      margin-left : 20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    hr {
      display: none;
    }

    .sec-image {
      display: none;
    }

    .first-image {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const FeatureContent = styled(Title)`
  font-size: 2.6rem;
  font-weight:${({ theme }) => theme.weight.normal}
`;
const FeatureSpan = styled(Span)`
  font-size: 2.6rem;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: block;
  }
`;

const FeatureListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  .list-wrapper {
    display: flex;
    gap: 2rem;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    @media only screen and (max-device-width: 480px){
      gap : ${({ device }) => device==='Android' ? '0.5rem' : '3px'};
    }
  }
`;

const FeatureListTitle = styled.p`
  font-weight: ${({ theme }) => theme.weight.bold};
  font-size: 3.6rem;
  color: ${({ theme }) => theme.colors.text.white};
  text-transform: uppercase;
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    font-size: 6.2rem;
    margin-bottom: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 7.2rem;
  }
`;

export default Feature;
