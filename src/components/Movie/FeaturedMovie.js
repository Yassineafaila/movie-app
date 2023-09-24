import React, { useEffect, useState } from "react";
import { IMG_URL, IMG_URL_BACKGROUND } from "../../services/apiUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// import { fetchMovieDetail } from "../services/api_user";

function FeaturedMovie({ movie }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0, duration: 1 }}
        transition={{ duration: 1 }}
        exit={{
          opacity: 0,
          x: 800,
        }}
        className="movie-card d-flex align-items-center px-5"
        style={{
          backgroundImage: `url(${IMG_URL_BACKGROUND}${movie.backdrop_path})`,
          backgroundColor: "rgba(0,0,0,0.4)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, translateY: -500, duration: 1 }}
          className="movie-detail ms-5"
        >
          <Link
            to={`/movie/${movie.id}/`}
            className={"hero-title text-white mb-2"}
          >
            {movie.title}
          </Link>
          <span className={"date d-block text-white mb-2"}>
            {movie.release_date}
          </span>
          <div>
            <p className="overview">{movie.overview ? movie.overview : null}</p>
          </div>
          <div className="buttons d-flex align-items-center justify-content-between">
            <Link className="movie-now d-flex align-items-center justify-content-center text-white my-4 rounded-pill py-2 px-3">
              Watch Now
            </Link>
            <Link
              to={`movie/${movie.id}/videos`}
              className="movie-trailer d-flex align-items-center bg-white text-black my-4 rounded-pill py-1 px-3"
            >
              Watch Trailer{" "}
              <FontAwesomeIcon icon={faCirclePlay} className="m-2 text-black" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default FeaturedMovie;
