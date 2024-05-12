import React, { useRef } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { useJobs, useAppliedJobs } from '../../Hooks/useAppliedJobs.jsx';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import { AuthContext } from "../../providers/AuthProvider.jsx";
import { useContext } from "react";
import {Link} from "react-router-dom";
import { useMutation, useQueryClient } from 'react-query';
import { deleteJob } from '../../Hooks/deleteJob.jsx';
import Swal from "sweetalert2";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';






const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    table: {
        width: '100%',
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableHeaderCell: {
        backgroundColor: '#4299e1',
        color: '#fff',
        padding: 8,
    },
    tableCell: {
        padding: 8,
    },
});



const AppliedJobs = () => {

    const summaryRef = useRef();
    const [downloadStatus, setDownloadStatus] = useState({ loading: false, error: null });


    const queryClient = new QueryClient();
    const { user } = useContext(AuthContext);

    let id = 1;
    const { isLoading, isError, data: jobs, error } = useQuery(
        ['jobs', user.email], // Pass user.email as part of the query key
        () => fetchJobsUser(user.email) // Pass user.email as an argument
    );
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const [filter, setFilter] = useState('');
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };
    const filteredJobs = filter
        ? jobs.filter(job => job.category === filter)
        : jobs;


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

    //console.log(jobs)

    //const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchQuery.toLowerCase()));

    const handleDownloadSummary = () => {
        setDownloadStatus({ loading: true, error: null });

        if (summaryRef.current) {
            summaryRef.current.updateContainer();
            summaryRef.current.toPdf().then(() => {
                setDownloadStatus({ loading: false, error: null });
            }).catch(error => {
                setDownloadStatus({ loading: false, error: error.message });
            });
        }
    };




    return (
        <div>
            <div>
                <div className="mb-20">

                    <div className="text-center p-4 mb-4 ">
                        <h1 className="font-bold text-4xl mb-4"> All Applied Jobs</h1>
                        <h1 className="text-3xl">Didn't find job that you were looking for? Try Filter by Category</h1>
                    </div>

                    <div className="flex items-center justify-center">

                        <div className="w-1/4 mr-2 mb-4">
                            <select value={filter} onChange={handleFilterChange}
                                    className="btn w-full hover:bg-sky-400">
                                <option value="">All Categories</option>
                                <option value="onSite">On Site</option>
                                <option value="remote">Remote</option>
                                <option value="hybrid">Hybrid</option>
                                <option value="partTime">Part Time</option>
                                {/* Add more options based on your actual categories */}
                            </select>
                        </div>

                        <div className="w-1/4 ml-2 ">
                            <div className="btn bg-sky-300 mb-4 w-full mx-auto text-center">

                                <PDFDownloadLink document={<AppliedJobDocument filteredJobs={filteredJobs}/>}
                                                 fileName="applied_jobs.pdf">
                                    {({blob, url, loading, error}) =>
                                        loading ? 'Loading document...' : 'Download Summary'
                                    }
                                </PDFDownloadLink>

                            </div>

                        </div>

                    </div>

                    <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                        <table className="w-full table-fixed">
                            <thead>
                            <tr className="bg-sky-100">
                                <th className="w-3 py-4 px-6 text-left text-gray-600 font-bold uppercase">Id</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Job Title
                                </th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Job
                                    Category
                                </th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Applied
                                    Date
                                </th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Salary
                                    range
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
                                        <td className="py-4 px-6 border-b border-gray-200 truncate">{job.category}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">{job.sdate}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">{job.salary} Tk</td>
                                        <td className="py-4 px-6 border-b border-gray-200 ">
                                            <Link to={`/jobDetails/${job.ajid}`}>
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

        </div>
    );
};

const AppliedJobDocument = ({filteredJobs}) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Applied Jobs</Text>
                <View style={styles.table}>
                    <View style={[styles.tableRow, styles.tableHeaderRow]}>
                    <Text style={styles.tableHeaderCell}>Id</Text>
                        <Text style={styles.tableHeaderCell}>Job Title</Text>
                        <Text style={styles.tableHeaderCell}>Job Category</Text>
                        <Text style={styles.tableHeaderCell}>Applied Date</Text>
                        <Text style={styles.tableHeaderCell}>Salary Range</Text>
                        <Text style={styles.tableHeaderCell}>Details</Text>
                    </View>
                    {filteredJobs.map((job, index) => (
                        <View key={job._id} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{index + 1}</Text>
                            <Text style={styles.tableCell}>{job.title}</Text>
                            <Text style={styles.tableCell}>{job.category}</Text>
                            <Text style={styles.tableCell}>{job.sdate}</Text>
                            <Text style={styles.tableCell}>{job.salary} Tk</Text>
                            <Text style={styles.tableCell}>
                                <Text>Details</Text>
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        </Page>
    </Document>
);

const fetchJobsUser = async (email) => { // Receive email as an argument
    const response = await fetch(`https://dream-job-server-two.vercel.app/myajobs/${email}`, {credentials: "include"}); // Use email
    if (!response.ok) {
        throw new Error('Failed to fetch Jobs');
    }
    return response.json();
};


export default AppliedJobs;