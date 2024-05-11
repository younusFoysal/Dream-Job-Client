import React, {useState} from 'react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {FaBriefcase} from "react-icons/fa";
import { useEffect } from 'react';
import { useJobs , useJobsH, useJobsPT, useJobsR } from '../../Hooks/useJobs.jsx';
import JobsCategoryCard from "./JobsCategoryCard.jsx";
import {Link} from "react-router-dom";


const JobsCategory = () => {

    const { data: jobsos, isLoading: isLoadingOS, isError: isErrorOS } = useJobs();
    const { data: jobsh, isLoading: isLoadingH, isError: isErrorH } = useJobsH();
    const { data: jobsr, isLoading: isLoadingR, isError: isErrorR } = useJobsR();
    const { data: jobspt, isLoading: isLoadingPT, isError: isErrorPT } = useJobsPT();



    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const handleTabSelect = (index) => {
        console.log("Selected Tab Index:", index);
        setSelectedTabIndex(index); // Update the selected tab index when a tab is selected
    };


    useEffect(() => {
        console.log("Selected Tab Index (state):", selectedTabIndex); // Log the selected tab index state
    }, [selectedTabIndex]);

    useEffect(() => {
        if (isErrorOS) {
            console.error(isErrorOS)
        }
    }, [isErrorOS]);

    useEffect(() => {
        if (isErrorR) {
            console.error(isErrorR)
        }
    }, [isErrorR]);

    useEffect(() => {
        if (isErrorH) {
            console.error(isErrorH)
        }
    }, [isErrorH]);

    useEffect(() => {
        if (isErrorPT) {
            console.error(isErrorPT)
        }
    }, [isErrorPT]);





    if (isLoadingOS){
        return <>
            <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
                <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                    <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24">
                    </line>
                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24">
                    </line>
                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24">
                    </line>
                </svg>
                <span className="text-4xl font-medium text-gray-500">Loading...</span>
            </div>
        </>
    }
    if (isLoadingR){
        return <>
            <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
                <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                    <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24">
                    </line>
                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24">
                    </line>
                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24">
                    </line>
                </svg>
                <span className="text-4xl font-medium text-gray-500">Loading...</span>
            </div>
        </>
    }
    if (isLoadingH){
        return <>
            <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
                <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                    <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24">
                    </line>
                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24">
                    </line>
                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24">
                    </line>
                </svg>
                <span className="text-4xl font-medium text-gray-500">Loading...</span>
            </div>
        </>
    }
    if (isLoadingPT){
        return <>
            <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
                <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                    <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24">
                    </line>
                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24">
                    </line>
                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24"></line>
                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="24">
                    </line>
                </svg>
                <span className="text-4xl font-medium text-gray-500">Loading...</span>
            </div>
        </>
    }



    return (
        <div>


            <div className="max-w-3xl mx-auto text-center mt-16">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4 pb-4 relative">
                    <span className="bg-clip-text mb-4 text-transparent bg-gradient-to-r from-blue-800 to-sky-500">
                        Jobs by Category
                        {/*{jobs.length}*/}
                    </span>
                    <span className="absolute bottom-0 mt-4 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-sky-500"></span>
                </h1>
                <p className="text-lg text-gray-800 mb-8">We believe that world would be a better place if everyone could get a fair chance.</p>
            </div>

            <div>


                <Tabs onSelect={handleTabSelect} selectedIndex={selectedTabIndex}>
                    <TabList
                        className="bg-gradient-to-r from-blue-800 to-sky-500 text-center pt-4 px-4 text-white font-semibold border-b-4 border-sky-700 hover:bg-sky-700 focus:outline-none tab-button">
                        <Tab>On-Site Job</Tab>
                        <Tab>Remote Job</Tab>
                        <Tab>Hybrid</Tab>
                        <Tab>Part-Time</Tab>
                    </TabList>

                    <TabPanel>

                        <div id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-4 mb-5">

                            {
                                jobsos.map(job => <JobsCategoryCard
                                    key={job._id}
                                    job={job}
                                ></JobsCategoryCard>)
                            }

                        </div>

                    </TabPanel>
                    <TabPanel>

                        <div id="jobsr" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-4 mb-5">

                            {
                                jobsr.map(job => <JobsCategoryCard
                                    key={job._id}
                                    job={job}
                                ></JobsCategoryCard>)
                            }

                        </div>


                    </TabPanel>
                    <TabPanel>
                        <div id="Projects"
                             className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-4 mb-5">

                            {
                                jobsh.map(job => <JobsCategoryCard
                                    key={job._id}
                                    job={job}
                                ></JobsCategoryCard>)
                            }

                        </div>
                    </TabPanel>
                    <TabPanel>

                        <div id="Projects"
                             className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-4 mb-5">

                            {
                                jobspt.map(job => <JobsCategoryCard
                                    key={job._id}
                                    job={job}
                                ></JobsCategoryCard>)
                            }

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a fictional character who
                            primarily
                            appears in Nintendo's Mario franchise. Created by Japanese video game designer Shigeru
                            Miyamoto,
                            he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most
                            loyal
                            attendants; constantly working on her behalf. He is usually seen as a non-player character
                            (NPC)
                            who provides assistance to Mario and his friends in most games, but there are times when
                            Toad(s)
                            takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario's
                            Woods,
                            Super Mario 3D World, and Captain Toad: Treasure Tracker.
                        </p>
                        <p>
                            Source:{' '}
                            <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
                                Wikipedia
                            </a>
                        </p>
                    </TabPanel>
                </Tabs>
            </div>


        </div>
    );
};

export default JobsCategory;