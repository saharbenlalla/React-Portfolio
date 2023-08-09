import { useRef } from 'react';
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { LiaFacebookMessenger } from 'react-icons/lia';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com'

const Contact = ()=> {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kz7o4jv', 'template_3xgqwhc', form.current, 'nD-Xt1oclhMIFohi4')
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>YourEmail@gmail.com</h5>
            <a href="mailto: benlallasahar121@gamil.com" >Send A Message</a>
          </article>
          <article className="contact__option">
            <LiaFacebookMessenger className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Your Profil</h5>
            <a href="https://m.me/messenger">Send A Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>Your Number</h5>
            <a href="https://api.whatsapp.com/send?phone=21654475773">Send A Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="You Full Name" required />
          <input type="email" name="email" placeholder="You Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send a message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
