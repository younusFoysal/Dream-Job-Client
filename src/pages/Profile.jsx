import React, {useContext} from 'react';
import {AuthContext} from "../providers/AuthProvider.jsx";
import {MdEmail} from "react-icons/md";

const Profile = () => {

    const {user, logOut} = useContext(AuthContext);

    return (
        <div>
            <div className="pt-12 mb-20 pb-12">


                <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                    <div className="border-b px-4 pb-6">
                        <div className="text-center my-4">
                            <img
                                className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                                src={user.photoURL} alt=""/>
                            <div className="py-2">
                                <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">

                                    {user.displayName}

                                </h3>
                                <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                                    <MdEmail className="items-center justify-center mr-2"></MdEmail>
                                     {user.email}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 px-2">
                            <button
                                className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                                Follow
                            </button>
                            <button
                                className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                                Message
                            </button>
                        </div>
                    </div>
                    <div className="px-4 py-4">
                        <div className=" text-center justify-center items-center flex gap-2  text-gray-800 dark:text-gray-300 mb-4">
                            <span className="text-center"><strong className="text-black dark:text-white">Dream Job</strong> Community member.</span>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Profile;