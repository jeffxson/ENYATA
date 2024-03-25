import { useNavigate } from "react-router-dom";
import InputWithFloatingLabel from "../component/input";
import logo from "../images/logos.png";
import "../index";
import { useState } from "react";

function Login() {
  const navgate = useNavigate();
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    navgate("/dashboard");
  };
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:hidden bg-[#031434] flex justify-center items-center h-20">
        <img src={logo} className="max-w-full max-h-full" alt="logo" />
      </div>
      <div className="lg:w-4/12 bg-[#031434] hidden lg:flex justify-center items-center h-screen">
        <img src={logo} className="max-w-full max-h-full" alt="logo" />
      </div>
      <div className="lg:w-8/12 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="m-auto lg:w-5/12 border-2 rounded px-12 py-8 ">
          <p className="text-xl font-medium pb-1">Login </p>
          <p className="text-sm text-gray-500 pb-12">
            Kindly enter your details to log in
          </p>
          <form onSubmit={submitHandler}>
            <InputWithFloatingLabel
              label="Email Address"
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <InputWithFloatingLabel
              label="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white w-full py-2 px-4 rounded focus:outline-none focus:bg-blue-600"
            >
              Log in
            </button>
          </form>

          <button className="text-blue-500 w-full py-2 px-4 rounded focus:outline-none flex justify-center items-center mt-3 mb-20">
            Forgot your password?
          </button>
          <div className="text-center py-4 text-xs text-gray-500">
            <a href="#" className="underline text-black hover:text-blue-600">
              Privacy Policy
            </a>
            &nbsp;and&nbsp;
            <a href="#" className="underline text-black hover:text-blue-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
