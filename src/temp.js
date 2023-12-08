{
  /*
    // <nav aria-label="Page navigation example">
    //   <ul class="pagination">
    //     <li class="page-item">
    //       <a
    //         class="page-link"
    //         href="#"
    //         aria-label="Previous"
    //         onClick={prevPage}
    //       >
    //         <span aria-hidden="true">&laquo;</span>
    //       </a>
    //     </li>
    //     {pages.map((page, index) => {
    //       return (
    //         <li class="page-item">
    //           <a
    //             className={`page-link  ${
    //               page == currentPage ? "active" : ""
    //             }`}
    //             href="#"
    //             onClick={() => setCurrentPage(page)}
    //           >
    //             {page}
    //           </a>
    //         </li>

 

    //     <li class="page-item">
    //       <a class="page-link" href="#" aria-label="Next" onClick={nextPage}>
    //         <span aria-hidden="true">&raquo;</span>
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  */
}

{
  /* {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`me-1 my-2  ${
              page == currentPage ? "bg-warning text-dark" : ""
            }`}
          >
            {page}
          </button>
        );
      })} */

  <nav
    //   className="d-flex flex-wrap justify-content-center"
    aria-label=" Page navigation example"
  >
    {/* <div className="d-flex flex-wrap justify-content-center"> */}
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" onClick={prevPage}>
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      {pages.map((page, index) => {
        return (
          <li class="page-item">
            <a
              className={`page-link  ${page == currentPage ? "active" : ""}`}
              href="#"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </a>
          </li>
        );
      })}

      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next" onClick={nextPage}>
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
    {/* </div> */}
  </nav>;
}

// filter

{
  people
    .filter((person) => person.age < 60)
    .map((filteredPerson) => <li>{filteredPerson.name}</li>);
}
