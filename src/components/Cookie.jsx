import React from "react";
import CookieConsent from "react-cookie-consent";

const Cookie = () => {
  return (
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
        padding: "5rem 1rem"
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
  );
};


export default Cookie;
