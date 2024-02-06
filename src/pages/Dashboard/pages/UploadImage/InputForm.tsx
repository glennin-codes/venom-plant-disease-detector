import React, { useEffect, useState } from "react";
import { FaTimes, FaUpload } from "react-icons/fa";
import SmallCard from "./SmallCard";

function InputForm() {
  const [image, setImage] = useState<File | null>(null);
  const [objectURL, setObjectURL] = useState<string | null>(null); // State to store the object URL


  
  function handleUploadFile(e: React.ChangeEvent<HTMLInputElement>): void {
    const file = e.target.files && e.target.files[0];
    console.log({file});
    console.log({objectURL});
    if (file) {
     
     
        const objectURL = URL.createObjectURL(file);
        setObjectURL(objectURL);
      setImage(file);
    }
  }

  // Function to revoke object URL
  function revokeObjectURL(): void {
    if (objectURL) {
      setImage(null);
      setObjectURL(null);
       // Clear the object URL from state
    }
  }
  function handleCancel(): void {
    // Clear the image and object URL when cancel button is clicked
  revokeObjectURL();
  }

  return (
    <div className="w-full  h-screen px-8 flex md:flex-row flex-col gap-4 font-Poppins">
      <div className="md:w-1/2 w-full justify-center items-center border-2 border-dashed border-gray-300 rounded-md shadow-md h-1/2">
        <label className="flex h-full flex-col cursor-pointer  hover:text-green-500 justify-center items-center text-gray-500 ">
          <FaUpload className="h-12 w-12" />
          <input type="file" onChange={handleUploadFile} className="hidden" />

          <div className="text-center flex flex-col ">
            Drag and drop an image here or{" "}
            <span className=" cursor-pointer  text-blue-400 hover:text-green-500">
              browse
            </span>
          </div>
        </label>
      </div>
      <div className=" md:w-1/2  w-full flex flex-col gap-2">
      {objectURL && (
        <div className="relative">
          <img src={objectURL} className="h-[100px] w-full  hover:scale-[1.05] object-cover border border-blue-300 rounded-lg" alt="image" />
          <button
            onClick={handleCancel}
            className="absolute top-2 right-2 bg-red-500 rounded-full p-2 focus:outline-none"
          >
            <FaTimes className="text-white hover:text-gray-300" />
          </button>
        </div>
      )}

       <div className="flex flex-col gap-1">
        <h4 className="text-greenMain"></h4>
       <SmallCard text="Supports a  jpg or  image only." />

<SmallCard text=" Capture high-quality image." />
<SmallCard text="Ensure clear views of affected areas." />
<SmallCard text="Utilize natural lighting whenever possible." />
       </div>
      </div>
    </div>
  );
}

export default InputForm;
