import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
    <div className="footer"></div>
      <div className="footer-block">
        <ul className="nav nav-justified">
          <li className="nav-item">
              <span className="material-icons">home</span>
            <NavLink className="link-secondary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <span className="material-icons">money</span>
            <NavLink className="link-secondary" to="/transactions">
              Transaction
            </NavLink>
          </li>
          <li className="nav-item">
              <span className="material-icons">help</span>
            <NavLink className="link-secondary" to="/help">
              Support
            </NavLink>
          </li>
          <li className="nav-item">
              <span className="material-icons">school</span>
            <NavLink className="link-secondary" to="/learn">
              Learn
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
