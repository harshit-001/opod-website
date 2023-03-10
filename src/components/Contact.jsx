import React, { useState } from "react";
import styled from "styled-components";
import { Title } from "../GlobalStyle";
import { Button } from "../GlobalStyle";

const Contact = () => {
  const [radio, setRadio] = useState("Mobile App");

  return (
    <ContactContainer>
      <ContactTitle isWhiteBg={true}>Contact Us</ContactTitle>
      <ContentWrapper>
        <ContactLeft>
          <RadioWrapper>
            <Heading>I am contacting you for</Heading>
            <form>
              <label>
                <input
                  type="radio"
                  id="mobile"
                  checked={radio === "Mobile App"}
                  onChange={(e) => setRadio(e.target.value)}
                  value="Mobile App"
                />{" "}
                Mobile App
              </label>
              <label>
                <input
                  type="radio"
                  id="ad"
                  checked={radio === "Advertisement"}
                  onChange={(e) => setRadio(e.target.value)}
                  value="Advertisement"
                />{" "}
                Advertisement
              </label>
              <label>
                <input
                  type="radio"
                  id="bug"
                  checked={radio === "Report Bug"}
                  onChange={(e) => setRadio(e.target.value)}
                  value="Report Bug"
                />{" "}
                Report Bug
              </label>
              <label>
                <input
                  type="radio"
                  id="query"
                  checked={radio === "General Query"}
                  onChange={(e) => setRadio(e.target.value)}
                  value="General Query"
                />{" "}
                General Query
              </label>
            </form>
          </RadioWrapper>
          <form>
             <div>
              <Label required={true}>My message</Label>
              <TextArea placeholder="your message...." type={"text"} required />
            </div>
            <div>
              <Label required={true}>My full name</Label>
              <Input placeholder="John Doe" type={"text"} required />
            </div>
            <div>
              <Label required={true}>You can reply me at </Label>
              <Input
                placeholder="welovelistening@abcd.in"
                type={"email"}
                required
              />
            </div>
            <div>
              <Label>My contact number is</Label>
              <Input placeholder="9994443332" type={"text"} required />
            </div>
            <Button isFullWidth={false} type="submit">
              Send
            </Button>
          </form>
        </ContactLeft>
        <ContactRight>
          <img src="./images/Contact.png" alt="contact" />
        </ContactRight>
      </ContentWrapper>
    </ContactContainer>
  );
};

const ContactContainer = styled.section`
  height: 90vh;
  padding: 5rem;
  text-align: start;
  font-weight: 600;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  input {
    margin-right: 0.5rem;
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: fit-content;
  }
`;

const ContentWrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column-reverse;
    gap: 4rem;
  }
`;

const ContactLeft = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactTitle = styled(Title)`
  text-transform: uppercase;
  text-align: start;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    text-align: center;
    margin-bottom: 6rem;
  }
`;

const Heading = styled.p`
  font-size: 2.6rem;
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.fontFamily.devnagri};
    font-weight: 500;

    input {
      vertical-align: baseline;

      @media (max-width: ${({ theme }) => theme.media.tab}) {
        vertical-align: middle;
      }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      font-size: 2rem;
    }
  }

  form {
    display: flex;
    gap: 3rem;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    gap: 2rem;

    form {
    gap: 1rem;
    flex-direction: column;
  }
  }
`;

const Label = styled.label`
  font-size: 2.2rem;
  font-weight: 500;

  &::after {
    content: ${({ required }) => (required ? "*" : "")};
  }
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.text.light_purple};
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 5px;

  &:focus{
    border: 1px solid ${({ theme }) => theme.colors.text.purple};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.text.light_purple};
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 5px;
`
const ContactRight = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: fit-content;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    img {
      width: 60%;
    }
  }
`;

export default Contact;
