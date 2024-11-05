import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../ContextApi/Context";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  let navi = useNavigate();
  const { login, loggedIn, user } = useAuth();
  console.log(loggedIn);

  let [regData, setRegData] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setRegData({
      ...regData,
      [e.target.name]: e.target.value,
    });
  };

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

  const Sign_In = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, regData.email, regData.password);
      notifySuccess();
      setRegData({ email: "", password: "" }); // Reset the state
      setTimeout(() => {
        navi("/allpost");
      }, 2000);
      login();
      user(regData.email);
    } catch (error) {
      console.log(error);
      notifyError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex font-poppins items-center justify-center min-w-screen mt-16 bg-blue-100 h-[93vh]">
      <div className="grid gap-8">
        <div id="back-div" className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4">
          <div className="border-[20px] border-transparent rounded-[20px] bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
            <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
              Login
            </h1>
            <form className="space-y-4" onSubmit={Sign_In}>
              <div>
                <label htmlFor="email" className="mb-2 dark:text-gray-400 text-lg">Email</label>
                <input
                  id="email"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  onChange={handelChange}
                  value={regData.email}
                  autoComplete="new-email"
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
                <input
                  id="password"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  onChange={handelChange}
                  value={regData.password}
                  autoComplete="new-password"
                />
              </div>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                type="submit"
                // onClick={notifySuccess}
              >
                SIGN IN
              </button>
            </form>
            <div className="flex flex-col mt-4 items-center justify-center text-sm">
              <h3>
                <span className="cursor-default dark:text-gray-300">Don't Have an account?</span>
                <a className="group text-blue-400 transition-all duration-100 ease-in-out" href="#">
                  <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    <a href="/register">Sign Up</a>
                  </span>
                </a>
              </h3>
            </div>
            <div id="third-party-auth" className="flex items-center justify-center mt-5 flex-wrap">
              {/* Add third-party auth buttons here */}
            </div>
          </div>
        </div>
      </div>
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
  );
};

export default Login;
