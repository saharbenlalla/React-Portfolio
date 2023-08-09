import './nav.css'
import { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookOpen} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'


const Nav=()=>{
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#home" 
      className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav("#experience")} className={activeNav === '#experience' ? 'active' : ''}><BiBookOpen/></a>
      <a href="#services" onClick={()=>setActiveNav("#services")} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav