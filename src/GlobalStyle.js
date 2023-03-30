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

  img:hover, button:hover{
    cursor:pointer;
  }

  input::placeholder, textarea::placeholder{
    color: grey;
    font-size: 15px;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ device }) => device==='Android' ? '12px' : '13px'};
   }
  }

  html{
    font-size: 62.5%;
    background: ${({ theme }) => theme.colors.text.purple}

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
    color: ${({ theme }) => theme.colors.text.white};
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

    @media only screen and (max-device-width: 480px){
      height: ${({ device }) => device==='Android' ? '22rem' : '60px'};
    }
  }

   .rightpod{
    position:absolute;
    opacity: 0.1;
    height: 15rem;
    bottom: 0;
    right: 5rem;
  }

  button:active, img:active{
    transform : scale(0.98);
  }

  input,
textarea,
button,
select,
a,img,div,span {
    -webkit-tap-highlight-color: transparent;
}

  .button-wrapper{
    margin:auto;
  }

.spinner {
  animation-name: spin;
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.checkmark__circle{
   stroke-dasharray: 166;
   stroke-dashoffset: 166;
   stroke-width: 2;
   stroke-miterlimit: 10;
   stroke: #7ac142;
   fill: none;
   animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }
  
  .checkmark{
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;
    margin: 10% auto;
    box-shadow: inset 0px 0px 0px #7ac142;
    animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
  }
  
  .checkmark__check{
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }
  
  @keyframes stroke{
    100%{
      stroke-dashoffset: 0;
    }
  }
  
  @keyframes scale{
    0%, 100%{
      transform: none;
    }
    50%{
      transform: scale3d(1.1, 1.1, 1);
    }
  }
  
  @keyframes fill{
    100%{
      box-shadow: inset 0px 0px 0px 30px #7ac142;
    }
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
  width: 28rem;
  text-transform: uppercase;
  z-index:3;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
    padding: 2rem 4rem;
  }

  @media only screen and (max-device-width: 480px){
     width: 80%;
     margin:auto;
     padding: ${({ device }) => device==='Android' ? '2rem 4rem' : '2rem 10px'};
  }

   @media (max-width: 360px) {
    width: 100%;
    padding: 2rem 4rem;
  }
`;
