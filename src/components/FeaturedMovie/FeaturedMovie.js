import React from "react";
import { IMG_URL_BACKGROUND } from "../../services/apiUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function FeaturedMovie({movie}) {

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
        className="container py-3 py-lg-0"
      >
        <div className="img-container">
          <img src={`${IMG_URL_BACKGROUND}${movie.backdrop_path}`} alt="MovieImage"></img>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, translateY: -500, duration: 1 }}
          className="content"
        >
          <h2 className="title">{movie.title}</h2>
          <p className="overview">{movie.overview}</p>
          <div className="callToAction">
            <Link
              to={`movie/${movie.id}/videos`}
              className="trailer-btn button"
            >
              {" "}
              <FontAwesomeIcon icon={faCirclePlay} />
              Watch Trailer
            </Link>
            <Link to={`movie/${movie.id}`} className="btn-more button">
              More Info <FontAwesomeIcon icon={faAnglesRight} />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default FeaturedMovie;
