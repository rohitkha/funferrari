import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-block">
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item">
            <NavLink className="link-secondary" to="/home">
              <span className="material-icons">home</span>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="link-secondary" to="/transactions">
              <span className="material-icons">money</span>
              Transaction
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="link-secondary" to="/help">
              <span className="material-icons">help</span>
              Support
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="link-secondary" to="/learn">
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
