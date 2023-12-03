import { useState } from "react";

export const NavBar=()=>{
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = ():void => {
    setIsMenuOpen(!isMenuOpen);
  };
    return(
        <nav
        className="relative  container mx-auto p-6 font-Poppins" 
        >
            {/* flex container */}
            <div className="flex items-center justify-between">
               {/* --logo-- */}
               <div className="bg-white-500 round-full pt-2 ">

                      <img src='images/logo.png' alt='logo' className="w-30% h-20%" 
                      />
               </div>
               {/* --menu-items-- */}
               <div className="hidden md:flex space-x-6 font-Poppins">
                  <a href='#'  className="hover:text-darkGrayishBlue" >Pricing</a>
                  <a href='#'  className="hover:text-darkGrayishBlue">Products</a>
                  <a href='#'  className="hover:text-darkGrayishBlue" >About us</a>
                  <a href='#'  className="hover:text-darkGrayishBlue">Careers</a>
                  <a href='#'  className="hover:text-darkGrayishBlue">Community</a>
                  <a href='#'  className="hover:text-darkGrayishBlue" >Plants</a>
               </div>
                {/* --button-- */}
                <div className="hidden md:flex space-x-6">
                  <a href="#" className="hidden p-3 px-6 pt-2 text-white bg-greenMain rounded-full baseline hover:bg-magenta md:block">
                    Get Started
                  </a>
                </div>
                {/* <!-- Hamburger Icon --> */}
        <button
        onClick={toggleMenu}
          id="menu-btn"
          className={`block hamburger md:hidden focus:outline-none ${isMenuOpen ? 'open' : ''}`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div className={`md:hidden `}>
        <div
          id="menu"
          className={`absolute  font-Poppinsflex-col items-center ${isMenuOpen ? 'flex' : 'hidden'} self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
            

           

        </nav>
    )
}