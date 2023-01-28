import { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/chitChat.png";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useNavigate();
  const [formValues, setformValues] = useState();
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const onSubmit = (data) => {
    setformValues(data);
    history("/");
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
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-lg border-2 border-inherit w-full p-2.5 mb-2.5"
            {...register("Username", { required: "Username is required" })}
          ></input>
          {errors.Username?.message && (
            <span className="text-slate-400 my-2">
              {errors.Username?.message}
            </span>
          )}
          <input
            type="text"
            placeholder="Email"
            className="rounded-lg border-2 border-inherit w-full p-2.5 mb-2.5"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: mailFormat,
                message: "this is not valid email",
              },
            })}
          ></input>
          {errors.email?.message && (
            <span className="text-slate-400 my-2">{errors.email?.message}</span>
          )}
          <input
            type="text"
            placeholder="Mobile Number"
            className="rounded-lg border-2 border-inherit w-full p-2.5 mb-2.5"
            {...register("Mobilenumber", {
              required: "Mobile number is required",
              pattern: {
                value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                message: "number",
              },
            })}
          ></input>
          {errors.Mobilenumber?.message && (
            <span className="text-slate-400 my-2">
              {errors.Mobilenumber?.message}
            </span>
          )}
          <input
            type="password"
            placeholder="Password"
            className="rounded-lg border-2 border-inherit w-full p-2.5 mb-2.5"
            {...register("Password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be more than 6 character",
              },
              maxLength: {
                value: 10,
                message: "Password cannot exceed more than 12 character",
              },
            })}
          ></input>
          {errors.Password?.message && (
            <span className="text-slate-400 my-2">
              {errors.Password?.message}
            </span>
          )}
          <button
            type="submit"
            className="w-full p-2.5 mb-2.5 rounded-lg bg-sky-700 text-white"
          >
            Sign Up
          </button>
        </form>
        <div className=" text-center mb-4  text-white">
          <Link to="/login">Already have an account?</Link>
        </div>
        <div className="text-center">
          <span className="text-slate-400">
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy. You may receive SMS notifications from us and can
            opt out at any time
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
