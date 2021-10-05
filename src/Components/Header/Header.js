
import React from "react";
import image from "../../images/top-banner.png";
import {
  Container,
  Nav,
  Navbar,
  Stack,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navStyle = {
    textDecoration: "none",
    color: "#4c39b5",
    font: "montserrat",
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <Navbar bg="light" fixed="top">
      <Container>
        <div className="banner-margin ms-5">
          <img className=" img-fluid banner" src={image} alt="banner" />
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-5 my-lg-0 me-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Stack direction="horizontal" gap={5}>
              <NavLink style={navStyle} to="/home">
                Home
              </NavLink>
              <NavLink style={navStyle} to="/courses">
                Courses
              </NavLink>

              <NavLink style={navStyle} to="/about">
                About Us
              </NavLink>
              <NavLink style={navStyle} to="/contact">
                Contact Us
              </NavLink>
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
