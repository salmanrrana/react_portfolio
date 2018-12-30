import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="top">
      <div className="header-part">
        <Link to="/projects" className="siteLink">
          <h3>Projects</h3>
        </Link>
        <Link to="/resume" className="siteLink">
          <h3>Resume</h3>
        </Link>
        <Link to="/contact" className="siteLink">
          <h3>Contact</h3>
        </Link>
      </div>
      <div className="homeName">
        <Link to="/" className="siteLink">
          <h1>Salman R Rana</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
