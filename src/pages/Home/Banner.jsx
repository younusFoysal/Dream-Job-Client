import React from 'react';
import { FaBriefcase } from "react-icons/fa";
import {Link} from "react-router-dom";
import {GiClick} from "react-icons/gi";
import {MdAdsClick} from "react-icons/md";

const Banner = () => {

    const style = <style type="text/css">
            .st0 {`
            'fill': #0acf83
            `
        }
            .st1 {
            `fill: #a259ff`
        }
            .st2 {
            `fill: #f24e1e`
        }
            .st3 {
            `fill: #ff7262`
        }
            .st4 {
            `fill: #1abcfe`
        }
        </style>


    return (
        <div>

            <section className="">
                <div
                    className="grid max-w-6xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1
                            className="max-w-2xl mb-4 text-4xl text-sky-600 font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                            Find Your Dream Job in One Platform !
                        </h1>

                        <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Get set for success in your job interview with easy-to-use tools. Tap into an AI Interview Coach, create standout Cover Letters, or improve your Resume.

                        </p>

                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

                            <Link to="/alljobs" target="_blank"
                               className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white bg-sky-600 rounded-lg sm:w-auto hover:bg-sky-800 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                <MdAdsClick  className="mr-2" />
                                Apply Now
                            </Link>

                            <Link to="/alljobs" target="_blank"
                               className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-emerald-600 border border-emerald-500 rounded-lg sm:w-auto focus:outline-none hover:bg-emerald-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                <FaBriefcase className="mr-2" />
                                View All Jobs
                            </Link>

                        </div>
                    </div>

                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://demo.themesberg.com/landwind/images/hero.png" alt="hero image"/>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Banner;