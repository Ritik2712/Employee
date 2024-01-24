import { Input } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImages } from "../state/actions/ImageActions";
import axios from "axios";

const Searchbar = async () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const searchImage = () => {
    axios
      .get(
        `https://pixabay.com/api/?key=33083899-1dcf775f0e9ace6580c8b41e1&q=${search}&image_type=photo&pretty=true`
      )
      .then((res) => {
        console.log(res.data);
        dispatch(setImages(res.data.hits));
      });
  };

  return (
    <div className="search-box">
      <>
        <Input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search Text"
        />
        <button
          onClick={searchImage}
          className="px-3 py-1 mx-2  bg-blue-500 hover:bg-blue-400 search-button"
        >
          Search
        </button>
      </>
    </div>
  );
};

export default Searchbar;
