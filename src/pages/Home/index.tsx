import { ReactNode } from "react"
import { AboutUs } from "../../components/Sections/AboutUs"
import { HereosSection } from "../../components/Sections/heroes"
import { HowItworks } from "../../components/howItWorks"
import { WhyChoseUs } from "../../components/whyChoseUs"
import { title } from "../../constants"


export const Home=(): ReactNode=>{

    return(
       <div className="mt-32">
        <HereosSection title={title}/>
        <HowItworks/>
        <WhyChoseUs/>
        <AboutUs/>
      
      
       
       </div>
    )
}