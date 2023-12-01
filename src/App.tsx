import { NavBar } from "./components/NavBar"
import { HereosSection } from "./components/Sections/heroes"
import { title } from "./constants"
import './App.css'
import { AboutUs } from "./components/Sections/AboutUs"
function App() {

  return (
    <>
 
    <NavBar/>
    <HereosSection title={title}/>
    <AboutUs/>
    </>
  )
}

export default App
