import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MyComponent from "./Components/MyComponent";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/Searchbar";

// Define your components for each page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </Router>
  );
}

export default App;
