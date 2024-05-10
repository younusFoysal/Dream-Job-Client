import React, {useEffect, useState} from 'react';
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const {isPending, isError, error, data: users} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://localhost/user')
            return res.json();
        }
    })

    if (isPending){
        return <div>Loading</div>
    }
    if (isError){
        return <p>{error.message}</p>
    }



    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     fetch('https://localhost/user')
    //         .then(res => res.json())
    //         .then(data => {
    //             setUsers(data)
    //         })
    //
    // }, []);


    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photoUrl = form.get('photoUrl')
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        //reset error
        setRegisterError('')
        setSuccess('')


        if(password.length < 6 ){
            setRegisterError('Password should be at least 6 char...');
            toast('Password should be at least 6 char...')
            return;
        }
        else if (!/[A-Z]/.test(password)){
            setRegisterError('Your pass should be at least 1 upper case char...');
            toast('Your pass should be at least 1 upper case char...')
            return;
        }
        else if (!/[a-z]/.test(password)){
            setRegisterError('Your pass should be at least 1 lower case char...');
            toast('Your pass should be at least 1 lower case char...')
            return;
        }



        //create user


        // adding in DB
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast('User Created.')
                setSuccess('User Created.')

                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoUrl
                })
                    .then(() => console.log("Profile Updated"))
                    .catch()

                navigate('/')


                const createdAt = result.user?.metadata?.creationTime
                const user = {email, createAt: createdAt}
                fetch('https://happy-tour-server-alpha.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId){
                            toast('User Added in DB.')
                        }
                    })
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message);
            })


    }




    return (
        <div>

            <div className="max-w-3xl mx-auto text-center mt-16">
                <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                    <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-700 to-sky-400">
                        Register Now
                    </span>
                    <span
                        className="absolute bottom-0 left-20  w-full mx-auto max-w-xl h-1 bg-gradient-to-r from-blue-700 to-sky-400"></span>
                </h1>
                <p className="text-lg text-gray-800 mb-8">
                    Become A Part of Dream Job. <br/> The Business Community for Professionals!
                </p>
            </div>


            <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

            <section className="bg-white">
                <div className="w-full mx-auto max-w-xl flex flex-col justify-center mb-16 py-4 relative p-8">

                    <form onSubmit={handleRegister} className="w-full divide-neutral-200 rounded-3xl bg-white shadow-2xl border p-8 lg:p-10">
                        <div className="shadow rounded-lg">

                            <div className="flex items-center bg-sky-400 rounded-t-lg border-sky-500 border-b">
                                <label htmlFor="name" className="w-20 text-right mr-8 p-4 text-sky-100">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                    className="flex-1 p-4 pl-0 bg-transparent placeholder-sky-300  outline-none text-white overflow-ellipsis overflow-hidden"
                                    required
                                />
                            </div>
                            <div className="flex items-center bg-sky-400 border-sky-500 border-b">
                                <label htmlFor="name" className="w-20 text-right mr-8 p-4 text-sky-100">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="name"
                                    placeholder="Your Email"
                                    className="flex-1 p-4 pl-0 bg-transparent placeholder-sky-300  outline-none text-white overflow-ellipsis overflow-hidden"
                                    required
                                />
                            </div>
                            <div className="flex items-center bg-sky-400 border-sky-500 border-b">
                                <label htmlFor="name" className="w-20 text-right mr-8 p-4 text-sky-100">
                                    Photo</label>
                                <input
                                    type="url"
                                    name="photoUrl"
                                    id="name"
                                    placeholder="Your Photo URL"
                                    className="flex-1 p-4 pl-0 bg-transparent placeholder-sky-300  outline-none text-white overflow-ellipsis overflow-hidden"
                                    required
                                />
                            </div>


                            <div className="flex items-center bg-sky-400  rounded-b-lg border-sky-500 mb-10">
                                <label htmlFor="twitter"
                                       className="w-20 text-right p-4 mr-8 text-sky-100">Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="Your Password"
                                    required
                                    className="flex-1 p-4 pl-0 bg-transparent placeholder-sky-300 outline-none text-white overflow-ellipsis overflow-hidden"
                                />
                                <span className="absolute top-62 right-24 text-white text-xl"
                                      onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                            }
                                        </span>
                            </div>

                        </div>
                        <button className="bg-sky-500 hover:bg-sky-700 block w-full rounded py-4 text-white font-bold shadow">Register
                        </button>

                        <p className="mt-6  text-xl text-gray-600 text-center">
                            Already have account?
                            <Link to="/login"> <span className="text-sky-600 font-bold hover:text-sky-700">Login Now!</span>
                            </Link>
                        </p>

                    </form>
                </div>
            </section>

            <ToastContainer />

        </div>
    );
};

export default Register;