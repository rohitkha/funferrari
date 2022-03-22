import React from "react";

function Transcation() {
  return (
    <>
      <nav className="bg-dark">
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item">
            <a className="link-light" aria-current="page" href="#">
              ALL
            </a>
          </li>
          <li className="nav-item">
            <a className="link-light" href="#">
              DIPOSIT
            </a>
          </li>
          <li className="nav-item">
            <a className="link-light" href="#">
              WITHDRAW
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Transcation;
