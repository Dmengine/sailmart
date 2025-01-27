import React from 'react'
import SideImage from "../login-signup/side-image.png";

const Login = () => {
  return (
  
      <div className="lg:flex pt-12 pl-8 pb-12">

    <div className="w-80 ml-2 lg:w-1/2 mr-44 h-80">
        <img src={SideImage} alt="left image" />
    </div>


<div className="ml-4 lg:w-1/2 mt-28">
    <h3 className="text-2xl font-semibold mb-4">Log in to Exclusive</h3>
    <p className="mb-8">Enter your details below</p>
    <div className="form-box">
        
        <form action="">
            <input type="email" name="email" placeholder="Email or Phone Number" className="border-b-2 focus:outline-none border-gray-500 py-1 w-80 mb-4" /> <br />
            <input type="password" name="password" placeholder="Password" className="border-b-2 focus:outline-none border-gray-500 py-1 w-80 mb-4" />
        </form>

        <div className="flex">
            <button className="w-32 h-12 bg-[#DB4444] mb-4 mr-18 rounded-md"><a href="#" className="text-[#fff]">Log In</a></button>

            <p className="mt-3"><a href="#" className="text-[#DB4444]">Forgot Password?</a></p>
        </div>
        
       
    </div>
</div>


</div>
    
  )
}

export default Login
