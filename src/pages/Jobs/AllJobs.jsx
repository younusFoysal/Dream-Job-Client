import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useJobsAll} from '../../Hooks/useJobs.jsx';

const AllJobs = () => {

    let id = 1;
    const { data: jobsall, isLoading: isLoadingAll, isError: isErrorAll } = useJobsAll();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        if (isErrorAll) {
            console.error(isErrorAll)
        }
    }, [isErrorAll]);

    if (isLoadingAll){
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

    const filteredJobs = jobsall.filter(job => job.title.toLowerCase().includes(searchQuery.toLowerCase()));



    return (
        <div>
            <div className="mb-20">

                <div className="text-center p-4 mb-4 ">
                    <h1 className="font-bold text-4xl mb-4"> All Jobs</h1>
                    <h1 className="text-3xl">Didn't find job that you were looking for?</h1>
                </div>

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div
                        className="relative isolate overflow-hidden px-6 py-2 text-center sm:px-16 sm:shadow-sm">

                            <label
                                className="mx-auto bg-white relative min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                                htmlFor="search-bar">

                                <input id="search-bar"
                                       type="text"
                                       placeholder="Search by job title"
                                       value={searchQuery}
                                       onChange={handleSearchChange}
                                       className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                                />


                                <button type="submit"
                                        className="w-full md:w-auto px-6 py-3 bg-sky-500 hover:bg-sky-600 border-sky-500 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all">
                                    <div className="flex items-center transition-all opacity-1">
                                        <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                            Search
                                        </span>
                                    </div>
                                </button>

                            </label>


                        <svg viewBox="0 0 1024 1024"
                             className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                             aria-hidden="true">
                            <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                                    fill-opacity="0.7">
                            </circle>
                            <defs>
                                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                    <stop stop-color="#3b82f6"></stop>
                                    <stop offset="1" stop-color="#1d4ed8"></stop>
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>


                <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                    <table className="w-full table-fixed">
                        <thead>
                        <tr className="bg-sky-100">
                            <th className="w-3 py-4 px-6 text-left text-gray-600 font-bold uppercase">Id</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Job Title</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Job Posting
                                Date
                            </th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Application
                                Deadline
                            </th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Salary range
                            </th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Details</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">


                        {
                            filteredJobs.map(job => (
                                <tr key={job._id}>
                                    <td className="py-4 px-6 border-b border-gray-200">{id++}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">{job.title}</td>
                                    <td className="py-4 px-6 border-b border-gray-200 truncate">{job.pdate}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">{job.ddate}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">{job.salary} Tk</td>
                                    <td className="py-4 px-6 border-b border-gray-200 ">
                                        <Link to={`/jobDetails/${job._id}`}>
                                            <span
                                                className="bg-sky-500 hover:bg-sky-700 text-white py-1 px-2 rounded-full text-xs mr-2">
                                                Details
                                            </span></Link>
                                    </td>
                                </tr>
                            ))
                        }

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default AllJobs;