import { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/ChitChat.png";
import goggle from "../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { provider, auth } from "../config";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userInfo } from "../sclices/userLoginSlice";

function Login() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const history = useNavigate();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response, "user Info");
        debugger;
        dispatch(
          userInfo({
            userName: response?.user?.displayName,
            userEmail: response?.user?.email,
            token: response?.user?.accessToken,
            phoneNumber: response?.user?.phoneNumber,
            profileImage: response?.user?.photoURL,
          })
        );
        history("/home");
      })
      .catch((errors) => console.log(errors));
  };
  return (
    <div
      className="px-0 sm:px-10 md:px-16 lg:px-24 h-full min-h-[100vh]"
      style={{ background: "linear-gradient(90deg, #000000, #0d274c)" }}
    >
      <div className="w-full lg:w-3/5 flex justify-center lg:inline-block">
        <img src={logo} alt="Chitchat" className="h-[200px] md:h-full"></img>
      </div>
      <div className="bg-transparent py-7 px-5 w-full lg:w-2/5 block lg:inline-block">
        <form className="">
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border-2 border-inherit w-full p-2.5 mb-2.5"
          ></input>

          <input
            type="password"
            placeholder="Password"
            className="rounded-lg border-2 border-inherit w-full p-2.5 mb-2.5"
          ></input>
          <button
            type="submit"
            className="w-full p-2.5 mb-2.5 rounded-lg bg-sky-700 text-white"
          >
            Login
          </button>
        </form>
        <div className=" text-center mb-4 text-white">
          <a href="#">Forgotten Password?</a>
        </div>
        <div className="text-center">
          <button
            className="bg-white text-black px-3 py-2 w-full rounded-lg mb-3"
            onClick={handleGoogleLogin}
          >
            <img
              className="h-10 inline-block"
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            />
            <span>{`  Continue with google`}</span>
          </button>
        </div>
        <div className="border-b-[#dadde1] border-b-[1px]"></div>
        <div className="flex items-center justify-center mt-6">
          <Link to="/signup">
            <button type="submit" className=" text-white">
              Don’t have an account? Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
