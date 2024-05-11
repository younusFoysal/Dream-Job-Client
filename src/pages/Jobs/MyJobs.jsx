
import React, {useEffect, useState} from "react";
import { useQuery } from 'react-query';
import { AuthContext } from "../../providers/AuthProvider.jsx";
import { useContext } from "react";
import {Link} from "react-router-dom";
import { useMutation, useQueryClient } from 'react-query';
import { deleteJob } from '../../Hooks/deleteJob.jsx';
import Swal from "sweetalert2";


const MyJobs = () => {
    const queryClient = useQueryClient();

    const { user } = useContext(AuthContext);

    let id = 1;
    const { isLoading, isError, data: jobs, error } = useQuery(
        ['jobs', user.email], // Pass user.email as part of the query key
        () => fetchJobsUser(user.email) // Pass user.email as an argument
    );

    const mutation = useMutation((_id) => deleteJob(_id), {
        onSuccess: (data, _id) => {
            console.log(data);
            if (data.deletedCount > 0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Job has been deleted.",
                    icon: "success"
                });
                queryClient.invalidateQueries('jobs'); // Invalidate tours query to refetch updated data
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to delete Tour Spot.",
                    icon: "error"
                });
            }
        },
        onError: (error) => {
            console.error('Error deleting tour spot:', error);
            Swal.fire({
                title: "Error!",
                text: "Failed to delete Tour Spot.",
                icon: "error"
            });
        }
    });



    useEffect(() => {
        if (isError) {
            console.error(isError)
        }
    }, [isError]);

    if (isLoading){
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







    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                mutation.mutate(_id); // Call the mutation with _id
            }
        });
    };



    return (
        <div>
            <div className="mb-20">

                <div className="text-center p-4 mb-4 ">
                    <h1 className="font-bold text-4xl mb-4"> My Jobs</h1>
                    <h1 className="text-3xl">Jobs Those Are Created by You</h1>
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
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Action</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">


                        {
                            jobs.map(job => (
                                <tr key={job._id}>
                                    <td className="py-4 px-6 border-b border-gray-200">{id++}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">{job.title}</td>
                                    <td className="py-4 px-6 border-b border-gray-200 truncate">{job.pdate}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">{job.ddate}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">{job.salary} Tk</td>
                                    <td className="py-4 px-6 border-b border-gray-200 ">
                                        <Link to={`/jobDetails/${job._id}`}>
                                            <span className="bg-sky-500 hover:bg-sky-700 text-white py-1 px-2 rounded-full text-xs mr-2">
                                                Update
                                            </span>
                                        </Link>
                                            <span onClick={() => handleDelete(job._id)} className="bg-red-400 hover:bg-red-600 text-white py-1 px-2 rounded-full text-xs mr-2">
                                                Delete
                                            </span>

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

const fetchJobsUser = async (email) => { // Receive email as an argument
    const response = await fetch(`http://localhost:5000/mylist/${email}`); // Use email
    if (!response.ok) {
        throw new Error('Failed to fetch Jobs');
    }
    return response.json();
};


export default MyJobs;