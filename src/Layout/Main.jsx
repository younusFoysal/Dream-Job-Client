
import {Outlet} from "react-router-dom";
import Footer from "../pages/shared/Footer.jsx";
import NavBar from "../pages/shared/NavBar.jsx";
import "../index.css";
import { motion, useScroll } from "framer-motion";

const Main = () => {
    const { scrollYProgress } = useScroll();

    return (
        <div>
            <motion.div
                className="progress-bar"
                style={{scaleX: scrollYProgress}}
            />
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;