import React, { useState } from 'react'
import { FaUpload } from 'react-icons/fa'
import SmallCard from './SmallCard'

function InputForm() {
  const [image,setImage]=useState (null);

  function hundleUploadFile(e: any): void {
    setImage(e.target.files[0]);
console.log(e.target.files[0]);

  }

  return (
    <div className='w-full  h-screen px-8 flex md:flex-row flex-col gap-4 font-Poppins'>
      <div className="md:w-1/2 w-full justify-center items-center border-2 border-dashed border-gray-300 rounded-md shadow-md h-1/2">
        
            <div   className='flex h-full flex-col cursor-pointer  hover:text-green-500 justify-center items-center text-gray-500 '>
             <FaUpload className="h-12 w-12"/>
             <input  type='file' onClick={hundleUploadFile} className='hidden' />
            
             <div className='text-center flex flex-col '>
              Drag and drop an image here or   <span style={{border:'none',borderStyle:'none',background:'transparent',cursor:'pointer'}}   className=' border-none border-0 hover:text-green-500 cursor-pointer  bg-transparent text-blue-400 hover:text-green-500' placeholder='browse'/>
             </div>
            
            </div>

        </div> 
      <div className="md:w-1/2 w-full  mx-auto   p-6 shadow-md h-1/2">
        <ul>
          <li><SmallCard text="please upload a jpg only!"/></li>
          <li><SmallCard text="please upload a jpg only!"/></li>
          <li><SmallCard text="please upload a jpg only!"/></li>
          <li><SmallCard text="please upload a jpg only!"/></li>
          <li><SmallCard text="please upload a jpg only!"/></li>
          <img src={image?.path} alt="" />
        </ul>
            

        </div> 

    </div>
  )
}

export default InputForm