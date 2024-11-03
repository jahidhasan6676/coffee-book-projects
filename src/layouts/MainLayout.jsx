import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>

            {/* dynamic section */}
            <div className="min-h-[calc(100vh-248px)] py-10">
                <Outlet></Outlet>

            </div>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;