import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import FullNavbar from "react-bootstrap/Navbar";

function Navbar() {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }, []);

  return (
    <FullNavbar className="shadow" bg="white" variant="white" expand="md" sticky="top">
      <Container>
        <FullNavbar.Brand href="#home">
          <img
            src="./../assets/logos/black-logo.png"
            width="40"
            height="auto"
            alt="Logo"
          />
        </FullNavbar.Brand>
        <FullNavbar.Toggle aria-controls="basic-navbar-nav" />
        <FullNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-medium">
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#reflections">Reflections</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </FullNavbar.Collapse>
      </Container>
    </FullNavbar>
  );
}

export default Navbar;
