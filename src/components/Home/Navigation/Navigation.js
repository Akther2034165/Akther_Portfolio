import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">
            <i className="fas fa-code text-danger"></i> AKTHER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/home">
                <a href="#home">Home</a>
              </Link>
              <a href="#about">About</a>
              <a href="#project">Project</a>
              <a href="#testimonial">Testimonial</a>
              <a href="#contact">Contact</a>
              <Link to="/blog">Blog</Link>
              <a href="https://drive.google.com/file/d/1-U-i7emUvTF95RMEJAoSmvUzHpz0BSxt/view?usp=sharing">
                Download Resume
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
