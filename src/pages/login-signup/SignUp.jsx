import React from 'react';
import SideImage from "../login-signup/side-image.png";
import { useState } from 'react';
import { RiEyeLine } from "react-icons/ri";
import { RiEyeOffLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';


const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [seePassword, setSeePassword] = useState(false)
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            try {
                await doCreateUserWithEmailAndPassword(email, password);
                navigate('/Login'); 
            } catch (err) {
                setErrorMessage(err.message);
                setTimeout(() => setErrorMessage(''), 5000);
            } finally {
                setIsRegistering(false);
            }
        }
    };

    const showPassqord =()=>{
        setSeePassword(!seePassword)
    }
  return (
    <div>
    <div className="lg:flex pt-12 pl-8 pb-12">

        <div className="w-80 ml-2 lg:w-1/2 mr-44 h-80">
            <img src={SideImage} alt="left image" />
        </div>


        <div className="ml-4 lg:w-1/2 mt-24">
            <h3 className="text-2xl font-semibold mb-4">Create an account</h3>
            <p className="mb-8">Enter your details below</p>
            <div className="form-box ">
                <form onSubmit={onSubmit}>
                    <input type="text" name="name" placeholder="Name" className="border-b-2 focus:outline-none border-gray-500 py-1 w-80 mb-4" /> <br />
                    <input type="email" name="email" autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email or Phone Number" className="border-b-2 focus:outline-none border-gray-500 py-1 w-80 mb-4" /> <br />
                   <div className='flex'> <input type={seePassword ? "password" : "text"}   disabled={isRegistering}
                                autoComplete='new-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Password" className="border-b-2 focus:outline-none border-gray-500 py-1 w-80 mb-4" />{seePassword? <RiEyeLine onClick={showPassqord} />:<RiEyeOffLine onClick={showPassqord} />}</div>
                <button className="w-80 h-12 bg-[#DB4444] mb-4"><a href="#" className="text-[#fff]" type="submit">Create Account</a></button>
                
                </form>

                {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}

                <div className="flex flex-end ml-12">
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
