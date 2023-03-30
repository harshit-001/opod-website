import React from "react";
import styled from "styled-components";

const Modal = ({ show }) => {
  return (
    <Model show={show}>
      <Container>
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            {" "}
            <circle
              className="checkmark__circle"
              cx="46"
              cy="46"
              r="25"
              fill="none"
            />{" "}
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        <h3>Success!!</h3>
      </Container>
    </Model>
  );
};

const Model = styled.div`
  z-index: 30;
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  position: fixed;
  background: white;
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  padding: 5rem;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;


  h3 {
    font-size: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 40rem;
  }
`;

export default Modal;
