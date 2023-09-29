import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { fetchMoviesBySearch, fetchAllGenres } from "../../services/api_user";
import { useLocation, useNavigate } from "react-router-dom";

function NavbAr({ setMovies }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [Genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchGenres = async () => {
      const {
        data: { genres },
      } = await fetchAllGenres();
      setGenres(genres);
    };
    fetchGenres();
  }, []);
  const [error, setError] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    if (search === "") {
      setError("The Search Cannot Be Empty To Start Searching");
    } else {
      const searchMovie = async () => {
        const {
          data: { results },
        } = await fetchMoviesBySearch(search);
        setMovies(results);
      };
      searchMovie();
      navigate(`movies/search/${search}`);
    }
  };
  return (
    <>
      <Navbar
        sticky="top"
        expand="lg"
        className="navbar bg-body-tertiary py-4 px-4"
      >
        <Container className="mx-auto">
          <Navbar.Brand href="/" className="text-white logo">
            CineWave
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              activeKey={location.pathname}
              navbarScroll
            >
              <Nav.Link href="/" className="text-white px-lg-3 my-3 fw-medium">
                Home
              </Nav.Link>
              <Nav.Link
                href="/movies"
                className="text-white px-lg-3 my-3 fw-medium"
              >
                Movies
              </Nav.Link>
              <NavDropdown
                className="text-white px-lg-3 my-3 fw-medium"
                title="Genre"
                id="navbarScrollingDropdown"
              >
                <div className="row row-cols-4">
                  {Genres.map((genre) => {
                    return (
                      <NavDropdown.Item
                        href={`/movies/genre/${genre.id}/${genre.name}`}
                        key={genre.id}
                      >
                        {genre.name}
                      </NavDropdown.Item>
                    );
                  })}
                </div>

                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link
                href="/contact-us"
                className="text-white px-lg-3 my-3 fw-medium"
              >
                Contact Us
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="text-white px-lg-3 my-3 fw-medium"
              >
                Sign in
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchHandler}>
              <Form.Control
                value={search}
                type="search"
                placeholder="Search"
                className="me-2 py-1 px-3"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button className="btn-search py-1 px-2" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export { NavbAr };
