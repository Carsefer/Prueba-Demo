import React from "react";
import Style from "./Paginate.module.css";
export const Paginate = ({
  currentPage,
  setCurrentPage,
  paginate,
  totalPages,
}) => {
  const pageNumbers = [];
  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i + 1);
  }
  function prevPage() {
    setCurrentPage(currentPage - 1);
  }
  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div
      className={`${Style.container} container d-flex flex-wrap justify-content-center`}
    >
      <ul className="pagination">
        <li className="page-item">
          {" "}
          <button
            className="page-link"
            disabled={currentPage <= 1}
            onClick={prevPage}
          >
            Previous
          </button>
        </li>
      </ul>

      {pageNumbers?.map((e) => {
        return (
          <div key={e + 1}>
            <ul className="pagination">
              <li
                className={e === currentPage ? "page-item active" : "page-item"}
              >
                <button
                  className="page-link"
                  key={e}
                  onClick={() => paginate(e)}
                >
                  {e}
                </button>
              </li>
            </ul>
          </div>
        );
      })}
      <ul className="pagination">
        <li className="page-item">
          {" "}
          <button
            className="page-link"
            disabled={currentPage >= totalPages}
            onClick={nextPage}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};
