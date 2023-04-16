import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
const NavPage = () => {
  return (
    <div>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand>
            <a>DT.</a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Tour</Nav.Link>
              <Nav.Link href="#link">Destinations</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
              <Nav.Link href="#link">Signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavPage;
