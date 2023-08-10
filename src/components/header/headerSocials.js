import { BsLinkedin } from 'react-icons/bs'
import { BsMessenger } from 'react-icons/bs' 
import { IoLogoWhatsapp } from 'react-icons/io' 
function headerSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sahar-benlalla-4630a5224/"><BsLinkedin/></a>
      <a href="https://www.facebook.com/amira.dalloula.731/"><BsMessenger/></a>
      <a href="https://api.whatsapp.com/send?phone=21654475773"><IoLogoWhatsapp/></a>
    </div>
  )
}

export default headerSocials