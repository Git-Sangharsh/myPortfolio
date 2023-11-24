import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-left">
          <Link to="content" spy={true} smooth={true} duration={2000}>
            <img src={logo} className="logo" alt="" />
          </Link>
        </div>
        <div className="nav-right">
          {/* <h1 className="headers">Skills</h1> */}
          <Link to="do" spy={true} smooth={true} duration={1000}>
            <h1 className="headers">About</h1>
          </Link>
          <Link to="skills" spy={true} smooth={true} duration={1000}>
            <h1 className="headers">Project</h1>
          </Link>
          <Link to="Contact" spy={true} smooth={true} duration={1000}>
            <h1 className="headers border">Contact</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
