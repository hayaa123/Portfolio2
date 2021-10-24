import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import pict from "../Images/undraw_New_message_re_fp03.svg";
import "../mycss.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done , setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fm7xwhr",
        "template_sh933a6",
        formRef.current,
        "user_9Rd0pIFiJnUr6ppP4LqeD"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Container style={{ marginTop: "10%" }} id="contact">
        <div style={{ justifyContent: "center" }} className="contactGrid">
          <div>
            <h1> Contact </h1>
            <p>you can send a message directly to me here</p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                style={{ margin: "10px 0px" }}
              />
              <input
                type="text"
                placeholder="Subject"
                name="user_subject"
                style={{ margin: "10px 0px" }}
              />
              <input
                type="text"
                placeholder="Email"
                name="user_email"
                style={{ margin: "10px 0px" }}
              />
              <textarea
                rows="5"
                placeholder="Message"
                name="message"
                style={{ margin: "10px 0px" }}
              />
              <button style={{ margin: "10px 0px" }}>Send</button>
              {done && <h1>Thanks for the message</h1>}
            </form>
          </div>
          <div>
            <img src={pict}  className="letter-img" alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
