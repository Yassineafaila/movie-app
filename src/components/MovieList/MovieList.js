import React, { useState, useEffect } from "react";
import MovieItem from "../MovieItem/MovieItem";
import ItemSkeleton from "../MovieItem/ItemSkeleton";
import Pagination from "../Pagination/Pagination";
import {
  fetchAllMovies,
  fetchMoviesByGenres,
  fetchMoviesBySearch,
} from "../../services/api_user";
import { useParams } from "react-router-dom";
function MovieList({ filterBy }) {
  const [movies, setMovies] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0); // Initialize totalPages to 0

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        let response;
        if (filterBy === "genre") {
          response = await fetchMoviesByGenres(currentPage, params.id);
        } else if (filterBy === "search") {
          response = await fetchMoviesBySearch(params.movieName);
        } else {
          response = await fetchAllMovies(currentPage);
        }

        const { data } = response;

        setMovies(data.results);

        setCurrentPage(data.page);
        setTotalPages(data.total_pages);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filterBy, currentPage, params]);
  return (
    <main className="container mx-auto px-3 my-4">
      <div>
        {filterBy === "genre" ? (
          <h3 className="mt-2 mb-5 text-capitalize mx-auto">
            {filterBy} : {params.genreName}
          </h3>
        ) : filterBy === "search" ? (
          <h3 className="mt-2 mb-5 text-capitalize mx-auto">
            Search results for "{params.movieName}"
          </h3>
        ) : (
          <h3 className="mt-2 mb-5 text-capitalize mx-auto">{filterBy}</h3>
        )}
      </div>
      <div className="d-flex  flex-column">
        {isLoading ? (
          <div className="d-flex  flex-wrap gap-2">
            <ItemSkeleton cards={20} />
          </div>
        ) : (
          <>
            <div className="row gap-3 gap-xl-6 justify-content-center justify-content-md-start justify-content-lg-start row-cols-auto ">
              {movies.map((movie) => (
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
      </div>
    </main>
  );
}

export default MovieList;
