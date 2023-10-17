import { Outlet } from "react-router-dom";
import Navbar from "../SharedPage/Navbar";
import Footer from "../SharedPage/Footer";

const MainRoot = () => {
    return (
        <div className=" font-serif">
            <div className="container mx-auto">
                <Navbar></Navbar>


            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div className="container mx-auto">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainRoot;