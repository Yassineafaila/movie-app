import React, { useEffect, useState } from "react";
import {
  fetchComingMovies,
  fetchPopularMovies,
  fetchTopMovies,
  fetchUpComingMovies,
} from "../services/api_user";
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie";
import MovieItem from "../components/MovieItem/MovieItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay"
import FeaturedSkeleton from "../components/FeaturedMovie/FeaturedSkeleton";
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
      gap: "1rem",
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

  const renderComingMovies = () => {
    // if (currentSelection.length === 0) {
    //   return <FeaturedSkeleton />;
    // } else {
    //   return (
    //     <FeaturedMovie
    //       movie={currentSelection}
    //       key={currentSelection}
    //     />
    //   );
    // }
    if (currentSelection.length === 0) {
      return <FeaturedSkeleton />;
    } else {
      currentSelection.map((movie) => {
        return (
          <SwiperSlide>
            <FeaturedMovie movie={movie} key={movie.id} />
          </SwiperSlide>
        );
      });
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
              {<MovieItem movie={movie} key={movie.id} />}
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
              {<MovieItem movie={movie} key={movie.id} />}
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
              {<MovieItem movie={movie} key={movie.id} />}
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
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
          >
            {currentSelection.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <FeaturedMovie movie={movie} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="overlay"></div>
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
