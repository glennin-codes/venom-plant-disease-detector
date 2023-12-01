import { NavBar } from "./components/NavBar"
import { HereosSection } from "./components/Sections/heroes"
import { title } from "./constants"
import './App.css'
import { AboutUs } from "./components/Sections/AboutUs"
import { WhyChoseUs } from "./components/whyChoseUs"
function App() {

  return (
    <>
 
    <NavBar/>
    <HereosSection title={title}/>
    <AboutUs/>
    <WhyChoseUs/>
    </>
  )
}

export default App
