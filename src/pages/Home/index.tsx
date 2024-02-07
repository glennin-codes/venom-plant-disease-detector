import { ReactNode } from "react"
import { AboutUs } from "../../components/Sections/AboutUs"
import { HereosSection } from "../../components/Sections/heroes"
import { HowItworks } from "../../components/howItWorks"
import { WhyChoseUs } from "../../components/whyChoseUs"
import { title } from "../../constants"
import { animateScroll as scroll } from 'react-scroll';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export const Home=(): ReactNode=>{
    // const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const scrollTo = parseInt(searchParams.get('scrollTo') || '0', 10); // Parse as an integer
// console.log({scrollTo});
//     useEffect(() => {
//         // Check if scrollTo is not null
//         if (scrollTo) {
//           // Scroll to target element
//           scroll.scrollTo(scrollTo, {
//             spy:true,
//             offset:-70,
//             duration: 500,
//             smooth: true
//           });
//         }
//       }, [scrollTo]);
    return(
       <>
        <HereosSection title={title}/>
        <HowItworks/>
        <WhyChoseUs/>
        <AboutUs/>
      
      
       
       </>
    )
}