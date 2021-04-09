import React from "react";
import "./navbar.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container">
        <p className="navbar-brand">Sun Tracker</p>
        <button
          className="navbar-toggler float-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbar9"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbar9">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <p className="nav-link">Wattage</p>
            </li>
            <li className="nav-item">
              <p className="nav-link">Current</p>
            </li>
            <li className="nav-item">
              <p className="nav-link">Voltage</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
