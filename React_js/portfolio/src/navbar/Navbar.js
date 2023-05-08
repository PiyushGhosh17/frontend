import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-title">PIYUSH</div>
        <div className="navbar-routes">
          <ul>
            <li className="routes">
              <Link to="/">Home</Link>
            </li>
            <li className="routes">
              <Link to="/projects">Project</Link>
            </li>
            <li className="routes">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Navbar;
