import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center max-w-screen-xl mx-auto p-5">
      <img className="h-16" src="/Logo.png" alt="" />
      <div>
        <div
          className="md:hidden text-2xl hover:text-[#FF444A]"
          onClick={() => setOpen(!open)}
        >
          {open === true ? (
            <AiOutlineClose></AiOutlineClose>
          ) : (
            <AiOutlineMenu></AiOutlineMenu>
          )}
        </div>
        <ul
          className={`text-xl text-right flex flex-col md:flex-row justify-between  gap-3 md:gap-5 absolute md:static duration-1000 ${
            open
              ? "top-20 right-10 p-2 shadow-lg rounded-bl-lg"
              : "-top-32 right-10"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#FF444A] underline"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#FF444A] underline"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#FF444A] underline"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
