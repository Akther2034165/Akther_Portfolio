import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">Nowshad</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#service">Service</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#testimonial">Testimonial</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
