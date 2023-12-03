import { NavBar } from "./components/NavBar"
import { HereosSection } from "./components/Sections/heroes"
import { title } from "./constants"
import './App.css'
import { AboutUs } from "./components/Sections/AboutUs"
import { WhyChoseUs } from "./components/whyChoseUs"
import { Footer } from "./components/footer"
import { HowItworks } from "./components/howItWorks"
function App() {

  return (
    <>
 
    <NavBar/>
    <HereosSection title={title}/>
    <AboutUs/>
  
    <WhyChoseUs/>
    <HowItworks/>
    <Footer/>
    </>
  )
}

export default App
