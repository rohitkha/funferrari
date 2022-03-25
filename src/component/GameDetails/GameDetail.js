import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSiteByID } from "../../helpers/apiHelper";
import Navbar from "../../common/Navbar";
import axios from "axios";
import "./GameDetail.css";
function GameDetail() {
  const { id } = useParams();
  const [Data, setData] = useState({});
  const [Auth, setAuth] = useState(false);

  useEffect(() => {
    getSiteByID(id)
      .then((res) => setData(res.data.data))
      .then(() => setAuth(true));
  }, [id]);

  return (
    <>
      <Navbar />
      {Auth && (
        <div className="container-fluid">
          <div className="main">
            <div className="main-inner">
              <img
                className="main-img"
                src={`${axios.defaults.baseURL}/${Data.image}`}
                alt=""
              />
            </div>
            <div className="main-content">
              <div className="main-name">{Data.name}</div>
              <p>Min Buy: {Data.min_refill}</p>
              <div className="payment-mode">{Data.payment_text}</div>
              <hr />
              <h6>About Platform</h6>
              <div className="main-description">{Data.description}</div>
              <h6>Game Offered</h6>
              <a
                target="_blank"
                href={"https://wa.me/+909150165000"}
                className="main-button btn "
              >
                Get ID
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GameDetail;
