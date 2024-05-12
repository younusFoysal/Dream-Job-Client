import { useMutation, useQuery, useQueryClient } from 'react-query';
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../providers/AuthProvider.jsx";
import Swal from "sweetalert2";
import moment from "moment/moment.js";
import { useParams } from 'react-router-dom';
import { updateJob } from "../../Hooks/updateJob.jsx"


const UpdateJobs = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { id } = useParams();

    const { data: jobs, isLoading } = useQuery(['job', id], () =>
        fetch(`https://dream-job-server-two.vercel.app/job/${id}`).then(res => res.json())
    );


    const mutation = useMutation(updatedJob => updateJob(id, updatedJob), {
        onSuccess: (data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Job Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                });
                queryClient.invalidateQueries(['job', id]); // Invalidate tour query to refetch updated data
                navigate('/myjobs');
            }
        },
        onError: (error) => {
            console.error('Error updating tour spot:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to update Tour Spot.',
                icon: 'error'
            });
        }
    });

    const handleUpdateJob = e => {
        e.preventDefault();

        const form = e.target;
        //const formData = new FormData(form);

        // const updatedJob = Object.fromEntries(formData.entries());


        const jobURL = form.jobURL.value;
        const title = form.title.value;
        const name = form.name.value;
        const email = form.email.value;
        const category = form.category.value;
        const salary = Number(form.salary.value);
        const details = form.details.value;
        const pdate = form.pdate.value;
        const ddate = form.ddate.value;
        const appNum = Number(form.appNum.value);

        const updatedJob = {
            jobURL,
            title,
            name,
            email,
            category,
            salary,
            details,
            pdate,
            ddate,
            appNum,
        };
        console.log(updatedJob);

        mutation.mutate(updatedJob); // Call the mutation with updatedJob data
    };

    if (isLoading) {
        return (
            <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
                <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                    {/* SVG for loading animation */}
                </svg>
                <span className="text-4xl font-medium text-gray-500">Loading...</span>
            </div>
        );
    }




    return (
        <div>

            <div className="flex justify-center items-center  dark:bg-gray-900">
                <div className="grid gap-8 w-1/2">
                    <div id="back-div"
                         className="shadow-xl bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4 mb-10">
                        <div
                            className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">

                            <div
                                className="pb-6 font-bold dark:text-gray-400 text-4xl text-center cursor-default group text-blue-400 transition-all duration-100 ease-in-out">
                                    <span
                                        className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                        Update The Job
                                    </span>
                            </div>


                            <div className="flex items-center justify-center p-4 ">

                                <div className="mx-auto w-full max-w-[550px] bg-white">
                                    <form onSubmit={handleUpdateJob}>

                                        <div className="mb-5">
                                            <label htmlFor="jobURL"
                                                   className="mb-3 block text-base font-medium text-[#07074D]">
                                                Picture URL
                                            </label>
                                            <input
                                                type="url"
                                                name="jobURL"
                                                id="jobURL"
                                                defaultValue={jobs.jobURL}
                                                placeholder="Picture URL of the Job Banner"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                required
                                            />
                                        </div>

                                        <div className="mb-5">
                                            <label htmlFor="title"
                                                   className="mb-3 block text-base font-medium text-[#07074D]">
                                                Job Title
                                            </label>
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                defaultValue={jobs.title}
                                                placeholder="Job Title"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                required
                                            />
                                        </div>

                                        <div className="mb-5">
                                            <label htmlFor="name"
                                                   className="mb-3 block text-base font-medium text-[#07074D]">
                                                User Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="USER NAME"
                                                defaultValue={user.displayName}
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>

                                        <div className="mb-5">
                                            <label htmlFor="email"
                                                   className="mb-3 block text-base font-medium text-[#07074D]">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="USER EMAIL"
                                                defaultValue={user.email}
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>

                                        <div className="mb-5">
                                            <label htmlFor="category"
                                                   className="mb-3 block text-base font-medium text-[#07074D]">
                                                Email
                                            </label>
                                            <select
                                                name="category"
                                                id="category"
                                                defaultValue={jobs.category}
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                required
                                            >
                                                <option value="onSite">On Site</option>
                                                <option value="remote">Remote</option>
                                                <option value="partTime">Part-Time</option>
                                                <option value="hybrid">Hybrid</option>
                                            </select>
                                        </div>


                                        <div className="mb-5">
                                            <label htmlFor="salary"
                                                   className="mb-3 block text-base font-medium text-[#07074D]">
                                                Salary range
                                            </label>
                                            <input
                                                type="number"
                                                name="salary"
                                                id="salary"
                                                defaultValue={jobs.salary}
                                                placeholder="Salary range. Ex: 50000"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                required
                                            />
                                        </div>


                                        <div className="mb-5">
                                            <label htmlFor="details"
                                                   className="mb-3 block text-base font-medium text-[#07074D]">
                                                Job Description
                                            </label>
                                            <input
                                                type="text"
                                                name="details"
                                                defaultValue={jobs.details}
                                                id="details"
                                                placeholder="Job Description"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                required
                                            />
                                        </div>

                                        <div className="-mx-3 flex flex-wrap">
                                            <div className="w-full px-3 ">
                                                <div className="mb-5">
                                                    <label htmlFor="pdate"
                                                           className="mb-3 block text-base font-medium text-[#07074D]">
                                                        Job Posting Date
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="pdate"
                                                        id="pdate"
                                                        defaultValue={moment().format('L')}
                                                        placeholder={moment().format('L')}
                                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="-mx-3 flex flex-wrap">
                                            <div className="w-full px-3 ">
                                                <div className="mb-5">
                                                    <label htmlFor="ddate"
                                                           className="mb-3 block text-base font-medium text-[#07074D]">
                                                        Application Deadline
                                                    </label>
                                                    <input
                                                        type="date"
                                                        name="ddate"
                                                        id="ddate"
                                                        defaultValue={jobs.ddate}
                                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <input
                                            type="number"
                                            name="appNum"
                                            defaultValue={jobs.appNum}
                                            hidden
                                        />


                                        <div>
                                            <button
                                                className="btn hover:shadow-xl hover:bg-sky-600 hover:font-bold w-full rounded-md bg-sky-400 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                                Update Job
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UpdateJobs;