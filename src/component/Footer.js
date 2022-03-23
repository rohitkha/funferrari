import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer"></div>
      <div className="footer-block">
        <ul className="nav nav-justified">
          <li className="nav-item">
            <NavLink
              className="link-secondary"
              style={{ display: "flex" }}
              to="/home"
            >
              <span className="material-icons">home</span>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="link-secondary"
              style={{ display: "flex" }}
              to="/transactions"
            >
              <span className="material-icons">money</span>
              Transaction
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="link-secondary"
              style={{ display: "flex" }}
              to="/help"
            >
              <span className="material-icons">help</span>
              Support
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="link-secondary"
              style={{ display: "flex" }}
              to="/learn"
            >
              <span className="material-icons">school</span>
              Learn
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
