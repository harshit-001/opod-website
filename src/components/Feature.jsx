import React, { useState } from "react";
import styled from "styled-components";
import { featureArray } from "../assets/utils";
import { Span, Title } from "../GlobalStyle";
import FeatureCard from "./FeatureCard";

const Feature = () => {

  const [image, setImage] = useState({
    first: false,
    second: true
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
             <img className="o-image" src="./images/o-selected.svg" alt="feature" />
              <img src="./images/pod-unselected.svg" alt="feature" />
          </div>
         
          <FeatureContent isWhiteBg={false}>
            Optimising your digital{" "}
            <FeatureSpan isWhiteBg={false}>consumption </FeatureSpan>
          </FeatureContent>
        </div>
        <hr />
        <div className="sec-image">
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
      </FeatureImage>
      <FeatureListContainer>
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
  padding: 5rem 3rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    padding: 5rem 8rem;
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

    img {
      width: 33rem;
      height: 11.4rem;
    }

    .o-image{
      width: 8rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      gap:0;

      img {
      width: 27rem;
      }
    }
  }

  .first-image,.sec-image {
    width: 26%;
    
    @media (max-width: ${({ theme }) => theme.media.tab}) {
      width: 32%;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    hr {
      display: none;
    }

    .first-image {
      display: none;
    }

    .sec-image {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const FeatureContent = styled(Title)`
  font-size: 2.6rem;
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
