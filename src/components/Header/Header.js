import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-part">
      <div>
        <Link to="/" className="ui inverted basic violet button">
          Home
        </Link>
        <div className="right menu" />
        <Link to="/projects" className="ui inverted basic blue button">
          Projects
        </Link>
        <Link to="/contact" className="ui inverted basic blue button">
          Contact
        </Link>
        <Link to="/resume" className="ui inverted basic  blue button">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Header;
