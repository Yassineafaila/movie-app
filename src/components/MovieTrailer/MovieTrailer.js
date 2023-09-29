import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { fetchMovieDetails } from "../../services/api_user";
import Footer from "../Footer/Footer";
function MovieTrailer() {
  const [movieTrailer, setMovieTrailer] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const opts = {
    height: "100%",
    width: "100%",
    padding: "1rem",
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
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
      const trailer = movieTrailer.videos.results[1]; // Assuming you want the first trailer
      return <YouTube videoId={trailer.key} className="iframe" opts={opts} />;
    } else {
      return <p>No trailer available</p>;
    }
  };
  return (
    <>
      <main className="hero-trailer container mx-auto position-relative">
        <button className="close" onClick={() => navigate("/")}>
          Close
        </button>
        {renderTrailer()}
      </main>
    </>
  );
}

export default MovieTrailer;
