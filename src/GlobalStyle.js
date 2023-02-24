import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    margin :0;
    padding : 0;
    box-sizing : border-box;
  }

  html{
    font-size: 62.5%;
  }
  
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.white}
  }

  ul{
    list-style: none
  }

`;

export const Title = styled.h2`
  font-size: 5.2rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme, isWhiteBg }) =>
    isWhiteBg ? theme.colors.text.purple : theme.colors.text.white};
  text-align: center;
`;

export const Span = styled.span`
  color: ${({ theme, isWhiteBg }) =>
    isWhiteBg ? theme.colors.text.light_purple : theme.colors.text.yellow};
`;
