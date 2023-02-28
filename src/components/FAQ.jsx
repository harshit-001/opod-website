import React from "react";
import styled from "styled-components";
import { FaqList } from "../assets/utils";
import { Title } from "../GlobalStyle";

const FAQ = () => {
  // const [showAns, setShowAns] = useState(FaqList.map(_ => false));
  // var updatedList=[]
  // const handleClick= (index) => {
  //     updatedList= [...showAns]
  //     updatedList[index] = !updatedList[index]
  //     setShowAns([...updatedList])
  // }
  return (
    <FaqWrapper>
      <Title isWhiteBg={true}>FAQ</Title>
      <FaqListWrapper>
        {FaqList.map((item, index) => (
          <QuesWrapper key={index}>
            <QuesPara>{item.ques}</QuesPara>
            <AnsPara>{item.ans}</AnsPara>
          </QuesWrapper>
        ))}
      </FaqListWrapper>
    </FaqWrapper>
  );
};

const FaqWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  padding: 3rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 2rem 8rem;
  }
`;

const FaqListWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem 6rem;
  font-family: ${({ theme }) => theme.fontFamily.devnagri};

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    padding: 2rem 8rem;
    margin-bottom: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const QuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 59rem;

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
  }
`;

const QuesPara = styled.p`
  color: ${({ theme }) => theme.colors.text.purple};
  font-weight: ${({ theme }) => theme.weight.bolder};
  font-size: 2rem;

  span {
    margin-left: 2rem;
    align-self: center;
    vertical-align: sub;
  }

  img {
    width: 2rem;
  }
`;

const AnsPara = styled.p`
  fontweight: ${({ theme }) => theme.weight.normal};
  font-size: 1.4rem;
`;

export default FAQ;
