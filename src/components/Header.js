import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Home
      </Link>
      <div className="right menu" />
      <Link to="/projects" className="item">
        Projects
      </Link>
      <Link to="/contact" className="item">
        Contact
      </Link>
      <Link to="/resume" className="item">
        Resume
      </Link>
    </div>
  );
};

export default Header;
