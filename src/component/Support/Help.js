import React from "react";
import { useHistory } from "react-router-dom";

function Help() {
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
            Support
          </h1>
          <button
            className="btn"
            style={{
              margin: "-0.5rem 0 0.5rem",
              backgroundColor: "#2196f3",
              color: "white",
            }}
            onClick={() => History.push("/add-complaint")}
          >
            Add Complaint
          </button>
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

export default Help;
