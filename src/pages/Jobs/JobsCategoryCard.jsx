
import {FaBriefcase} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../providers/AuthProvider.jsx";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const JobsCategoryCard = ({job}) => {

    const { user } = useContext(AuthContext);

    const {title, category, _id, jobURL, salary, details, ddate, appNum, pdate, name, email} = job


    const checkUser = () => {
        if (!user){
            toast('You have to log in first to view details');
        }
    }

    return (
        <div>

            <div className="relative flex flex-col justify-center overflow-hidden  py-6 sm:py-12">
                <div className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 bg-gray-50 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="absolute top-10 z-0 h-10 w-10 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[20]"></span>
                    <div className="relative z-10 mx-auto max-w-md ">
                                    <span className="grid h-10 w-10 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                        <FaBriefcase></FaBriefcase>
                                    </span>
                        <div className="space-y-6 pt-4 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">

                            <p className="font-bold text-xl heading">{title}</p>

                        </div>

                        <div className="badge badge-accent my-4 bg-sky-500 text-white">Posted by : {name}</div>


                        <section
                            className="mb-2 border bg-neutral-100 p-4 rounded-lg max-w-full bg-neutral-100">
                            <div className="mx-auto">
                                <div className="card md:flex max-w-lg">

                                    <div className="flex-grow text-center md:text-left">

                                        <p className="mt-2 mb-3">
                                            <span className="font-semibold">Job Posting Date: </span>
                                            {pdate}
                                        </p>
                                        <p className="mt-2 mb-3">
                                            <span className="font-semibold">Application Deadline: </span>
                                            {ddate}

                                        </p>
                                        <p className="mt-2 mb-3">
                                            <span className="font-semibold">Salary range: </span>
                                            {salary} tk
                                        </p>
                                        <p className="mt-2 mb-3">
                                            <span className="font-semibold">Job Applicants: </span>
                                            {appNum}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="pt-5 text-base font-semibold leading-7">
                            <p>
                                <Link to={`/jobDetails/${_id}`} onClick={checkUser} className=" btn text-sky-500 transition-all duration-300 group-hover:text-white">
                                    View Details
                                    &rarr;
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default JobsCategoryCard;