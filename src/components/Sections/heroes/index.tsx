import { descripto } from "../../../constants";

type heroesProps = {
  title: string;
};

export const HereosSection = ({ title }: heroesProps) => {
  return (
    <div
      id="hero"
      className="h-full w-full m-0 space-x-0 p-0 mt-16 font-Poppin  mb-16 mt-16 "
    >

      
      <div className="flex md:flex-row w-full gap-4 flex-col px-6 mx-auto space-y-4 md:space-y-0">
       
        <div className="flex md:w-1/2 px-4 space-y-1 md:gap-6 gap-2 flex-col font-Poppins">
          <h1 className="text-4xl font-bold md:text-5xl md:text-left text-center">
            <span className="text-greenMain">Cultify:</span>
            {title.split(":").slice(1).join(":")}
          </h1>
          <p className="text-center text-darkGrayishBlue-500 md:text-left text-center text-lg  ">
            {descripto}
          </p>
          <div className="flex justify-start ">
            <a
              href="#"
              className="p-3 px-6 pt-2 text-white bg-greenMain rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="flex md:h-[400px] h-[300px] justify-center md:w-1/2 overflow-hidden w-full rounded-md ">
          <img
            src="images/H.jpeg"
            alt="tomatoe"
            style={{
             
              height: '100%',
              objectFit: 'cover',
            }}
            className="w-full h-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
