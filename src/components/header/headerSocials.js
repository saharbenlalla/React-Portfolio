import { BsLinkedin } from 'react-icons/bs'
import { BsMessenger } from 'react-icons/bs' 
import { IoLogoWhatsapp } from 'react-icons/io' 
function headerSocials() {
  return (
    <div className="header__socials">
      <a href="#linkoflinkedin" target="_blank"><BsLinkedin/></a>
      <a href="#linkofmesenger" target="_blank"><BsMessenger/></a>
      <a href="#linkofwhatssup" target="_blank"><IoLogoWhatsapp/></a>
    </div>
  )
}

export default headerSocials