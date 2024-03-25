import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);
  const [isActive, setIsActive] = useState("/"); // Use boolean for active state

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <span className="red">Saurabh</span>&nbsp; Sahani
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/" className={isActive === "/" ? "active" : ""} onClick={() => setIsActive("/")}>
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/about" onClick={() => setIsActive("/about")} className={isActive === "/about" ? "active" : ""}>
              About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/project" onClick={() => setIsActive("/project")} className={isActive === "/project" ? "active" : ""}>
              Projects
            </Nav.Link>
          </Nav.Item>

          {/* <Nav.Item>
            <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
              Resume
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
