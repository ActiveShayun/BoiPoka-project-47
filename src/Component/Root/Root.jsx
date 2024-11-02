import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Nabber/Navbar";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">  
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;