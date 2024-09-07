import React from 'react';

const Filters = ({ priceRange, setPriceRange, popularityRange, setPopularityRange }) => {
  const handlePriceChange = (e) => {
    const value = e.target.value.split('-').map(Number);
    setPriceRange(value);
  };

  const handlePopularityChange = (e) => {
    const value = e.target.value.split('-').map(Number);
    setPopularityRange(value);
  };

  return (
    <div className="filters">
      <div>
        <label className='price-range'>Price Range:</label>
        <select onChange={handlePriceChange}>
          <option value="0-Infinity">All</option>
          <option value="0-5000">0-5000</option>
          <option value="5000-10000">5000-10000</option>
          <option value="10000-20000">10000-20000</option>
          <option value="20000-Infinity">20000+</option>
        </select>
      </div>
      <div>
        <label className='popularity-range'>Popularity Range:</label>
        <select onChange={handlePopularityChange}>
          <option value="0-Infinity">All</option>
          <option value="0-10000">0-10000</option>
          <option value="10000-30000">10000-30000</option>
          <option value="30000-50000">30000-50000</option>
          <option value="50000-Infinity">50000+</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
