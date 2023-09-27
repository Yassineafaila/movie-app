import React, { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Footer from "../components/Footer/Footer";
import { fetchAllMovies } from "../services/api_user";
import MovieItem from "../components/MovieItem/MovieItem";
import ItemSkeleton from "../components/MovieItem/ItemSkeleton";
import Pagination from "../components/Pagination/Pagination";
function Movies({searchMovie}) {
  const [Movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(200);
  useEffect(() => {
    const fetchMovies = async () => {
      const {
        data: { results },
      } = await fetchAllMovies(currentPage);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setMovies(results);
    };
    fetchMovies();
  }, [currentPage]);
console.log(searchMovie)
  return (
    <Fragment>
      <main className="container mx-auto px-3 my-4">
        {searchMovie ? (
          <div className="row gap-3 gap-xl-4  row-cols-auto align-items-center justify-content-center">
            {searchMovie.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        ) : isLoading ? (
          <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
            <ItemSkeleton cards={20} />
          </div>
        ) : (
          <>
            <div className="row gap-3 gap-xl-4  row-cols-auto align-items-center justify-content-center">
              {Movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
              ))}
            </div>
            <Pagination
              setCurrentPage={setCurrentPage}
              setIsLoading={setIsLoading}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </>
        )}
      </main>
      <Footer />
    </Fragment>
  );
}

export default Movies;
