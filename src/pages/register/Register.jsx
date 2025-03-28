import Logo from "../../assets/Logo.svg";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import {
  validateEmail,
  validatePassword,
  validateUsername,
  validatefullname,
} from "../../utils/formvalidation";
import { useState } from "react";

function Register() {
  const [revealPassword, setRevealPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const togglePassword = () => {
    setRevealPassword((prev) => !prev);
  };

  const formSubmit = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="w-[90vw] md:w-[500px] border rounded-md border-[#A1A1A1] py-[40px] px-[28px]">
        <div className="flex justify-center">
          <Link to="/">
            <img src={Logo} alt="InstaShot logo" />
          </Link>
        </div>
        <form
          className="md:max-w-[400px] mx-auto mt-10"
          onSubmit={handleSubmit(formSubmit)}
        >
          <div className="mb-4">
            <label className="floating-label">
              <span>Email</span>
              <input
                type="email"
                placeholder="Email"
                className="input input-lg w-full"
                id="email"
                {...register("email", {
                  validate: (value) => validateEmail(value),
                })}
              />
            </label>
            {errors.email && (
              <span className="text-sm text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="floating-label">
              <span>FullName</span>
              <input
                type="text"
                placeholder="Fullname"
                className="input input-lg w-full"
                id="fullname"
                {...register("fullname", {
                  validate: (value) => validatefullname(value),
                })}
              />
            </label>
            {errors.fullname && (
              <span className="text-sm text-red-600">
                {errors.fullname.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="floating-label">
              <span>UserName</span>
              <input
                type="text"
                placeholder="Username"
                className="input input-lg w-full"
                id="username"
                {...register("username", {
                  validate: (value) => validateUsername(value),
                })}
              />
            </label>
            {errors.username && (
              <span className="text-sm text-red-600">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="mb-4 relative">
            <label className="floating-label">
              <span>Password</span>
              <input
                type={revealPassword ? "password" : "text"}
                placeholder="Username"
                className="input input-lg w-full"
                id="password"
                {...register("password", {
                  validate: (value) => validatePassword(value),
                })}
              />
            </label>
            <button
              className="absolute inset-y-0 right-2"
              onClick={togglePassword}
              type="button"
            >
              {revealPassword ? <span>Show</span> : <span>Hide</span>}
            </button>
          </div>
          {errors.password && (
            <span className="text-sm text-red-600">
              {errors.password.message}
            </span>
          )}

          {/* <button
            className="mt-4 btn btn-secondary w-full bg-[#8D0D76]"
            type="submit"
          >
            Continue
          </button> */}

          <button className="btn w-full text-white bg-[#8D0D76] hover:bg-[#8d0d76cb]">
            Continue
          </button>

          <div className="text-center mt-[10px]">
            <p className="px-[40px]">By signing up, you agree to our Term, data policy</p>
          </div>
        </form>
      </div>
      <div className="w-[90vw] md:w-[500px] border rounded-md border-[#A1A1A1] py-[20px] px-[28px] mt-5 text-center">
        <span>Already have an account? </span>
        <Link to="/auth/login">
          <button className="cursor-pointer text-[#8D0D76] font-bold">
            Log in
          </button>
        </Link>
      </div>
    </>
  );
}

export default Register;
