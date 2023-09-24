import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto px-5 py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
