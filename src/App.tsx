import { NavBar } from "./components/NavBar";
import "./App.css";
import { Footer } from "./components/footer";

import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import Annalysis from "./pages/Annlysis";
import SidebarWithContentSeparator from "./pages/Dashboard";
import ScrollToTop from "./helpers/scrollToTop";

function App() {
  return (
    <>
      <Router>
     
        <NavBar />
        <ScrollToTop >
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/annalysis" element={<Annalysis/>} />
          <Route path="/dashboard" element={< SidebarWithContentSeparator/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </ScrollToTop>
        <Footer />
       
      </Router>
    </>
  );
}

export default App;
