import React from "react";
import AllTransaction from "./Transaction/AllTransaction";

function Transcation() {
  return (
    <>
      <nav style={{ backgroundColor: "black" }}>
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item active">
            <a
              className="link-light"
              href=""
              style={{
                fontSize: ".8rem",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              ALL
            </a>
          </li>
          <li className="nav-item">
            <a
              className="link-light"
              href=""
              style={{
                fontSize: ".8rem",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              DIPOSIT
            </a>
          </li>
          <li className="nav-item">
            <a
              className="link-light"
              href=""
              style={{
                fontSize: ".8rem",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              WITHDRAW
            </a>
          </li>
        </ul>
      </nav>
      <AllTransaction />
    </>
  );
}

export default Transcation;
