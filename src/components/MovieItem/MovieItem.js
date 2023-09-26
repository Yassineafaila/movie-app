import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { IMG_URL_POSTER } from "../../services/apiUrl";
function MovieItem({ movie }) {
  console.log(movie);
  return (
    <motion.div
      className="position-relative"
      style={{ width: "200px" }}
      id="movie-item"
      initial={{ y: -400, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ outlineColor: "#b7b5b5" }}
    >
      <Link
        to={`/movie/${movie.id}`}
        className="w-100 position-relative"
        style={{
          backgroundImage: `url(${IMG_URL_POSTER}${movie.poster_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          height: "350px",
          display: "block",
        }}
      ></Link>
      <span className="rate">
        {movie.vote_average > 7 ? (
          <>
            <FontAwesomeIcon
              icon={faStar}
              className="mx-1"
              style={{ backgroundColor: "#ffd34c", color: "#222" }}
            />
            {movie.vote_average}
          </>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faStarHalfStroke}
              className="mx-1"
              style={{ backgroundColor: "#ffd34c", color: "#222" }}
            />
            {movie.vote_average}
          </>
        )}
      </span>
          <h4        className="movie-title" style={{ fontSize: "0.875rem" }}>
        {movie.title}
      </h4>
    </motion.div>
  );
}

export default MovieItem;
