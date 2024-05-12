import React, {useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {AuthContext} from "../../providers/AuthProvider.jsx";
import {useMutation, useQuery, useQueryClient} from "react-query";
import Swal from "sweetalert2";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment/moment.js";



const JobDetails = () => {


    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { id } = useParams();


    const addaJobMutation = useMutation({
        mutationFn: async (newaJob) => {
            const response = await fetch('http://localhost:5000/ajobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newaJob),
            });
            return response.json();
        },
        onSuccess: (data) => {
            if (data.insertedId) {
                toast("Application Submitted Successfully");
            }
        },
    });

    const handleAddaJob = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const newaJob = Object.fromEntries(formData.entries());
        console.log(newaJob)
        toast("Application Submitted Successfully")


        // const jobURL = form.jobURL.value;
        // const title = form.title.value;
        // const name = form.name.value;
        // const email = form.email.value;
        // const category = form.category.value;
        // const salary = Number(form.salary.value);
        // const details = form.details.value;
        // const pdate = form.pdate.value;
        // const ddate = form.ddate.value;
        // const appNum = form.appNum.value;
        //
        // const newJob = {
        //     jobURL,
        //     title,
        //     name,
        //     email,
        //     category,
        //     salary,
        //     details,
        //     pdate,
        //     ddate,
        //     appNum,
        // };

        try {
            await addaJobMutation.mutateAsync(newaJob);
            form.reset();
        } catch (error) {
            console.error('An error occurred while adding job:', error);
        }

    }





    const { data: jobs, isLoading, isError } = useQuery(['job', id], () =>
        fetch(`http://localhost:5000/job/${id}`).then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch job details');
            }
            return res.json();
        })
    );


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !jobs) {
        return <div>Error: Failed to fetch job details</div>;
    }





    return (
        <div>

            <section className="text-gray-700 body-font">
                <div className="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
                    <div
                        className=" lg:flex-grow md:w-1/3 lg:pr-4 md:pr-6 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-sky-600">
                            {jobs.title}
                        </h1>
                        <p><span className="font-semibold">Posted by:</span> {jobs.name}</p>
                        <p><span className="font-semibold">Job Category:</span> {jobs.category}</p>
                        <p><span className="font-semibold">Salary range:</span> {jobs.salary}</p>
                        <p><span className="font-semibold">Post Date:</span> {jobs.pdate}</p>
                        <p><span className="font-semibold">Deadline:</span> {jobs.ddate}</p>

                        <p><span className="font-semibold">Number of Applicants:</span> {jobs.appNum}</p>


                        <p className="mt-4 pt-2"><span className="font-semibold">Description:</span></p>
                        <p className="mb-8 leading-relaxed">

                            {jobs.details}
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="inline-flex font-bold text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 hover:shadow-xl rounded text-lg"
                                onClick={
                                    () => {
                                        const currentDate = new Date();

                                        const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;


                                        if (user.email === jobs.email) {
                                            toast("Employer can not apply for his job.")
                                        }else if (new Date(jobs.ddate) < currentDate) {
                                            toast("Deadline is over for this job.")
                                        }else {
                                            document.getElementById('my_modal_5').showModal()
                                        }
                                    }
                                // () => document.getElementById('my_modal_5').showModal()
                            }
                            >
                                Apply Now
                            </button>


                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">


                                <div className="modal-box">

                                    <h3 className="font-bold text-lg text-center">Applying for the Job</h3>

                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
                                        </form>


                                    </div>


                                    {/* Apply form */}
                                    <form onSubmit={handleAddaJob} className="w-full">
                                        <label htmlFor="name" className="sr-only">Your Name</label>
                                        <input
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            defaultValue={user.displayName}
                                            required
                                            className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                            placeholder={user.displayName}
                                            value={user.displayName}
                                        />

                                        <label htmlFor="email" className="sr-only">Email address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            defaultValue={user.email}
                                            required
                                            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                            placeholder={user.email}
                                            value={user.email}
                                        />

                                        <label htmlFor="password" className="sr-only">Resume</label>
                                        <input
                                            name="resume"
                                            type="url"
                                            autoComplete="url"
                                            required
                                            className="mt-2 mb-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                            placeholder="Resume PDF Link URL"
                                        />

                                        {/* Hidden form */}

                                        <input
                                            type="text"
                                            defaultValue={jobs._id}
                                            name="ajid"
                                            hidden
                                        />
                                        <input
                                            type="text"
                                            defaultValue={jobs.title}
                                            name="title"
                                            hidden

                                        />
                                        <input
                                            type="text"
                                            defaultValue={jobs.pdate}
                                            name="pdate"
                                            hidden

                                        />
                                        <input
                                            type="text"
                                            defaultValue={jobs.ddate}
                                            name="ddate"
                                            hidden

                                        />
                                        <input
                                            type="number"
                                            defaultValue={jobs.salary}
                                            name="salary"
                                            hidden

                                        />
                                        <input
                                            type="text"
                                            defaultValue={jobs.category}
                                            name="category"
                                            hidden

                                        />
                                        <input
                                            type="text"
                                            defaultValue={moment().format('L')}
                                            name="sdate"
                                            hidden

                                        />


                                        <button
                                            type="submit"
                                            className="inline-flex w-full items-center font-semibold justify-center rounded-lg bg-sky-700 hover:bg-sky-900 p-2 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">
                                            Submit Application
                                        </button>
                                    </form>

                                </div>
                            </dialog>


                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded border-4 border-sky-400 shadow-xl" alt="hero"
                             src={jobs.jobURL}
                        />
                    </div>


                </div>
            </section>


            <ToastContainer />
        </div>
    );
};

export default JobDetails;