import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/FirebaseConfig";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../ContextApi/Context";


const Register = () => {
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  const { login, loggedIn, user } = useAuth();

  let navi = useNavigate()
  const notifySuccess = () => {
    toast.success('Login successful!', {
      position: "top-center",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
      // transition: Bounce,
    });
  };
  const notifyError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
      // transition: Bounce,
    });
  };
  const signUp = async(e)=>{

    if(email == "" || password == ""){
      return alert("Kindly filled all the input")
    }else{
      e.preventDefault();
      try{
        const users = await createUserWithEmailAndPassword(auth,email,password)
        console.log("sucesss");
        notifySuccess()
        setTimeout(() => {
          navi('/allpost')
        }, 2000);
        login()
        user(email);
      }catch(error){
      console.log(error);
      // alert(error)
      notifyError(error.message)
      }
    }
  }

 
  return (
    <div className="flex font-poppins items-center justify-center  min-w-screen  mt-16 bg-blue-100 h-[93vh]">
      <div className="grid gap-8">
        <div
          id="back-div"
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
        >
          <div className="border-[20px] border-transparent rounded-[20px]  bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
            <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
              Sign Up
            </h1>
            <form action="#"  className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 dark:text-gray-400 text-lg"
                >
                  Email
                </label>
                <input
                  id="email"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  onChange={(e)=>setEmail(e?.target?.value)}
                  value={email}
                  autoComplete="new-email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 dark:text-gray-400 text-lg"
                >
                  Password
                </label>
                <input
                  id="password"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="password"
                  placeholder="Password"
                  name="password"
                  // required
                  onChange={(e)=> setPassword(e.target.value)}
                  value={password}
                  autoComplete="new-password"
                />
              </div>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                type="submit"
                // onSubmit={signUp}
                onClick={signUp}
              >
                SIGN UP
              </button>
            </form>
            <div className="flex flex-col mt-4 items-center justify-center text-sm">
              <h3>
                <span className="cursor-default dark:text-gray-300">
                  {" "}
                  Have an account?
                </span>
                <a
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                  href="#"
                >
                  <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    <NavLink to="/">Sign In</NavLink>
                    {/* Sign In */}
                  </span>
                </a>
              </h3>
            </div>
            {/* Third Party Authentication Options */}
            <div
              id="third-party-auth"
              className="flex items-center justify-center mt-5 flex-wrap"
            >
              {[
                {
                  src: "https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/",
                  alt: "Google",
                },
                {
                  src: "https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/",
                  alt: "Linkedin",
                },
                {
                  src: "https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/",
                  alt: "Github",
                  className: "filter dark:invert",
                },
                {
                  src: "https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/",
                  alt: "Facebook",
                },
                {
                  src: "https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/",
                  alt: "Twitter",
                  className: "dark:gray-100",
                },
                {
                  src: "https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/",
                  alt: "Apple",
                },
              ].map(({ src, alt, className }) => (
                <button
                  key={alt}
                  className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    className={`max-w-[25px] ${className || ""}`}
                    src={src}
                    alt={alt}
                  />
                </button>
              ))}
               <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        // transition={Bounce}
      />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
