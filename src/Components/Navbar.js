import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
      <div className="flex items-center justify-end">
        <button
          onClick={() => navigate("/create")}
          className="focus:ring-4 focus:ring-primary-300 font-normal rounded-lg text-sm px-4 lg:px-5 py-2   text-orange-400 bg-transparent border  border-orange-500  hover:border-orange-700 hover:bg-orange-700 hover:text-white"
        >
          {" "}
          Add Employee
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
