import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ setCurrentPage, setIsLoading, currentPage, totalPages }) {
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);

    setIsLoading(true);
  };
  return (
    <div className="container mx-auto d-flex align-items-center justify-content-center mt-3 pt-3">
      <ReactPaginate
        key={crypto.randomUUID()}
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        previousLabel={"<"}
        nextLabel={">"}
        containerClassName={"pagination pagination-lg pagination-container"}
        pageClassName={"page-item"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        activeClassName={"active-page"}
        marginPagesDisplayed={"1"}
        activeLinkClassName={"active"}
      />
    </div>
  );
}

export default Pagination;
