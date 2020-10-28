import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa3">
      <input
        className="pa3 ba b--red bg-white"
        type="search"
        placeholder="search demos"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
