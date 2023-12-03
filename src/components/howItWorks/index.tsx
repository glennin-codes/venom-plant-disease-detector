export const HowItworks = () => {
  return (
    <div className=" mt-20 mb-12 flex flex-col align-center justify-center items-center md:px-6 px-4 w-full">
      <h1 className="text-greenMain text-center text-2xl font-bold md:text-3xl mb-12">
        How It Works
      </h1>
      <div className="flex flex-col md:flex-row w-full md:space-x-12  ">
        <div className="md:w-1/2 w-full">
          <img
            src="images/how.jpeg"
            className="w-full h-96 object-cover rounded-lg "
          />
        </div>
        <div className="md:w-1/2 w-full flex-col justify-center align-center leading-10   ">
          <p className='font-Poppins text-typographyGray-400'>
            <span className="text-blackSubtitles-500 font-bold ">Capture:</span> Snap a photo of your plant to predict diseases with our
            advanced machine learning platform.
          </p>
          <p className='font-Poppins text-typographyGray-400'>
          <span className="text-blackSubtitles-500 font-bold ">Diagnose:</span>Receive instant disease diagnosis and access treatment
            recommendations.
          </p>
          <p className='font-Poppins text-typographyGray-400'>
          <span className="text-blackSubtitles-500 font-bold ">Connect:</span> Find nearby agrovet services for quick and effective
            solutions.
          </p>
          <p className='font-Poppins text-typographyGray-400'>
          <span className="text-blackSubtitles-500 font-bold ">Monitor:</span> Stay informed with real-time statistics on trending plant
            diseases in your area.
          </p>
          <p className='font-Poppins text-typographyGray-400'>
          <span className="text-blackSubtitles-500 font-bold ">Alert:</span> Receive timely notifications about potential disease
            outbreaks in your region.
          </p>
          <p className='font-Poppins text-typographyGray-400'>Experience the future of plant care – join us today!</p>
          <div className="flex justify-start ">
            <a
              href="#" 
              className="p-3 px-4 pt-2 text-white bg-greenMain rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};
