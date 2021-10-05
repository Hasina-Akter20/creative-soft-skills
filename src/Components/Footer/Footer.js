import React from "react";
import { Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/top-banner.png";
import pay from "../../images/payment.png";
import "./Footer.css";

const Footer = () => {
  const footStyle = {
    textDecoration: "none",
    color: "white",
    font: "montserrat",
    fontSize: "15px",
    textAlign: "left",
  };
  return (
    <div className="footer">
      <div className="d-flex footer-container">
        <div className="footer-left">
          <div className="footer-info">
            <img className="w-100 footer-img" src={logo} alt="" />
          </div>
          <p className="footer-text">
            Learners around the world are launching new careers, advancing in
            their fields, and enriching their lives.
          </p>
          <p className="footer-text">+8801889504530</p>
        </div>
        <div className="footer-center">
          <Stack direction="vertical" gap={2}>
            <NavLink style={footStyle} to="/home">
              Home
            </NavLink>
            <NavLink style={footStyle} to="/courses">
              Courses
            </NavLink>

            <NavLink style={footStyle} to="/about">
              About Us
            </NavLink>
            <NavLink style={footStyle} to="/contact">
              Contact Us
            </NavLink>
          </Stack>
        </div>
        <div className="payment">
          <img src={pay} alt="" />
        </div>
      </div>

      <p className="copy-right">Copyright © 2021 || Creative Solft Skills</p>
    </div>
  );
};

export default Footer;
