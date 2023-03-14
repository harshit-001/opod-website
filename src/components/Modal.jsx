import React from 'react'
import styled from 'styled-components';

const Modal = ({show}) => {
  return (
   <Model show={show}>
            <Container >
                <img src='./images/success.svg' alt='success' />
                <h3>Success!!</h3>
            </Container>
    </Model>
  )
}

const Model = styled.div`
    z-index: 6;
    display: ${({show}) => (show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);
`;

const Container = styled.div`
    position:fixed;
    background:white;
    width: 30rem;
    height: 30rem;
    display:flex;
    flex-direction: column;
    gap:5rem;
    align-items:center;
    padding: 5rem;
     
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    border-radius: 10px;

    img{
        width: 60%;
    }

    h3{
      font-size:3rem;
    }
`;

export default Modal