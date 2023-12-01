import { NavBar } from "./components/NavBar"
import { HereosSection } from "./components/Sections/heroes"
import { title } from "./constants"
import './App.css'
function App() {

  return (
    <>
 
    <NavBar/>
    <HereosSection title={title}/>
    </>
  )
}

export default App
