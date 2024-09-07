import React, { useState } from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagesToShow = 4; // Number of pagination buttons to show

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + pagesToShow;
      setCurrentPage(nextPage <= totalPages ? nextPage : totalPages);
      paginate(nextPage <= totalPages ? nextPage : totalPages);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - pagesToShow;
      setCurrentPage(prevPage > 1 ? prevPage : 1);
      paginate(prevPage > 1 ? prevPage : 1);
    }
  };

  // Determine the range of pages to show
  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  return (
    <div className="pagination">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map(number => (
        <button
          key={number}
          onClick={() => handlePageClick(number)}
          className={number === currentPage ? 'active' : ''}
        >
          {number}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
