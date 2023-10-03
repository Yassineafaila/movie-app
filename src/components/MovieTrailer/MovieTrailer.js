import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { fetchMovieDetails } from "../../services/api_user";

function MovieTrailer() {
  const [movieTrailer, setMovieTrailer] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const opts = {
    height: "100%",
    width: "100%",
    padding: "1rem",
    playerVars: {
      autoplay: 1,
    },
  };
  const cancelHandler = () => {
    navigate(`/`);
  };
  useEffect(() => {
    const selectMovie = async () => {
      const { data: data } = await fetchMovieDetails(id);
      if (data) {
        setMovieTrailer(data);
      }
    };
    selectMovie();
  }, [id]);
  const renderTrailer = () => {
    if (movieTrailer && movieTrailer.videos && movieTrailer.videos.results) {
      const trailer = movieTrailer.videos.results[1]; 
      return <YouTube videoId={trailer.key} className="iframe" opts={opts} />;
    } else {
      return <p>No trailer available</p>;
    }
  };
  return (
    <>
      <main className="hero-trailer container mx-auto position-relative my-4">
        <button
          onClick={cancelHandler}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "0px",
            width: "30px",
            height: "30px",
          }}
        >
          X
        </button>
        {renderTrailer()}
      </main>
    </>
  );
}

export default MovieTrailer;
