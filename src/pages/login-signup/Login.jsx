import React, { useState } from 'react';
import SideImage from "../login-signup/side-image.png";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { RiEyeLine } from "react-icons/ri";
import { RiEyeOffLine } from "react-icons/ri";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignIngIn, setIsSignIngIn] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const showPassword = () => {
    setSeePassword(!seePassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSignIngIn) {
      setIsSignIngIn(true);
      try {
        const response = await doSignInWithEmailAndPassword(email, password);
        localStorage.setItem("userToken", response._tokenResponse.idToken);
        navigate(from, { replace: true });
        setIsSignIngIn(false);
      } catch (error) {
        setErrorMessage(error.message);
        setIsSignIngIn(false);
      }
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSignIngIn) {
      setIsSignIngIn(true);
      doSignInWithGoogle()
        .then(() => {
          navigate(from, { replace: true });
        })
        .catch((err) => {
          setIsSignIngIn(false);
          setErrorMessage(err.message);
        });
    }
  };

  return (
    <div className="lg:flex pt-12 pl-8 pb-12">
      <div className="w-80 ml-2 lg:w-1/2 mr-44 h-80">
        <img src={SideImage} alt="left image" />
      </div>

      <div className="ml-4 lg:w-1/2 mt-28">
        <h3 className="text-2xl font-semibold mb-4">Log in to Exclusive</h3>
        <p className="mb-8">Enter your details below</p>
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <input
              autoComplete="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); }}
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              className="border-b-2 focus:outline-none border-gray-500 py-1 w-80 mb-4"
            /> <br />
            <div className="flex">
              <input
                type={seePassword ? "password" : "text"}
                autoComplete="current-password"
                name="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); }}
                placeholder="Password"
                className="border-b-2 focus:outline-none border-gray-500 py-1 w-80 mb-4"
              />
              {seePassword ? <RiEyeLine onClick={showPassword} /> : <RiEyeOffLine onClick={showPassword} />}
            </div>

            {errorMessage && (
              <span className="text-red-600 font-bold">{errorMessage}</span>
            )}
          </form>

          <div className="flex flex-col">
            <button
              disabled={isSignIngIn}
              type="submit"
              onClick={handleSubmit}
              className="w-4/7 h-12 bg-[#DB4444] mb-4 mr-18 rounded-md">
              {isSignIngIn ? 'Signing In...' : 'Sign In'}
            </button>

            <p className="mt-3"><a href="#" className="text-[#DB4444]">Forgot Password?</a></p>
          </div>
        </div>
        <button
          disabled={isSignIngIn}
          onClick={(e) => { onGoogleSignIn(e); }}
          className="flex items-center justify-center w-80 h-12 bg-transparent border border-black-100 my-4">
          <img src="/src/assets/GoogleIcon.png" alt="Google-icon" className="h-10 w-10" />
          <a href="#" className="text-[#000] ml-2">Sign up with Google</a>
        </button>
      </div>
    </div>
  );
};

export default Login;
