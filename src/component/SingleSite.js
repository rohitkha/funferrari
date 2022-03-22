import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSiteByID } from "../helpers/apiHelper";
import Navbar from "../component/Navbar";
import axios from "axios";
import "./SingleSite.css";
function SingleSite(props) {
  const { id } = useParams();
  const [Data, setData] = useState({});

  useEffect(() => {
    getSiteByID(id).then((res) => setData(res.data.data));
  }, [id]);

  return (
    <>
      <Navbar />
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
                <div className="main-button btn ">
                  <a target='_blank' className="btn" href={'https://wa.me/919097415163'}>get ID</a>
                </div>
              </div>
            </div>
         
      </div>
    </>
  );
}

export default SingleSite;
