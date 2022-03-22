import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const History = useHistory();

  return (
    <>
      <nav
        className="navbar navbar-dark"
        style={{ backgroundColor: "rgb(21, 21, 21)" }}
      >
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
              cursor: "pointer",
            }}
            onClick={() => History.push("/home")}
          >
            Home
          </h1>
          <button
            style={{
              border: "none",
              backgroundColor: "rgb(21, 21, 21)",
              marginTop: "-0.5rem",
            }}
            onClick={() => {
              localStorage.removeItem("token");
              History.push("/");
              // window.location.reload();
            }}
          >
            <span className="material-icons" style={{ color: "white" }}>
              logout
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
