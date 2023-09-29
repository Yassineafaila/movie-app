import React from "react";
import { useNavigate } from "react-router-dom";
import { IMG_URL_POSTER } from "../../services/apiUrl";
import { motion, AnimatePresence } from "framer-motion";
function MovieCard({ movie }) {
  const navigate = useNavigate();
  const selectedMovie = (movie) => {
    navigate(`/movie/${movie.id}`);
  };
  return (
    <AnimatePresence>
      <motion.div
        onClick={() => selectedMovie(movie)}
        initial={{ opacity: 0, x: -500, delay: 1.5 }}
        animate={{ opacity: 1, x: 0, duration: 1.4 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, x: 800 }}
        className="movie-card position-relative mx-2 "
        style={{
          backgroundImage: `url(${IMG_URL_POSTER}${movie.poster_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <h4 className="text-center">{movie.title}</h4>
        <div className="overlay"></div>
      </motion.div>
    </AnimatePresence>
  );
}

export default MovieCard;
