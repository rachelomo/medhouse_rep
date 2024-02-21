import React from "react";
import axios from "axios";
import { useState } from "react";
import waitinRoom from "../images/waitinRoom.jpg";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
    const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState('');

    const [error, setError] = useState('');
    const handleLogin = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

            if (response.status === 200) {
                console.log('Login successful!', response.data);
                setError('');
            } else {
                console.error('Login failed.');
                setError('Invalid email or password.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again.');
        }

    };
    const handleForgotPassword = async () => {
        try {
            // Your "Forgot Password" logic here...
            if (!forgotPasswordEmail) {
                setForgotPasswordSuccess('Please enter your email.');
                return;
            }

            // Simulate a successful request for the example
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                email: forgotPasswordEmail,
            });

            if (response.status === 201) {
                console.log('Password reset email sent successfully.');
                setForgotPasswordSuccess('Password reset email sent successfully.');
            } else {
                console.error('Failed to send password reset email.');
                setForgotPasswordSuccess('Failed to send password reset email.');
            }
        } catch (error) {
            console.error('Error during password reset:', error);
            setForgotPasswordSuccess('An error occurred. Please try again.');
        }
    };

    return (


        < div className="py-0 px-50 font-sans mt-40 bg-gray-200" >
            <div className="">
                <div className="relative">
                    <img
                        src={waitinRoom}
                        alt="firstImage"
                        className="w-full h-80 object-cover mt-20"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black opacity-70">
                        <p className="text-white text-4xl font-semibold">
                            LOGIN
                        </p>
                    </div>
                </div>
                <div className="container mx-auto p-8 text-center px-40">
                    <h1 className=" text-2xl  mb-6 text-black" >Log in to your  <span className="font-bold">account</span></h1>
                    <div className="mb-8">

                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="outline-none mt-1 p-4 w-full border border-solid border-gray-400  rounded"
                            placeholder="E-mail"
                            required
                        />
                    </div>
                    <div className="mb-8">

                        <input
                            type="text"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="outline-none mt-1 p-4 w-full border border-solid border-gray-400  rounded"
                            placeholder="Password"
                            required
                        />
                    </div>
                    {error && <div>{error}</div>}
                    <div className="flex justify-between">
                        <button onClick={handleLogin} className="mt-8 bg-blue-800 text-white text-left align-left px-4 py-2 rounded ">Login</button>
                        <button onClick={handleForgotPassword} className="mt-8 bg-red-800 text-white text-left align-left px-4 py-2 rounded">Forgot Password?</button>
                    </div>
                    <hr className="border-t border-gray-400 mt-8" />

                    <div className="flex justify-between">
                        <Link to="/signup">
                            <button className="mt-8 bg-blue-800 text-white text-left align-left px-4 py-2 rounded ">Create a Landlord account</button >
                        </Link>
                        <Link to= "">
                        <button  className="mt-8 bg-blue-800 text-white text-left align-left px-4 py-2 rounded">Create a Tenant account</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div >
    )
}
export default Login;