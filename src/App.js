import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import  {NavbAr}  from "./components/Navbar/navbar";
import Contact from "./pages/Contact";
import MovieDetails from "./pages/MovieDetails";
import MovieTrailer from "./pages/MovieTrailer";
import ActorsDetails from "./pages/ActorsDetails";

function App() {
  return (
    <div className="App text-white">
      <NavbAr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
        <Route path="/movie/:id/videos" element={<MovieTrailer />}></Route>
        <Route path="/actors/:id" element={<ActorsDetails />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
