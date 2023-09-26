import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  fetchDetailsActor,
  fetchImagesActor,
  fetchMovieActor,
} from "../../services/api_user";
import Footer from "../Footer/Footer";
import { IMG_URL_POSTER } from "../../services/apiUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "@splidejs/react-splide/css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import MovieCard from "../MovieCard/MovieCard";
function ActorsDetails() {
  const { id } = useParams();
  const [personDetail, setPersonDetail] = useState({});
  const [personMovies, setPersonMovies] = useState([]);
  const [personImages, setPersonImages] = useState([]);
  console.log(personDetail)
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
        gap:"1rem"
      },
      768: {
        perPage: 3,
        gap: "3rem",
      },
      640: {
        perPage: 3,
        gap: "0rem",
      },
      425: {
        perPage: 2,
        gap: "0.2rem",
      },
      375: {
        perPage: 1,
        gap: "0.1em",
        padding: "0 0 0 1em",
      },
    },
    focus: "center",
  };
  useEffect(() => {
    const DataActor = async () => {
      const { data } = await fetchDetailsActor(id);
      setPersonDetail(data);
    };
    const MovieActor = async () => {
      const { data } = await fetchMovieActor(id);
      setPersonMovies(data.cast);
    };
    const ImagesActor = async () => {
      const { data } = await fetchImagesActor(id);
      setPersonImages(data.profiles);
    };
    DataActor();
    MovieActor();
    ImagesActor();
  }, [id]);
  const renderDetailActor = () => {
    return (
      <div className="details d-flex align-items-start justify-content-between flex-column flex-lg-row gap-5">
        <img src={`${IMG_URL_POSTER}/${personDetail.profile_path}`}></img>
        <div>
          <h4 className="mt-lg-5 mt-3 mb-lg-4">{personDetail.name}</h4>
          <p className="mt-lg-1 mb-lg-3 my-2 fw-bold">
            Born :{" "}
            <span className="fw-medium text-white">
              {personDetail.birthday ? personDetail.birthday : <Skeleton />}
            </span>
          </p>
          <p className="mt-lg-1 mb-lg-3 my-2 fw-bold">
            Biography :{" "}
            <span className="fw-medium text-white">
              {personDetail.biography ? personDetail.biography : <Skeleton />}
            </span>
          </p>
          <Link to={`https://www.imdb.com/name/${personDetail.imdb_id}`}>
            IMDB
          </Link>
        </div>
      </div>
    );
  };
  const renderMovieActor = () => {
    // const cast = personDetail.cast ? personDetail.cast :null;
    return personMovies.map((movie) => {
      return (
        <SplideSlide key={movie.id}>
          {<MovieCard movie={movie} key={movie.id} />}
        </SplideSlide>
      );
    });
  };
  const renderImageActor = () => {
    return personImages.map((image) => {
      return (
        <SplideSlide key={image.id}>
          <img className="me-2 " src={`${IMG_URL_POSTER}${image.file_path}`} key={image.id} alt="profile"></img>
        </SplideSlide>
      );
    });
  };
  return (
    <>
      <main className="Actor px-4">
        <section className="Actor-details">
          {personDetail && renderDetailActor()}
        </section>
        <section className="Image-Actor mt-5 mb-5">
          <h3 className="fw-meduim">Photos</h3>
          <Splide
            options={splideOption}
            className="sliderDiv"
            hasTrack={false}
            aria-label="..."
          >
            <SplideTrack>
              {personImages.length !== 0
                ? renderImageActor()
                : renderImageActor()}
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
        <section className="Actor-movies mt-5 mb-5">
          <h3 className="fw-medium">Known For </h3>
          <Splide
            options={splideOption}
            className="sliderDiv"
            hasTrack={false}
            aria-label="..."
          >
            <SplideTrack>
              {personMovies.length !== 0
                ? renderMovieActor()
                : renderMovieActor()}
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
      <Footer />
    </>
  );
}

export default ActorsDetails;
