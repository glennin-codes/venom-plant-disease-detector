import { useState } from "react";
import { Link, Path, useNavigate } from "react-router-dom";

import { useLocation } from 'react-router-dom';
import { scrollToElement } from "../../helpers/scroll";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();
  const goToHomeAndScroll = (elementName:string,offsetTop:number) => {
    navigate('/');
    setTimeout(() => {
      scrollToElement(elementName,offsetTop);
    },  0);
  };
 

  return (
    <nav style={{marginTop:0 ,top:0,}} className="fixed w-full top-0 mt-0 z-10 shadow-md shadow-green-50  mb-64  bg-gray-50  mx-auto   ">
      {/* flex container */}
      <div className="flex items-center justify-between px-4">
        {/* --logo-- */}
        <Link to="/" className="bg-white-500 round-full pt-2 ">
          <img src="images/logo.png" alt="logo" className="w-30% h-20%" />
        </Link>
        {/* --menu-items-- */}
        <div className="hidden md2:flex space-x-6 ">
          <Link to="annalysis" className="hover:text-darkGrayishBlue">
            View Annalysis
          </Link>

          <Link to="/dashboard" className="hover:text-darkGrayishBlue">
            Dashboard
          </Link>
          <div
            className="hover:text-darkGrayishBlue cursor-pointer"
           onClick={()=>goToHomeAndScroll('about-us', -80)}
          >
            About Us
          </div>
          
          <div
            className="hover:text-darkGrayishBlue cursor-pointer"
             onClick={()=>goToHomeAndScroll("how-it-works",-80)}
          >
            How It Works
          </div>
          {/* <a href='#'  className="hover:text-darkGrayishBlue">Careers</a>
                  
                  <a href='#'  className="hover:text-darkGrayishBlue">Community</a>
                  <a href='#'  className="hover:text-darkGrayishBlue" >Plants</a>  */}
        </div>
        {/* --button-- */}
        <div className="hidden md2:flex space-x-6">
          <Link
            to="/login"
            className="hidden p-3 px-6 pt-2 text-white bg-greenMain rounded-full baseline hover:bg-brightRedLight md:block"
          >
            Login
          </Link>
        </div>
        {/* <!-- Hamburger Icon --> */}
        <button
          onClick={toggleMenu}
          id="menu-btn"
          className={`block hamburger md2:hidden focus:outline-none ${
            isMenuOpen ? "open" : ""
          }`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div className={`md2:hidden  font-monsterrat w-md top-0 mt-0 z-10 shadow-md shadow-green-50 `}>
        <div
          id="menu"
          className={`absolute   flex-col items-center  ${
            isMenuOpen ? "flex" : "hidden"
          } self-end py-8 w-1/2 right-0  space-y-6 font-bold bg-white sm:w-auto sm:self-center  `}
        >
          <Link to="annalysis">View Annalysis</Link>
          <Link to="/dashboard" className="hover:text-darkGrayishBlue">
            Dashboard
          </Link>
          <div
            className="hover:text-darkGrayishBlue cursor-pointer"
           onClick={()=>goToHomeAndScroll("about-us",-80)}
          >
            About Us
          </div>
          
          <div
            className="hover:text-darkGrayishBlue cursor-pointer"
            onClick={()=>goToHomeAndScroll("how-it-works",-80)}
          >
            How It Works
          </div>
          {/* <a href="#">About Us</a>
          {/* <a href="#">Careers</a> */}
          {/* <a href="#">Community</a> */} 
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};
