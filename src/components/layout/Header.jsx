import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Layout = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home" className="text-warning fw-bolder">
          Budget Planner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-4">
            <a href="/Dashboard" className="nav-link">
              <i className="fa-solid fa-gauge"></i>Dashboard
            </a>
            <a href="/profile" className="nav-link">
              <i className="fa-solid fa-user"></i>Profile
            </a>
            <a href="/Login" className="nav-link">
              <i className="fa-solid fa-user-pen"></i>Register
            </a>
            <a href="/Logout" className="nav-link">
              <i className="fa-solid fa-right-from-bracket"></i>Logout
            </a>
            <a href="/Login" className="nav-link">
              <i className="fa-solid fa-left-from-bracket"></i>Login
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
