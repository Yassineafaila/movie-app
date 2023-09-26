import React, { Fragment, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPaginate from "react-paginate";
import Footer from "../components/Footer/Footer";
import { fetchAllMovies } from "../services/api_user";
import MovieItem from "../components/MovieItem/MovieItem";
import ItemSkeleton from "../components/MovieItem/ItemSkeleton";
function Movies() {
  const [Movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(100);
  console.log(currentPage)
  useEffect(() => {
    const fetchMovies = async () => {
      const {
        data: { results },
      } = await fetchAllMovies(currentPage);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      setMovies(results);
    };
    fetchMovies();
  }, [currentPage]);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
};
  return (
    <Fragment>
      <main className="container mx-auto px-3 my-4">
        {isLoading ? (
          <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
            <ItemSkeleton cards={20} />
          </div>
        ) : (
          <div className="row gap-3 gap-xl-4  row-cols-auto align-items-center justify-content-center">
            {Movies.map((movie) => (
              <AnimatePresence>
                <MovieItem key={movie.id} movie={movie} />
              </AnimatePresence>
            ))}
          </div>
        )}
        <ReactPaginate
          pageCount={totalPages}
          onPageChange={handlePageChange}
          forcePage={currentPage}
        />
      </main>
      <Footer />
    </Fragment>
  );
}

export default Movies;
