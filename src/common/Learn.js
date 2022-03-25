import React from "react";
import { useHistory } from "react-router-dom";

function Learn() {
  const History = useHistory();

  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "rgb(21, 21, 21)" }}>
        <div
          className="items"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "0.8rem 1rem 0",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "650",
            }}
          >
            Learn
          </h1>
        </div>
      </nav>
      <div className="container-fluid" style={{ padding: "15px" }}>
        <h6
          style={{
            fontSize: "14px",
            whiteSpace: "pre-wrap",
            color: "rgb(110, 132, 163)",
          }}
        >
          No Complaint found
        </h6>
      </div>
    </>
  );
}

export default Learn;
