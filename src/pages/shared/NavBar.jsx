import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../assets/logo.png"
import {AuthContext} from "../../providers/AuthProvider.jsx";

const Navbar = () => {


    // Dark Mode Start
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light")
    }
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark"){
        setDarkMode();
    }
    else setLightMode();
    //setDarkMode()
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode()
    }
    // Dark Mode End



    const {user, logOut} = useContext(AuthContext);
    //const user = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast('Logged Out Successfully')
            })
            .catch(
                error => {
                    console.error(error)
                }
            )
    }

    const navLinks = <>
        <li className=""><NavLink to="/" className="mr-2 text-violet-900">Home</NavLink></li>
        <li><NavLink to="/jobs" className="mr-2">All Jobs</NavLink></li>

        <li><NavLink to="/blogs" className="mr-2">Blogs</NavLink></li>



        {user ? <>
                <li><NavLink to="/addjob" className="mr-2">Add A Job</NavLink></li>
                <li><NavLink to="/appliedjobs" className="mr-2">Applied Jobs</NavLink></li>
                <li><NavLink to='/myjobs/' className="mr-2">My Jobs</NavLink></li>
                <li><NavLink to="/profile" className="mr-2">User Profile</NavLink></li>
            </>
            :
            <>

            </>
        }

    </>


    return (
        <div>
            <div className={'navbar bg-base-100 px-20'}>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>

                    <Link to="/">
                        <img src={logo} className=" h-10"/>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button"
                                         className="btn btn-ghost btn-circle avatar lg:tooltip lg:tooltip-bottom"
                                         data-tip={user.displayName}>
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component"
                                                 src={user.photoURL}/>
                                        </div>
                                    </div>
                                    <ul tabIndex={0}
                                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
                                        <li>
                                            <a className="justify-between">
                                                Hello! {
                                                user ? user.displayName : "User"
                                            }

                                            </a>
                                        </li>
                                        <li><a onClick={handleLogOut}>Logout</a></li>
                                    </ul>
                                </div>
                            </>
                            :
                            <div className="flex items-center justify-end gap-3 mr-4">
                                <Link to="/login">
                                    <a className="inline-flex items-center justify-center rounded-xl bg-[#2176bd] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#0d3b89] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                       href="/login">Login</a>
                                </Link>


                            </div>



                        // <Link to="/login">
                        //     <button className="ml-4 mr-4 btn bg-emerald-600 text-white">Login</button>
                        // </Link>


                    }


                    {/*  Dark mode Toggle  */}
                    <label className="flex cursor-pointer gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"/>
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                        </svg>
                        <input
                            type="checkbox"
                            id="darkmode-toggle"
                            onChange={toggleTheme}
                            defaultChecked={selectedTheme === "dark"}
                            className="toggle theme-controller"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>


                </div>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default Navbar;