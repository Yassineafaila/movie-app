import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
 import Button from "react-bootstrap/Button";
 import Container from "react-bootstrap/Container";
 import Form from "react-bootstrap/Form";
 import Nav from "react-bootstrap/Nav";
 import Navbar from "react-bootstrap/Navbar";
 import NavDropdown from "react-bootstrap/NavDropdown";
function NavbAr() {
  return (
    <Navbar expand="lg" className="navbar bg-body-tertiary py-4 px-4">
      <Container fluid>
        <Navbar.Brand href="/" className="text-white logo">
          CineWave
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 py-1 px-3"
              aria-label="Search"
            />
            <Button className="btn-search py-1 px-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export {NavbAr};