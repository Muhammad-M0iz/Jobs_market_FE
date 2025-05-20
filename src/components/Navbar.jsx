import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo.png";
import "../components/Navbar.css";

const Navbar = () => {
  const LinkClass = ({ isActive }) =>
    isActive ? "navbar-link navbar-link-active" : "navbar-link";

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-row">
            <div className="navbar-main">
              {/* Logo */}
              <NavLink className="navbar-logo" to="/">
                <img className="navbar-logo-img" src={logo} alt="React Jobs" />
                <span className="navbar-title">React Jobs</span>
              </NavLink>
              <div className="navbar-links-container">
                <div className="navbar-links">
                  <NavLink to="/" className={LinkClass}>
                    Home
                  </NavLink>
                  <NavLink to="/jobs" className={LinkClass}>
                    Jobs
                  </NavLink>
                  <NavLink to="/add-job" className={LinkClass}>
                    Add Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
