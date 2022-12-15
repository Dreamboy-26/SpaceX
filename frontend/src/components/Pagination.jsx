import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  console.log(pageNumbers);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <ul className="pagination">
      <li>
        <a className="page-item " onClick={prevPage}>Previous</a>
      </li>
      {pageNumbers.map((e) => {
        return (
          <li
            key={e}
            className={`page-item ${currentPage == e ? "active" : ""}`}
          >
            <a  className="page-item " onClick={() => setCurrentPage(e)}>{e}</a>
          </li>
        );
      })}
      <li>
        <a className="page-item" onClick={nextPage}>Next</a>
      </li>
    </ul>
  );
};

export default Pagination;
