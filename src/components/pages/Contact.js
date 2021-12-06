import { useRef } from "react";
import emailjs from "emailjs-com";
import classes from "./Contact.module.css";

const Contact = (props) => {
  const helper = `${classes.contact} container`;
  const form = useRef();

  const emailjsFunction = () => {
    emailjs
      .sendForm(
        "service_i0lvslx",
        "template_y4mqjwy",
        form.current,
        "user_ozISfnDJkFHX53ZpZ7uJx"
      )
      .catch((err) => err);
  };

  const sendMail = (e) => {
    e.preventDefault();
    emailjsFunction();
  };

  return (
    <section className={helper}>
      <div className={classes.layout}>
        <div className={classes.form}>
          <form onSubmit={sendMail} ref={form}>
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Full Name"></input>

            <label>Email </label>
            <input type="email" name="user_email" placeholder="Email"></input>

            <label>Message</label>
            <textarea
              name="user_message"
              rows="4"
              placeholder="Your message"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
