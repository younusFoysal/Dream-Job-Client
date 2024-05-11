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



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
            }


        ]
    },
]);

export default router;