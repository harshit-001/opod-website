import React from "react";
import CookieConsent from "react-cookie-consent";

const Cookie = () => {
  const isMobile = window.innerWidth < 768
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      enableDeclineButton
      declineButtonText="Reject All"
      cookieName="myAwesomeCookieName2"
      style={{
        display: "flex",
        backgroundColor: "white",
        color: "black",
        height: "inherit",
        fontSize: isMobile ? "3rem" : "2.6rem",
        padding: isMobile ? "25px 1rem" : "20px 1rem"
      }}
      buttonStyle={{
        backgroundColor: "#2F1562",
        padding: "1rem 3rem",
        color: "white",
        fontWeight: 500,
        fontSize: isMobile ? "15px" : "20px",
        borderRadius: "2rem",
        border: "none",
        width: "fit-content",
      }}
      declineButtonStyle={{
        backgroundColor: "#2F1562",
        padding: "1rem 3rem",
        color: "white",
        fontWeight: 500,
        fontSize: isMobile ? "15px" : "20px",
        borderRadius: "2rem",
        border: "none",
        width: "fit-content",
      }}
      buttonWrapperClasses="button-wrapper"
      expires={150}
    >
      By clicking <b>“Accept All Cookies”</b>, you agree to the storing of the
      cookies on your device to enhance site navigation, analyze site usage, and
      assist in our marketing efforts.
    </CookieConsent>
  );
};


export default Cookie;
