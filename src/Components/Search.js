import React, { useState } from "react";
import { products } from "./data";
import searchIcon from "./Icons/search.svg";
// import { Link } from "react-router-dom";
// import Product from "./Product";

export const Search = () => {
  const [userSearchInput, setUserSearchInput] = useState("");
  const [startSearch, setStartSearch] = useState(false);

  const openSearchBar = () => {
    if (startSearch) {
      setStartSearch(false);
    } 
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("test");
    if (userSearchInput) {  
      const userSearch = userSearchInput;
      const search = products.filter(
        (x) =>
          x.item === userSearch ||
          x.collection === userSearch ||
          x.type === userSearch
      );
      if (search.length !== 0) {
        console.log(search);
      } else {
        console.log(search, "No results for this search");
      }
    }
    setUserSearchInput("");
  };
  return (
    <div className="searchbar">
      <form className="flex" onSubmit={handleSearch} >
        <input
          type="text"
          name="userSearch"
          placeholder="Search our collections..."
          value={userSearchInput}
          onChange={(e) => setUserSearchInput(e.target.value)}
        ></input>
        <button type="submit" onClick={openSearchBar}>
          <img src={searchIcon} alt="search"></img>
        </button>
      </form>
    </div>
  );
};

export const SearchResults = () => {
  return (
    <div className="page">
      <h2>Search Results</h2>
      <section>yikes</section>
    </div>
  );
};
