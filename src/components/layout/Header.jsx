import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
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
              <i className="fa-solid fa-gauge"></i>
              <h5>Dashboard</h5>
            </a>
            <a href="/profile" className="nav-link">
              <i className="fa-solid fa-user"></i>
              <h5>Profile</h5>
            </a>
            <a href="/Register" className="nav-link">
              <i className="fa-solid fa-user-pen"></i>
              <h5>Register</h5>
            </a>
            <a href="/Logout" className="nav-link">
              <i class="fa fa-sign-out"></i>
              <h5>Logout</h5>
            </a>
            <a href="/Login" className="nav-link">
              <i className="fa-solid fa-right-from-bracket"></i>
              <h5>Login</h5>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
