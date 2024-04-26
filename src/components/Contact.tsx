import "./Contact.css";
import React, { useRef, useState } from "react";
import heartbanner from "../img/heartbanner.png";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      "first-name": firstName,
      "last-name": lastName,
      email: email,
      message: message,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    sendEmail({
      name: firstName + " " + lastName,
      email: email,
      message: message,
    });
  };

  const sendEmail = (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    emailjs
      .send(
        "service_m4668oj",
        "template_ua9zhfm",
        formData,
        "q57Ehd9mtbIQ31CvV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Testing">
      <img src={heartbanner} style={{ width: "100%" }} alt="Heart Banner" />
      <h1 className="contact-header">We would love to hear from you!</h1>

      <div className="contact-container">
        <div className="contact-form-container">
          <h2 className="contact-head">Send Us A Message</h2>
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <div className="contact-names">
              <div className="contact-input-wrapper">
                <label className="contact-label">First Name</label>
                <input
                  className="contact-input"
                  type="text"
                  name="first-name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  placeholder="First name.."
                  required
                />
              </div>
              <div className="contact-input-wrapper">
                <label className="contact-label">Last Name</label>
                <input
                  className="contact-input"
                  type="text"
                  name="last-name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  placeholder="Last name.."
                  required
                />
              </div>
            </div>
            <div className="contact-input-wrapper">
              <label className="contact-label">Email</label>
              <input
                className="contact-input"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email.."
                required
              />
            </div>
            <div className="contact-input-wrapper">
              <label className="contact-label">Message</label>
              <textarea
                className="contact-input"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Message.."
                required
              />
            </div>
            <div className="contact-submit-wrapper">
              <input type="submit" value="Send" className="contact-submit" />
            </div>
          </form>
        </div>
        <div className="contact-form-container">
          <h2 className="contact-head">Contact Us</h2>
          <h3 className="contact-ltr">LTR Ministries, Inc.</h3>
          <div className="contact-subgroup">
            <p className="contact-title">Email: </p>
            <a href="mailto:admin@ltrministries.com" className="contact-email">
              admin@ltrministries.com
            </a>
          </div>
          <div className="contact-subgroup">
            <p className="contact-title">Phone:</p>
            <p className="contact-phone">(469)-513-1060</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
