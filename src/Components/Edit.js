import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Edit = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState("Human Resource");
  const [designation, setDesignation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const designations = {
    // object of disgnation acc to department
    Marketing: ["senior", "associate"],
    Sales: ["manager", "Team lead"],
    "Human Resource": ["Executive", "Trainee", "Assistant"],
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "https://653686dbbb226bb85dd244f8.mockapi.io/employee/" + id,
    }).then((res) => {
      setDate(res.data.date_of_joining);
      setName(res.data.name);
      setEmail(res.data.email);
      setDepartment(res.data.department);
      setDesignation(res.data.designation);
      setMobile(res.data.mobile);
      setSalary(res.data.salary);
      setStatus(res.data.status);
    });
  }, [id]);

  const NAVIGATE = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: "https://653686dbbb226bb85dd244f8.mockapi.io/employee/" + id,
      data: {
        name,
        email,
        mobile,
        salary,
        status,
        date_of_joining: date,
        department,
        designation,
      },
    })
      .then((res) => {
        console.log(res.data);
        NAVIGATE("/");
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <div className="bg-[#212529] w-screen h-screen py-3">
      <div className="w-full lg:w-10/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-black mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                New Employee Details
              </h6>
              <button
                onClick={submit}
                className="lg:px-5 py-2  focus:ring-4 focus:ring-primary-300  font-normal rounded-lg text-sm px-4    text-white bg-orange-700  border  border-orange-700  hover:border-orange-700 hover:bg-transparent hover:text-orange-500"
              >
                Edit Employee
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-primary-black">
            <form>
              <div className="flex flex-wrap text-white">
                <div className="w-full lg:w-6/12 px-4 mt-3">
                  <div className="mb-6">
                    <label
                      for="name"
                      className="block mb-2 text-md font-medium"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                      placeholder="Enter full name..."
                      required=""
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4 mt-3 ">
                  <div className="mb-6">
                    <label
                      for="email"
                      className="block mb-2 text-md font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                      placeholder="Enter full name..."
                      required=""
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4 mt-3 ">
                  <div className="mb-6">
                    <label
                      for="mobile"
                      className="block mb-2 text-md font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                      placeholder="Enter full name..."
                      required=""
                      value={mobile}
                      onChange={(e) => {
                        setMobile(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4 mt-3 ">
                  <div className="mb-6">
                    <label
                      for="date"
                      className="block mb-2 text-md font-medium"
                    >
                      Date of joining
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                      placeholder="Enter full name..."
                      required=""
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4 mt-3 ">
                  <div className="mb-6">
                    <label
                      for="department"
                      className="block mb-2 text-md font-medium"
                    >
                      Department
                    </label>
                    <select
                      name="department"
                      id="department"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                      required=""
                      value={department}
                      onChange={(e) => {
                        setDepartment(e.target.value);
                      }}
                    >
                      <option
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:bg-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value="Marketing"
                      >
                        Marketing
                      </option>
                      <option
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:bg-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value="Sales"
                      >
                        Sales
                      </option>
                      <option
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:bg-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value="Human Resource"
                        selected
                      >
                        Human Resource
                      </option>
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4 mt-3 ">
                  <div className="mb-6">
                    <label
                      for="designation"
                      className="block mb-2 text-md font-medium"
                    >
                      Designation
                    </label>
                    <select
                      name="designation"
                      id="designation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                      required=""
                      value={designation}
                      onChange={(e) => {
                        setDesignation(e.target.value);
                      }}
                    >
                      {designations[department]?.map((item, index) => {
                        return (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4 mt-3 ">
                  <div className="mb-6">
                    <label
                      for="salary"
                      className="block mb-2 text-md font-medium"
                    >
                      Salary
                    </label>
                    <input
                      type="text"
                      name="salary"
                      id="salary"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                      placeholder="Enter full name..."
                      required=""
                      value={salary}
                      onChange={(e) => {
                        setSalary(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4 mt-3 ">
                  <h3 className="block mb-2 text-md font-medium">Status</h3>
                  <div className="flex">
                    <div className="flex items-center mr-4 h-[40px]">
                      <input
                        className="w-4 h-4 lue-600  focus:ring-blue-500 "
                        id="status"
                        type="radio"
                        name="inline-radio-group"
                        value="active"
                        onClick={(e) => {
                          setStatus(e.target.value);
                        }}
                      />
                      <label
                        for="inline-radio"
                        className="ml-2 text-sm font-medium "
                      >
                        Active
                      </label>
                    </div>
                    <div className="flex items-center mr-4 h-[40px]">
                      <input
                        className="w-4 h-4 lue-600  focus:ring-blue-500 "
                        id="status"
                        type="radio"
                        name="inline-radio-group"
                        value="inactive"
                        onClick={(e) => {
                          setStatus(e.target.value);
                        }}
                      />
                      <label
                        for="inline-radio"
                        className="ml-2 text-sm font-medium "
                      >
                        Inactive
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
