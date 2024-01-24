import React, { useState } from "react";

const data = [
  { name: "ritik", id: 1 },
  { name: "john", id: 2 },
  { name: "mary", id: 3 },
  // Add more objects as needed
];

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseQuery)
    );
    setSearchResults(results);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
    handleSearch(inputValue);
  };

  return (
    <div className="h-screen flex justify-between items-center py-10">
      <h1>hello</h1>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleChange}
        />
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              {result.name} (ID: {result.id})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
