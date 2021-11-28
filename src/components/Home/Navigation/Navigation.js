import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">Nowshad</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#service">Service</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#testimonial">Testimonial</a>
              <a href="#contact">Contact</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
