import { descripto } from "../../../constants"

type heroesProps={
    title:string
}
export const HereosSection=({title}:heroesProps)=>{
    return(
    
  <div
      id="hero"
      className=" w-full m-0 space-x-0 p-0 "
    >
      {/* <!-- Flex Container --> */}
      <div className=" flex md:flex-row w-full  flex-col-reverse px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* <!-- Left item --> */}
        <div className="  flex justify-center md:w-1/2 px-4 mb-32 space-y-12  flex-col font-poppins  ">
          <h1 className="text-4xl font-bold md:text-5xl md:text-left text-center ">
            <span className="text-greenMain">Cultify:</span>
            {title.split(":").slice(1).join(":")}
          </h1>
          <p 
          className=" text-center text-darkGrayishBlue-500 md:text-left text-center text-lg"
          >{descripto}</p>
          <div className="flex justify-start ">
            <a
              href="#" 
              className="p-3 px-6 pt-2 text-white bg-greenMain rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* <!-- Image --> */}
        <div className=" flex  justify-center md:w-1/2 mb-32 space-y-1  ">
          <img src="images/heroes.png" alt="tea"    className="w-1/2 h-3/4 "   />
        </div>
      </div>
    </div>
    )
}