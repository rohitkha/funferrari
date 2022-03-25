import React, { useState, useEffect } from "react";
import "./OfferCard.css";
import { getPromotions } from "../../helpers/apiHelper";
// import axios from "axios";
const OfferCard = () => {
  const [promotionList, setPromotionList] = useState([]);
  const [Auth, setAuth] = useState(true);
  useEffect(() => {
    fetchPromotions();
  }, []);

  // logic
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

  const fetchPromotions = async () => {
    const { data } = await getPromotions();

    const promotionList = data.data.data;

    const newData = FormatCard(promotionList, NumOfColumn);

    setPromotionList(newData || []);
  };

  return (
    <div className="container-fluid">
      {Auth && <p className="home-title">Offers</p>}
      <div className="mobile-card-device">
        {promotionList.map((ele) => {
          if (ele.empty) {
            return (
              <div
                className="offer offer-empty"
                style={{ boxShadow: "none" }}
              ></div>
            );
          } else {
            return (
              <div className="offer" key={ele.id}>
                <div className="offer-inner">
                  <div className="offer-title">{ele.title}</div>
                  <div className="offer-content">{ele.content}</div>
                  <div className="offer-description">{ele.description}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default OfferCard;
