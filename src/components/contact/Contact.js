import "./Contact.css";
// import TwitterIcon from "../assets/twitter.png";
import InstagramIcon from "../assets/instagram.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Element } from "react-scroll";
import github from "../assets/github.png";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kkmh1u7",
        "template_atl8jmp",
        form.current,
        "GAP3a0IvtBETeKKPw"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Element>
      <div id="Contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <div className="to-center">
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="name"
              placeholder="Your Name"
              name="your_name"
            ></input>
            <input
              type="email"
              className="email"
              placeholder="Your Email"
              name="your_email"
            ></input>
            <textarea
              className="msg"
              name="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
            <button className="submitBtn" type="submit" value="send">
              Submit
            </button>
            <div className="links">
              <a href="https://instagram.com/ig_sangharsh?igshid=YzAwZjE1ZTI0Zg==">
                <img src={InstagramIcon} alt="instagram" className="link" />
              </a>
              <a href="https://github.com/Git-Sangharsh">
                <img
                  src={github}
                  alt="instagram"
                  className="link"
                  style={{ borderRadius: "100px" }}
                />
              </a>
              {/* <a href="https://twitter.com/HiteshRam666"><img src={TwitterIcon} alt="twitter" className="link" /></a> */}
            </div>
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
