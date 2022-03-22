import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GameCard.css";
import { useHistory } from "react-router-dom";
import { getSite } from "../helpers/apiHelper";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
const GameCard = (props) => {
  const History = useHistory();
  const [siteList, setSiteList] = useState([]);
  useEffect(() => {
    fetchSite();
  }, []);
  const fetchSite = async () => {
    const { data } = await getSite();
    if (data?.data?.data?.length) {
      const siteListData = data.data.data;
      setSiteList(siteListData);
    }
  };
  console.log(siteList);
  return (
<div className="container-fluid">

    <div className="mobile-device">
      {siteList.map((ele) => (
        <div className="block">
          <div className="inner-block">
            <img
              className="block-img"
              src={`${axios.defaults.baseURL}/${ele.image}`}
              alt=""
            />
          </div>
          <div className="block-content">
            <div className="block-name">{ele.name}</div>
            <div className="block-description">{ele.description}</div>
            <hr />
            <div className="block-button">
              <div
                className="block-view-button btn"
                onClick={() => History.push(`/single/${ele.id}`)}
                >
                View
              </div>
              <div className="block-getid-button">
                <a target="_blank" href={"https://wa.me/919097415163"}>
                  Get ID
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
  );
};

export default GameCard;
