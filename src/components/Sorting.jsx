import React from "react";

const Sorting = ({ setSortBy }) => {
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="sorting">
      <label>Sort By:</label>
      <select onChange={handleSortChange}>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
        <option value="popularity-asc">Popularity (Low to High)</option>
        <option value="popularity-desc">Popularity (High to Low)</option>
      </select>
    </div>
  );
};

export default Sorting;
