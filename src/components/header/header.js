import './header.css'
import CTA from './cta'
import ME from '../../assets/images/IMG_20230225_164403__2_-removebg-preview.png'
import HeaderSocial from './headerSocials'

function header() {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sahar BenLalla</h1>
        <h5 className="text-light">IT Student</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="pic" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header