import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.user);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const results = users.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseQuery)
    );
    setSearchResults(results);
  };
  console.log(searchResults);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
    if (inputValue === "") {
      setSearchResults([]);
      return;
    }
    handleSearch(inputValue);
  };
  const navigateTo = (id) => {
    setSearchQuery("");
    setSearchResults([]);
    navigate("/edit/" + id);
  };
  return (
    <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Employee</h1>
        <div className="relative w-1/2">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleChange}
          />
          {searchResults.length ? (
            <div className="mt-2 absolute top-6 bg-white w-full z-20">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className="py-1 hover:bg-blue-500 hover:text-white px-4"
                  onClick={() => navigateTo(result.id)}
                >
                  {result.name} (ID: {result.id})
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <button
          onClick={() => navigate("/create")}
          className="focus:ring-4 focus:ring-primary-300 font-normal rounded-lg text-sm px-4 lg:px-5 py-2   text-orange-400 bg-transparent border  border-orange-500  hover:border-orange-700 hover:bg-orange-700 hover:text-white"
        >
          Add Employee
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
