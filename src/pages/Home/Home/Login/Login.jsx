import React from "react";
import login from "../../../../assets/login/Security On-amico.png";
const Login = () => {
   return (
      <div className="relative flex flex-col md:flex-row  p-28 w-full my-6 bg-[#242933] overflow-hidden">
         <div className="w-[60%] h-fit">
            <img className="h-[70%] w-[80%]" src={login} alt="" />
         </div>

         <div className="w-[60%] h-fit  p-6 border border-pink-500  backdrop-blur-md bg-[#242940]   rounded-md shadow-xl ">
            <h1 className="text-3xl font-semibold text-center lilita tracking-widest uppercase">
               Please Sign in
            </h1>
            <form className="mt-6">
               <div className="mb-2">
                  <label
                     for="email"
                     className="block text-sm font-semibold text-white">
                     Email
                  </label>
                  <input
                     type="email"
                     className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
               </div>
               <div className="mb-2">
                  <label
                     for="password"
                     className="block text-sm font-semibold text-white">
                     Password
                  </label>
                  <input
                     type="password"
                     className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
               </div>
               <a href="#" className="text-xs text-white hover:underline">
                  Forget Password?
               </a>
               <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                     Login
                  </button>
               </div>
            </form>
            <div className="relative flex items-center justify-center w-full mt-6 border border-t">
               <div className="absolute px-5 bg-[#242940]">Or</div>
            </div>
            <div className="flex mt-4 gap-x-2">
               <button
                  type="button"
                  className="flex items-center justify-center mx-auto w-[50%]  p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
                  Log in with Google
               </button>
            </div>

            <p className="mt-8 text-xs font-light text-center text-white">
               {" "}
               Don't have an account?{" "}
               <a
                  href="#"
                  className="poppin text-primary font-semibold hover:underline">
                  Sign up
               </a>
            </p>
         </div>
      </div>
   );
};

export default Login;