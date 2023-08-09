import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
function footer() {
  return (
    <footer>
      <a href="#footer" className="footer__logo">Hello!</a>
      <ul className="permalinks">
        <li> <a href="#header">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Skills</a> </li>
        <li> <a href="#services">Services</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
        <li> <a href="#contact">Contact</a> </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/amira.dalloula.731/"><BsFacebook/></a>
        <a href="https://www.instagram.com/sahr_ouraa_/"><AiFillInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Sahar BenLalla. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default footer