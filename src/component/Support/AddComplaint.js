import React from "react";

function AddComplaint() {
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
            Register a Complaint
          </h1>
        </div>
      </nav>
      <div className="container-fluid" style={{ padding: "15px" }}>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Title"
          aria-describedby="addon-wrapping"
        />
      </div>
    </>
  );
}

export default AddComplaint;
