import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import AddJob from "../pages/Jobs/AddJob.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import AllJobs from "../pages/Jobs/AllJobs.jsx";
import BlogDetails from "../pages/Blogs/BlogDetails.jsx";
import MyJobs from "../pages/Jobs/MyJobs.jsx";
import UpdateJobs from "../pages/Jobs/UpdateJobs.jsx";
import JobDetails from "../pages/Jobs/JobDetails.jsx";
import AppliedJobs from "../pages/Jobs/AppliedJobs.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import Profile from "../pages/Profile.jsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/addjob",
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: "/jobs",
                element: <AllJobs></AllJobs>
            },
            {
                path: "/blogs",
                element: <BlogDetails></BlogDetails>
            },
            {
                path: "/myjobs",
                element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
            },
            {
                path: "/updateJobs/:id",
                element: <PrivateRoute><UpdateJobs></UpdateJobs></PrivateRoute>
            },
            {
                path: "/jobDetails/:id",
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>
            },
            {
                path: '/appliedjobs',
                element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }


        ]
    },
]);

export default router;