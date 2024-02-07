import { ReactNode } from "react"
import { AboutUs } from "../../components/Sections/AboutUs"
import { HereosSection } from "../../components/Sections/heroes"
import { HowItworks } from "../../components/howItWorks"
import { WhyChoseUs } from "../../components/whyChoseUs"
import { title } from "../../constants"


export const Home=(): ReactNode=>{

    return(
       <>
        <HereosSection title={title}/>
        <HowItworks/>
        <WhyChoseUs/>
        <AboutUs/>
      
      
       
       </>
    )
}