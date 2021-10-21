import React from "react";
import Product from "../Product";
import Search from "../Utilities/Search"

const SearchResults = ({results}) => {
  

  return (
    <div>
      <h2>Search Results</h2>
      <section>
        {results.map((result) => {
          const { item } = result;
          return <Product item={item} />;
        })}
      </section>
    </div>
  );
};

export default SearchResults;
