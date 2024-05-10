
import {Outlet} from "react-router-dom";
import Footer from "../pages/shared/Footer.jsx";
import NavBar from "../pages/shared/NavBar.jsx";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;