import React from "react";
import logo from "../../images/top-banner.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <img className="w-25 p-5" src={logo} alt="" />
      </div>

      <p>Copyright © 2021 || Creative Solft Skills</p>
    </div>
  );
};

export default Footer;
