
import {Outlet} from "react-router-dom";
import Footer from "../pages/shared/Footer.jsx";
import NavBar from "../pages/shared/NavBar.jsx";
import "../index.css";
import { motion, useScroll } from "framer-motion";
import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../pages/Home/LoadingSpinner.jsx';

const Main = () => {
    const { scrollYProgress } = useScroll();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);


    return (
        <div>

            {loading ? (
                <LoadingSpinner />
            ) : (
                <div>
                    <motion.div
                        className="progress-bar"
                        style={{scaleX: scrollYProgress}}
                    />
                    <NavBar></NavBar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            )}


        </div>
    );
};

export default Main;