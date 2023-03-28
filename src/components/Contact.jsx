import React, { useState } from "react";
import styled from "styled-components";
import { Title } from "../GlobalStyle";
import Modal from "./Modal";
import { ReactComponent as Loader } from '../assets/loader.svg';

const initialState = {
    reason: "Mobile App",
    name: "",
    email: "",
    number: "",
    message: "",
  }

const Contact = () => {
  const [show,setShow] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      time: new Date(Date.now()).toLocaleString().split(",")[0],
      reason: formData.reason,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      number: formData.number,
    };
    var url = "https://sheet2api.com/v1/fHyAsFHfRPf7/web-analytics/Contact%20Us";
    setLoading(true)
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json()
        setShow(true)
      })
      .then((data) => {
        setTimeout(() => {
         setFormData({...initialState})
         setLoading(false)
         setShow(false)
      },3000)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      
  };

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
                  checked={formData.reason === "Mobile App"}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  value="Mobile App"
                />{" "}
                Mobile App
              </label>
            
              <label>
                <input
                  type="radio"
                  id="ad"
                  checked={formData.reason === "Advertisement"}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  value="Advertisement"
                />{" "}
                Advertisement
              </label>
              
              <label>
                <input
                  type="radio"
                  id="bug"
                  checked={formData.reason === "Report Bug"}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  value="Report Bug"
                />{" "}
                Report Bug
              </label>
             
              <label>
                <input
                  type="radio"
                  id="query"
                  checked={formData.reason === "General Query"}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  value="General Query"
                />{" "}
                General Query
              </label>
            
            </form>
          </RadioWrapper>
          <form onSubmit={handleFormSubmit}>
            <div>
              <Label required={true}>My message</Label>
              <TextArea
                placeholder="your message...."
                type={"text"}
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label required={true}>My full name</Label>
              <Input
                placeholder="John Doe"
                name="name"
                type={"text"}
                value={formData.name}
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <Label required={true}>You can reply me at </Label>
              <Input
                placeholder="welovelistening@abcd.in"
                type={"email"}
                name="email"
                value={formData.email}
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>My contact number is</Label>
              <Input
                placeholder="9994443332"
                type={"text"}
                name="number"
                value={formData.number}
                required
                onChange={handleChange}
              />
            </div>
            <ContactButton type="submit" >{loading ? <Loader className='spinner'/> : 'Send'}</ContactButton>
          </form>
        </ContactLeft>
        <ContactRight>
          <img src="./images/Contact.svg" alt="contact" />
        </ContactRight>
      </ContentWrapper>
      <Modal show={show} />
    </ContactContainer>
  );
};

const ContactContainer = styled.section`
  padding: 5rem 15rem;
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

  @media (max-width: 1024px) {
    padding : 10rem;
  }

   @media (max-width: ${({ theme }) => theme.media.tab}) {
   padding: 3rem;

   input {
    margin-right: 0.2rem;
   }
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
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    text-align: center;
    margin-bottom: 6rem;
  }
`;

const Heading = styled.p`
  font-size: 2.6rem;
  font-weight: 450;
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  label {
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.fontFamily.devnagri};
    font-weight: 500;

    input {
      vertical-align: middle;
    }

    @media (max-width: 1303px) {
      font-size: 1.3rem;
    }

    @media (max-width: 1213px) {
      font-size: 1.1rem;
    }

    @media (max-width: 1122px) {
      font-size: 1rem;
    }

     @media (max-width: 1077px){
       font-size: 0.9rem
    }

    @media (max-width: 1033px){
       font-size: 0.8rem
    }

    @media (max-width: 1024px) {
      font-size: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.media.tab}) {
      font-size: 1.3rem;
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

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    form {
     gap: 2rem;
   }
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
  font-size: 2rem;
  font-weight: 500;

  &::after {
    content: ${({ required }) => (required ? "*" : "")};
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 2.4rem;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.text.light_purple};
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 5px;
  font-size: 15px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.text.purple};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.text.light_purple};
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 5px;
  font-size: 15px;
`;
const ContactRight = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
    height: auto;
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    img {
      width: 60%;
    }
  }
`;

const ContactButton = styled.button`
 
  align-self: end;
  padding: 0.95rem 4rem;
  font-size: 18px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.btnBackground};
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: 500;
  border: none;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 1rem 4rem;
    margin-top:10px;
    margin-bottom: 20px;
  }
`;

//  align-self:end;
//   width: 15.5rem;
//   font-size: 2.2rem;
//   padding: 1.1rem 4rem;
//   border-radius: 10px;
//   background: ${({ theme }) => theme.colors.btnBackground};
//   color: ${({ theme }) => theme.colors.text.white};
//   font-weight: 500;
//   border: none;

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     height: 5.7rem;
//     font-size: 2.4rem;
//     padding: 0;
//     margin-top: 10px;
//     margin-bottom: 20px;
//   }

export default Contact;
