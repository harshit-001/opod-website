import React from "react";
import CookieConsent from "react-cookie-consent";
import styled from "styled-components";

const Cookie = () => {
  return (
    <CookieWrapper>
    <CookieConsent
      location="bottom"
      buttonText="Accept All Cookies"
      enableDeclineButton
      declineButtonText="Reject All"
      cookieName="myAwesomeCookieName2"
      style={{
        display: "flex",
        backgroundColor: "white",
        color: "black",
        height: "100px",
        fontSize: "2.6rem",
        padding: "1rem",
        paddingBottom: "3rem",
      }}
      buttonStyle={{
        backgroundColor: "#2F1562",
        padding: "1rem 3rem",
        color: "white",
        fontWeight: 500,
        fontSize: "1.4rem",
        borderRadius: "2rem",
        border: "none",
        width: "fit-content",
      }}
      declineButtonStyle={{
        backgroundColor: "#2F1562",
        padding: "1rem 3rem",
        color: "white",
        fontWeight: 500,
        fontSize: "1.4rem",
        borderRadius: "2rem",
        border: "none",
        width: "fit-content",
      }}
      expires={150}
    >
      By clicking <b>“Accept All Cookies”</b>, you agree to the storing of the
      cookies on your device to enhance site navigation, analyze site usage, and
      assist in our marketing efforts.
    </CookieConsent>
    </CookieWrapper>
  );
};


const CookieWrapper = styled.div`
padding: 3rem;

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 6rem 0rem ;
  }
`
export default Cookie;
