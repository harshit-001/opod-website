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
  );
};

export default Cookie;
