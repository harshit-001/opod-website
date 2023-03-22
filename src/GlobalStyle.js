import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    margin :0;
    padding : 0;
    box-sizing : border-box;
    font-family : 'Anek Latin', sans-serif;
    background-size:cover;
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
  display: none;
  }

  img:hover{
    cursor:pointer;
  }

  input::placeholder, textarea::placeholder{
    color: grey;
    font-size: 14px;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 12px;
  }
  }

  html{
    font-size: 62.5%;

     @media (max-width : 1200px){
      font-size : 50%;
    }

    @media (max-width : ${({ theme }) => theme.media.tab}){
      font-size : 45%;
    }

    @media (max-width : ${({ theme }) => theme.media.mobile}){
      font-size : 31.25%;
    }
  }
  
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.white}
  }

  ul{
    list-style: none
  }

   .leftpod{
    position:absolute;
    opacity:0.1;
    height: 25rem;
    top: 2rem;
    left: 5rem;
    max-width: 12rem;
  }

   .rightpod{
    position:absolute;
    opacity: 0.1;
    height: 15rem;
    bottom: 0;
    right: 5rem;
  }

`;

export const Title = styled.h2`
  font-size: 5.2rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme, isWhiteBg }) =>
    isWhiteBg ? theme.colors.text.purple : theme.colors.text.white};
  text-align: center;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    font-size: 4rem;
    margin: 3rem 0;
  }
`;

export const Span = styled.span`
  color: ${({ theme, isWhiteBg }) =>
    isWhiteBg ? theme.colors.text.light_purple : theme.colors.text.yellow};
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.btnBackground};
  padding: 1rem 4rem;
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: ${({ theme, textBold }) =>
    textBold ? theme.weight.bold : theme.weight.normal};
  font-size: 2.6rem;
  border-radius: 2rem;
  border: none;
  width: fit-content;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
    padding: 2rem 4rem;
  }
`;
