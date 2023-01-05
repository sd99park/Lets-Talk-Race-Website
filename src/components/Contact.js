import "./Contact.css";
import heartbanner from "../img/heartbanner.png";
import ppl from "../img/diffPeople.png";

const Contact = () => {
  return (
    <>
      <img src={heartbanner} style={{ width: "100%", marginTop: "2cm" }} />
      <h1 className="contact-header">We would love you to contact us!</h1>
      <a href="mailto:ltrclass@gmail.com" className="contact-email">
        ltrclass@gmail.com
      </a>
      <p className="contact-phone">(469)-513-1060</p>
    </>
  );
};

export default Contact;
