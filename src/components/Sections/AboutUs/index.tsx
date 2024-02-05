import { aboutUs } from "../../../constants"

export const AboutUs=()=>{
    return(
        <section
        className="w-full flex flex-col gap-4   align-center justify-center m-0 p-0 font-Poppins "
           
        >
            <h1
            className="text-3xl font-bold text-center md:mb-6 text-greenMain "
            >
                About Us
            </h1>
            <div
        className="w-full flex flex-col md:flex-row   gap-4 px-6 md:space-x-8  "
        >
               <div
               className="w-full md:w-1/2  "
               >
                    <img src="images/heroes2.png" alt="woman" className="w-full h-3/4 rounded-md object-cover"/>
               </div>
               <div
               
               className="font-Poppins font-normal sm:text-base xsm:text-base leading-7 text-base md:text-lg w-full md:w-1/2  flex align-center  leading-relaxed  justify-center text-typographyGray-500 "
               >
                    {aboutUs}
               </div>
        </div>
        </section>
    )
}