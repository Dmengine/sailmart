import React from 'react';
import SideImage from "../login-signup/side-image.png";
import GoogleIcon from "../login-signup/Icon-Google.png";

const SignUp = () => {
  return (
    <div>
    <div className="lg:flex pt-12 pl-8 pb-12">

        <div className="w-80 ml-2 lg:w-1/2 mr-44 h-80">
            <img src={SideImage} alt="left image" />
        </div>


        <div className="ml-4 lg:w-1/2 mt-24">
            <h3 className="text-2xl font-semibold mb-4">Create an account</h3>
            <p className="mb-8">Enter your details below</p>
            <div className="form-box">
                <form action="">
                    <input type="text" name="name" placeholder="Name" className="border-b-2 focus:outline-none border-gray-500 py-1 w-80 mb-4" /> <br />
                    <input type="email" name="email" placeholder="Email or Phone Number" className="border-b-2 focus:outline-none border-gray-500 py-1 w-80 mb-4" /> <br />
                    <input type="password" name="password" placeholder="Password" className="border-b-2 focus:outline-none border-gray-500 py-1 w-80 mb-4" />
                </form>
                <button className="w-80 h-12 bg-[#DB4444] mb-4"><a href="#" className="text-[#fff]">Create Account</a></button>

                <button className="flex items-center  justify-center w-80 h-12 bg-transparent border border-black-100 mb-4"><img src={GoogleIcon} alt="Google-icon" /><a href="#" className="text-[#000] ml-2">Sign up with Google</a></button>


                <div className="flex ml-12">
                    <p className="mr-4 text-[#2e2b2b]">Already have account?</p>
                    <p><a href="/Login" className="text-[#000] underline">Log in</a></p>
                </div>
               
            </div>
        </div>


    </div>
    </div>
  )
}

export default SignUp
