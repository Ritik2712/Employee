import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUSers } from "../state/actions/UserActions";
import Modal from "./Modal";
import {
  FaAt,
  FaBriefcase,
  FaDollarSign,
  FaPencilAlt,
  FaPhone,
  FaRegCalendar,
  FaTrashAlt,
} from "react-icons/fa";
import { RiMedalLine } from "react-icons/ri";

const MyComponent = (props) => {
  const NAVIGATE = useNavigate();
  const DISPATCH = useDispatch();
  const users = useSelector((state) => state.user);
  console.log("users", users);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://653686dbbb226bb85dd244f8.mockapi.io/employee",
    }).then((res) => {
      DISPATCH(setUSers(res.data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [index, setIndex] = useState(-1);
  return (
    <div className="container mx-auto p-10 bg-[#212529]">
      <div className="flex flex-wrap justify-center gap-10">
        {users.map((item, index) => {
          return (
            <div className=" background rounded-lg border  shadow-md bg-gray-800 border-gray-700 min-w-[420px]">
              <div className="flex flex-col items-center py-4">
                <div className="w-full flex justify-end px-4">
                  <p className="flex items-center text-gray-400">
                    <span
                      className={`${
                        item.status === "active" ? "bg-green-500" : "bg-red-500"
                      } inline-block w-3 h-3 rounded-full mr-2`}
                    ></span>
                    {item.status}
                  </p>
                </div>
                <img
                  className="mb-3 w-24 h-24 rounded-full shadow-lg"
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Employee"
                />
                <h3 className="mb-1 text-xl font-medium text-white">
                  {item.name}
                </h3>
                <p className="text-md text-gray-500">{item.designation}</p>
                <div className="p-5 grid grid-rows-3 grid-flow-col gap-4 mt-3 auto-rows-max text-gray-500 text-sm">
                  <div className="w-full  flex flex-row justify-center gap-3 place-items-center">
                    <FaAt />
                    <span className="flex-1">{item.email}</span>
                  </div>
                  <div className="w-full  flex flex-row justify-center gap-3 place-items-center">
                    <FaPhone />
                    <span className="flex-1">{item.mobile}</span>
                  </div>
                  <div className="w-full  flex flex-row justify-center gap-3 place-items-center">
                    <FaRegCalendar />
                    <span className="flex-1">{item.date_of_joining}</span>
                  </div>
                  <div className="w-full  flex flex-row justify-center gap-3 place-items-center">
                    <RiMedalLine />
                    <span className="flex-1">emp_{item.id}</span>
                  </div>
                  <div className="w-full  flex flex-row justify-center gap-3 place-items-center">
                    <FaBriefcase />
                    <span className="flex-1">{item.department}</span>
                  </div>
                  <div className="w-full  flex flex-row justify-center gap-3 place-items-center">
                    <FaDollarSign />
                    <span className="flex-1">{item.salary}</span>
                  </div>
                </div>
                <div className="flex mt-4 space-x-3 mb-5">
                  <button
                    onClick={() => NAVIGATE("/edit/" + item.id)}
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-400  border  border-gray-300 rounded-lg hover:border-orange-700 hover:text-orange-700"
                  >
                    <FaPencilAlt className="mx-2" />
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setIndex(index);
                    }}
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-400  rounded-lg border border-gray-300 hover:border-red-400 hover:text-red-400 "
                  >
                    <FaTrashAlt className="mx-2" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {index >= 0 ? (
          <Modal
            index={index}
            employee={users[index]}
            close={() => setIndex(-1)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MyComponent;
