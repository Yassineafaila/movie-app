import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "react-loading-skeleton/dist/skeleton.css";
import "@splidejs/react-splide/css";
import {
  fetchCastOfMovie,
  fetchMovieDetails,
  fetchRecommendation,
  fetchSimilarMovies,
} from "../../services/api_user";
import { IMG_URL_BACKGROUND } from "../../services/apiUrl";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import MovieCard from "../MovieCard/MovieCard";
import CastSkeleton from "./CastSkeleton";
function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [MovieDetail, setMovieDetail] = useState([]);
  const [Cast, setCast] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const splideOption = {
    type: "slide",
    // rewind: true,
    // width: 100%,
    gap: "1rem",
    padding: "1rem",
    perPage: 6,
    pagination: false,
    height: 300,
    rewindByDrag: true,
    breakpoints: {
      1440: {
        perPage: 5,
      },
      1024: {
        perPage: 4,
      },
      992: {
        perPage: 3,
      },
      768: {
        perPage: 3,
        gap: "3rem",
      },
      640: {
        perPage: 3,
        gap: "0.3rem",
      },
      425: {
        perPage: 2,
        gap: "0.2rem",
      },
      375: {
        perPage: 1,
        gap: "0.1em",
      },
    },
    focus: "center",
  };
  useEffect(() => {
    const MovieD = async () => {
      const { data } = await fetchMovieDetails(id);
      setMovieDetail(data);
    };
    const Cast = async () => {
      const { data } = await fetchCastOfMovie(id);
      setCast(data);
    };
    const Recommendation = async () => {
      const {
        data: { results },
      } = await fetchRecommendation(id);
      setRecommendation(results);
    };
    const SimilarMovies = async () => {
      const {
        data: { results },
      } = await fetchSimilarMovies(id);
      setSimilarMovies(results);
    };
    MovieD();
    Cast();
    Recommendation();
    SimilarMovies();
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [id]);
  const renderCategory = () => {
    return MovieDetail.genres.map((genre) => {
      return (
        <Link
          to="/movies"
          className="text-white fw-medium mx-2 "
          id="hover"
          key={genre.id}
        >
          {genre.name}
        </Link>
      );
    });
  };
  const renderCast = () => {
    const topCast = Cast.cast.slice(0, 6);
    return topCast.slice(0, 6).map((person, i) => {
      return (
        <div
          className="d-flex align-items-center  flex-column"
          key={i}
          onClick={() => navigate(`/actors/${person.id}`)}
        >
          <div
            className="profile"
            key={person.id}
            style={{
              backgroundImage: `url(${IMG_URL_BACKGROUND}${person.profile_path})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <h4 className="profile-title fw-bold mt-2">{person.name}</h4>
          <span className="mt-2 fw-medium" >{person.character}</span>
        </div>
      );
    });
  };

  const renderRecommendation = () => {
    return recommendation.map((movie) => {
      return (
        <SplideSlide key={movie.id}>
          {<MovieCard movie={movie} key={movie.id} />}
        </SplideSlide>
      );
    });
  };
  const renderSimilarMovies = () => {
    return similarMovies.map((movie) => {
      return (
        <SplideSlide key={movie.id}>
          {<MovieCard movie={movie} key={movie.id} />}
        </SplideSlide>
      );
    });
  };
  return (
    <>
      <main className="movie-details container mx-auto px-3">
        <section
          className="details d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `url(${IMG_URL_BACKGROUND}${MovieDetail.backdrop_path})`,
            backgroundColor: "rgba(0,0,0,0.4)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="movie-info d-flex align-items-center justify-content-center flex-column">
            <div className="d-flex gap-2 mb-3">
              <span className="text-white fw-medium">
                {MovieDetail.release_date}
              </span>
              <span className="text-white fw-medium border-2 "></span>
              <span className="text-white fw-medium">
                IMDB :
                <span className="fw-bold">{MovieDetail.vote_average}</span>
              </span>
              <span className="text-white fw-medium mx-2">
                {MovieDetail.runtime} min
              </span>
            </div>
            <h2 className="fw-bolder title mb-3">{MovieDetail.title}</h2>
            <div className="movie-category text-white d-flex align-items-center justify-content-center text-white flex-wrap">
              {MovieDetail.length !== 0 && renderCategory()}
            </div>
          </div>
        </section>
        <section className="overview mt-5 mb-3">
          <h3 className="fw-medium">Overview</h3>
          <div className="text-white mt-4 mb-3">{MovieDetail.overview}</div>
          <Link
            to={`/movie/${MovieDetail.id}/videos`}
            className="bg-white text-black fw-semibold my-4 py-2 px-3 button"
          >
            Watch Trailer
          </Link>
        </section>
        {/* ---movie-top-cast--- */}
        <section className="movie-cast d-flex flex-column mt-5 mb-3  gap-2">
          <h3 className="mt-2 mb-2">Top Cast</h3>
          <div className="d-flex flex-wrap mt-4 gap-5 align-items-center justify-content-center justify-content-lg-start justify-content-md-start">
            {isLoading ? <CastSkeleton cards={6} /> : renderCast()}
          </div>
        </section>
        {/* --movie-recommendation-section-- */}
        <section className="movie-recommendation mt-5 mb-3">
          <h3 className="mt-2 mb-2">Recommendation</h3>
          <Splide
            options={splideOption}
            className="sliderDiv"
            hasTrack={false}
            aria-label="..."
          >
            <SplideTrack>
              {similarMovies.length !== 0
                ? renderSimilarMovies()
                : renderRecommendation()}
            </SplideTrack>

            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              <button className="splide__arrow splide__arrow--next">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </Splide>
        </section>
      </main>
    </>
  );
}

export default MovieDetails;
