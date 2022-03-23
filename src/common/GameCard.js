import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GameCard.css";
import { useHistory } from "react-router-dom";
import { getSite } from "../helpers/apiHelper";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
const GameCard = (props) => {
  const History = useHistory();
  const [siteList, setSiteList] = useState([]);
  const [Auth, setAuth] = useState(true);
  const NumOfColumn = 6;

  const FormatCard = (data, NumOfColumn) => {
    if (data.length > 0) {
      setAuth(true);
      const totalRow = Math.floor(data.length / NumOfColumn);
      let totalLastRow = data.length - totalRow * NumOfColumn;

      while (totalLastRow !== 0 && totalLastRow !== NumOfColumn) {
        data.push({
          image: "https://i.stack.imgur.com/mwFzF.png",
          name: "Blank",
          description: "Blank",
          empty: true,
        });
        totalLastRow++;
      }
      return data;
    } else {
      setAuth(false);
      return null;
    }
  };

  useEffect(() => {
    fetchSite();
  }, []);
  const fetchSite = async () => {
    const { data } = await getSite();
    if (data?.data?.data?.length) {
      const siteListData = data.data.data;

      const newData = FormatCard(siteListData, NumOfColumn);

      setSiteList(newData);
    }
  };

  return (
    <div className="container-fluid">
      {Auth && <p className="home-title">Platform</p>}
      <div className="mobile-device">
        {siteList.map((ele, index) => {
          if (ele.empty) {
            return (
              <div
                className="block block-empty"
                style={{ boxShadow: "none" }}
              ></div>
            );
          } else {
            return (
              <div className="block" key={index}>
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
            );
          }
        })}
      </div>
    </div>
  );
};

export default GameCard;
