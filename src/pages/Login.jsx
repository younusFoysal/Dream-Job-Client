import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from "react-router-dom";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6";
import React, {useContext, useState} from "react";
import {AuthContext} from "../providers/AuthProvider.jsx";
import {FaGithub} from "react-icons/fa";

const Login = () => {

    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);



    const handleLogin = e => {
        e.preventDefault();


        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                toast('Logged In Successfully')
                e.target.reset();
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
                toast('Email & Password not match!')
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <div>


            <div className="flex justify-center items-center  dark:bg-gray-900">
                <div className="grid gap-8">
                    <div
                        id="back-div"
                        className="shadow-xl bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4 mb-10"
                    >
                        <div
                            className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
                        >
                            <h1 className="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
                                Log in
                            </h1>
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div>
                                    <label for="email" className="mb-2  dark:text-gray-400 text-lg">Email</label>
                                    <input
                                        id="email"
                                        className="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label for="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
                                    <input
                                        id="password"
                                        className="border mb-4 p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                    />

                                </div>
                                {/*<a className="group text-blue-400 transition-all duration-100 ease-in-out" href="#">*/}
                                {/*        <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">*/}
                                {/*            Forget your password?*/}
                                {/*        </span>*/}
                                {/*</a>*/}
                                <button
                                    className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white font-bold rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                                    type="submit"
                                >
                                    LOG IN
                                </button>
                            </form>


                            <div className="flex flex-col mt-4 items-center justify-center text-sm">
                                <h3 className="dark:text-gray-300">
                                    Don't have an account?
                                    <Link to="/register" className="ml-2 group text-blue-400 transition-all duration-100 ease-in-out" >
                                        <span className="bg-left-bottom font-bold bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                            Register now.
                                        </span>
                                    </Link>
                                </h3>
                            </div>

                            <div
                                id="third-party-auth"
                                className="flex items-center justify-center mt-5 flex-wrap"
                            >

                                <button
                                    onClick={handleGoogleSignIn}
                                    className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
                                    <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                         width="25px">
                                        <path fill="#FFC107"
                                              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        <path fill="#FF3D00"
                                              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                        <path fill="#4CAF50"
                                              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                        <path fill="#1976D2"
                                              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>

                                    Login with Google
                                </button>


                            </div>

                            <div
                                className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm"
                            >
                                <p className="cursor-default">
                                    By signing in, you agree to our Terms and Privacy Policy.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;