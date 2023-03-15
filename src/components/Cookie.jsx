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
        height: "inherit",
        fontSize: "2.6rem",
        padding: "1rem",
        paddingBottom: "1rem",
      }}
      buttonStyle={{
        backgroundColor: "#2F1562",
        padding: "1rem 3rem",
        color: "white",
        fontWeight: 500,
        fontSize: "2rem",
        borderRadius: "2rem",
        border: "none",
        width: "fit-content",
      }}
      declineButtonStyle={{
        backgroundColor: "#2F1562",
        padding: "1rem 3rem",
        color: "white",
        fontWeight: 500,
        fontSize: "2rem",
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
height: 120px;


@media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding-bottom : 12rem 0rem ;

    div{
      flex-direction:column;
      align-items: center;

      div: first-child{
        flex: auto;
        margin : 8px;
      }
    }
}
`
export default Cookie;
