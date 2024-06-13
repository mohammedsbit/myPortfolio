import './contact.scss'
import { FaMessage } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (

    <section className='contact' id='contact'>
      <h4>Get in Touch</h4>
      <h1>Contact Me</h1>
      <section className='contact-box'>
        <div className='email-contact'>
          <a href='mailto:mohammedsbit085@gmail.com'>
          <FaMessage /> <span>mohammedsbit085@gmail.com</span>

          </a>
        </div>
        <div className='linkedin-contact'>
          <a href='https://linkedin.com' target='Blank'>
          <FaLinkedin /> <span>Linkedin</span>
          </a>
        
        </div>
      </section>
    </section>
  )
}
