import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { NavbAr } from "./components/Navbar/navbar";
import MovieDetails from "./components/MovieInformation/MovieDetails";
import MovieTrailer from "./components/MovieTrailer/MovieTrailer";
import ActorsDetails from "./components/ActorInformation/ActorsDetails";
import { useState } from "react";
import MovieList from "./components/MovieList/MovieList";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Signin/Signin";
import Modal from "./components/Modal/Modal";
function App() {
  const [movies, setMovies] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen ? "true" : "false");
  return (
    <div className="App text-white">
      <NavbAr
        setMovies={setMovies}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}>
          <Route path="/movies" element={<Movies />}>
            <Route index element={<MovieList filterBy="all" />} />
            <Route
              path="genre/:id/:genreName"
              element={<MovieList filterBy="genre" />}
            />
            <Route
              path="search/:movieName"
              element={<MovieList filterBy="search" searchMovie={movies} />}
            />
          </Route>
        </Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
        <Route path="/movie/:id/videos" element={<MovieTrailer />}></Route>
        <Route path="/actors/:id" element={<ActorsDetails />}></Route>
      </Routes>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <Signin />
        </Modal>
      )}
      <Footer />
    </div>
  );
}

export default App;
