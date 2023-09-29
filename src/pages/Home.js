import React, { useEffect, useState } from "react";
import {
  fetchComingMovies,
  fetchPopularMovies,
  fetchTopMovies,
  fetchUpComingMovies,
} from "../services/api_user";
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie";
import BtnSlider from "../components/BtnSlider/BtnSlider";
import MovieCard from "../components/MovieCard//MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import FeaturedSkeleton from "../components/FeaturedMovie/FeaturedSkeleton";
function Home() {
  const [currentSelection, setCurrentSelection] = useState([]);
  const [mostPopularMovies, setMostPopularMovies] = useState([]);
  const [highestRatedMovies, setHighestRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    fetchComingMovies(setCurrentSelection);
    fetchPopularMovies(setMostPopularMovies);
    fetchTopMovies(setHighestRatedMovies);
    fetchUpComingMovies(setUpcomingMovies);
  }, []);

  const splideOption = {
    type: "slide",
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
  const renderComingMovies = () => {
    if (currentSelection.length === 0) {
      return <FeaturedSkeleton />;
    } else {
      return (
        <FeaturedMovie
          movie={currentSelection[slideIndex]}
          key={currentSelection[slideIndex].id}
        />
      );
    }
  };
  const renderPopluarMovies = () => (
    <Splide
      options={splideOption}
      className="sliderDiv"
      hasTrack={false}
      aria-label="..."
    >
      <SplideTrack>
        {mostPopularMovies.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              {<MovieCard movie={movie} key={movie.id} />}
            </SplideSlide>
          );
        })}
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
  );

  const renderTopMovies = () => (
    <Splide
      options={splideOption}
      className="sliderDiv"
      hasTrack={false}
      aria-label="..."
    >
      <SplideTrack>
        {highestRatedMovies.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              {<MovieCard movie={movie} key={movie.id} />}
            </SplideSlide>
          );
        })}
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
  );
  const renderUpComingMovies = () => (
    <Splide
      options={splideOption}
      className="sliderDiv"
      hasTrack={false}
      aria-label="..."
    >
      <SplideTrack>
        {upcomingMovies.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              {<MovieCard movie={movie} key={movie.id} />}
            </SplideSlide>
          );
        })}
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
  );
    
  return (
    <>
      <main className="container mx-auto px-3">
        <section className="hero position-relative">
          {renderComingMovies()}
        </section>
        <section className="popular-movies position-relative mt-4 p-2 p-lg-4">
          <div className="d-flex align-items-center  mb-5 gap-2">
            <h2 className="popular-title position-relative">Popular Movies</h2>
            <div className="line"></div>
          </div>
          {renderPopluarMovies()}
        </section>
        <section className="top-movies position-relative mt-4 p-2 p-lg-4">
          <div className="d-flex align-items-center  mb-5 gap-2">
            <h2 className="top-title position-relative">Top Movies</h2>
            <div className="line"></div>
          </div>
          {renderTopMovies()}
        </section>
        <section className="up-movies position-relative mt-4 p-2 p-lg-4">
          <div className="d-flex align-items-center  mb-5 gap-2">
            <h2 className="up-title position-relative">Up Coming Movies</h2>
            <div className="line"></div>
          </div>
          {renderUpComingMovies()}
        </section>
      </main>
    </>
  );
}

export default Home;
