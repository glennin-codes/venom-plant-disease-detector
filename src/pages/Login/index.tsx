import { ChangeEvent, FormEvent, useState } from "react"
import { Link } from "react-router-dom";

export const Login=():JSX.Element=>{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
  
    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
  
      // Update state based on the input field name
      if (name === 'userName') {
        setUserName(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    };
    const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }
  
    return(
        <div className="min-h-screen  flex items-center justify-center mt-0 space-y-0 bg-logins bg-no-repeat w-full bg-bottom bg-cover px-6 ">
              <div className=" flex flex-col shadow-md  p-8 bg-white w-full max-w-md rounded-md font-Poppins">
                     <h1 className="text-center text-mainHeading text2xl md:text-3xl font-bold">
                     Welcome to <span className="text-darkGreen">Cultify</span>
                     </h1>
                     <h1
                     className=" font-bold text-2xl md:text-3xl text-greenMain text-center"
                     >
                         Login
                     </h1>
                     <form  onSubmit={handleSubmit} className="flex flex-col space-y-2 text-sm md:text-base w-full mt-6">
                        <label
                        htmlFor="userName"
                        className="text-blackSubtitles font-semibold mb-2 block"
                        >
                            Enter your password address 
                        </label>
                        <input  
                        onChange={handleChange}
                         value={userName}
                        type="text"
                        name="userName"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400"
                        />
                        <label
                        htmlFor="password"
                        className="text-blackSubtitles font-semibold mb-2 block"
                        >
                            Enter your password
                        </label>

                        <input  
                        onChange={handleChange}
                         value={password}
                        type="password"
                        name="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400"
                        />
                        <div className="flex flex-raw md:justify-between space-x-4 mb-4">
                            <p className="text-blackSubtitles text-base hover:text-green-500 focus:outline-none cursor-pointer">
                               Forgot Password
                            </p>
                            <p className="text-blackSubtitles text-base">
                            No Account ? <Link to='/signup' > <span className="text-darkGreen hover:text-green-500 focus:outline-none cursor-pointer">Sign up</span></Link>
                            </p>
                        </div>
                        <button type="submit" className="w-full   rounded-md focus:outline-none focus:shadow-outline-blue-500 hover:bg-darkGreen text-white py-2 px-4 bg-greenMain text-center">
                             Signin
                        </button>
                    </form> 

              </div>

        </div>
    )
}