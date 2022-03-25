import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getComplaints } from "../../helpers/apiHelper";
import axios from "axios";

function Help() {
  const History = useHistory();
  const [complaint, setComplaint] = useState("");

  useEffect((getComplaints) => {
    fetchComplaint();
  }, []);
  const fetchComplaint = async () => {
    const data = await getComplaints();
    setComplaint(data.data.data.data);
  };

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
        {complaint.length === 0 ? (
          <h6
            style={{
              fontSize: "14px",
              whiteSpace: "pre-wrap",
              color: "rgb(110, 132, 163)",
            }}
          >
            No Complaint found
          </h6>
        ) : (
          <>
            {complaint.map((ele, index) => (
              <div className="row">
                <div className="col">
                  <div className="complaint-block" key={index++}>
                    <div className="complaint-image">
                      {" "}
                      <img
                        className="block-img"
                        src={`${axios.defaults.baseURL}/${ele.image}`}
                        alt=""
                      />
                    </div>
                    <div className="complaint-title">{ele.title}</div>
                    <div className="complaint-description">
                      {ele.description}
                    </div>
                    <div className="complaint-remark">{ele.remark}</div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default Help;
