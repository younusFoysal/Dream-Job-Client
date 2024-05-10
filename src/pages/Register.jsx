import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config.js';
import { useAddUserToDB } from '../Hooks/useAddUserToDB.jsx';

const createUser = async ({ email, password, name, photoUrl }) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, {
            displayName: name,
            photoURL: photoUrl
        });
        return userCredential.user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const Register = () => {

    const addUserToDBMutation = useAddUserToDB();

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');

    const mutation = useMutation(createUser, {
        onSuccess: () => {
            toast('User Created.');
            setSuccess('User Created.');
            navigate('/');
        },
        onError: error => {
            console.error(error);
            setRegisterError(error.message);
        }
    });

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password');
        const user = { email, createAt: new Date().toISOString(), name, photoUrl }; // Adjust createAt to your needs


        // reset error
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters long.');
            toast('Password should be at least 6 characters long.');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should contain at least 1 uppercase character.');
            toast('Your password should contain at least 1 uppercase character.');
            return;
        } else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should contain at least 1 lowercase character.');
            toast('Your password should contain at least 1 lowercase character.');
            return;
        }

        // call mutation
        mutation.mutate({ email, password, name, photoUrl });

        addUserToDBMutation.mutate(user, {
            onSuccess: (data) => {
                if (data.insertedId) {
                    console.log('User Added in DB.');
                    toast('User Created')
                }
            },
        });
    };

    return (
        <div>
            <div className="max-w-3xl mx-auto text-center mt-16">
                <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                    <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-700 to-sky-400">
                        Register Now
                    </span>
                    <span className="absolute bottom-0 left-20 w-full mx-auto max-w-xl h-1 bg-gradient-to-r from-blue-700 to-sky-400"></span>
                </h1>
                <p className="text-lg text-gray-800 mb-8">Become A Part of Dream Job. <br /> The Business Community for Professionals!</p>
            </div>

            <section className="bg-white">
                <div className="w-full mx-auto max-w-xl flex flex-col justify-center mb-16 py-4 relative p-8">
                    <form onSubmit={handleRegister} className="w-full divide-neutral-200 rounded-3xl bg-white shadow-2xl border p-8 lg:p-10">
                        <div className="shadow rounded-lg">
                            <div className="flex items-center bg-sky-400 rounded-t-lg border-sky-500 border-b">
                                <label htmlFor="name" className="w-20 text-right mr-8 p-4 text-sky-100">Name</label>
                                <input type="text" name="name" id="name" placeholder="Your Name" className="flex-1 p-4 pl-0 bg-transparent placeholder-sky-300 outline-none text-white overflow-ellipsis overflow-hidden" required />
                            </div>
                            <div className="flex items-center bg-sky-400 border-sky-500 border-b">
                                <label htmlFor="name" className="w-20 text-right mr-8 p-4 text-sky-100">Email</label>
                                <input type="email" name="email" id="name" placeholder="Your Email" className="flex-1 p-4 pl-0 bg-transparent placeholder-sky-300 outline-none text-white overflow-ellipsis overflow-hidden" required />
                            </div>
                            <div className="flex items-center bg-sky-400 border-sky-500 border-b">
                                <label htmlFor="name" className="w-20 text-right mr-8 p-4 text-sky-100">Photo</label>
                                <input type="url" name="photoUrl" id="name" placeholder="Your Photo URL" className="flex-1 p-4 pl-0 bg-transparent placeholder-sky-300 outline-none text-white overflow-ellipsis overflow-hidden" required />
                            </div>
                            <div className="flex items-center bg-sky-400 rounded-b-lg border-sky-500 mb-10">
                                <label htmlFor="twitter" className="w-20 text-right p-4 mr-8 text-sky-100">Password</label>
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Your Password" required className="flex-1 p-4 pl-0 bg-transparent placeholder-sky-300 outline-none text-white overflow-ellipsis overflow-hidden" />
                                <span className="absolute top-62 right-24 text-white text-xl" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
                                </span>
                            </div>
                        </div>
                        <button className="bg-sky-500 hover:bg-sky-700 block w-full rounded py-4 text-white font-bold shadow">Register</button>
                        <p className="mt-6 text-xl text-gray-600 text-center">
                            Already have an account? <Link to="/login"><span className="text-sky-600 font-bold hover:text-sky-700">Login Now!</span></Link>
                        </p>
                    </form>
                </div>
            </section>

            <ToastContainer />
        </div>
    );
};

export default Register;
