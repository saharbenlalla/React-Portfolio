import './App.css';
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/aboutComponent/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contactcomponent/contact'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About />
    <Experience/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
