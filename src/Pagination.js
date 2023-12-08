import React from "react";

const Pagination = ({
  totalUsers,
  userPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
    pages.push(i);
  }

  // const prevPage = () => {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const nextPage = () => {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {pages.map((page, index) => {
        return (
          // <button type="button" class="btn btn-light">Light</button>
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`btn btn-light me-1 my-2  ${
              page == currentPage ? "bg-warning text-dark" : ""
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
