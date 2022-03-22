import React, { useState, useEffect } from "react";
import "./OfferCard.css";
import {
  getPromotions,

} from "../helpers/apiHelper";
import axios from "axios";
const OfferCard = (props) => {
  const [promotionList, setPromotionList] = useState([]);
    useEffect(() => {
  
    fetchPromotions();
  }, []);
   const fetchPromotions = async () => {
    const { data } = await getPromotions();
    if (data?.data?.data?.length) {
      const promotionList = data.data.data;
      setPromotionList(promotionList);
    }
  };
  return (
    <div className=" mobile-device">
       {promotionList.map((ele) => (
      <div className="offer">
        <div className="offer-inner">
          <div className="offer-title">{ele.title}</div>
          <div className="offer-content">{ele.content}</div>
          <div className="offer-description">{ele.description}</div>
        </div>
      </div> ))}
    </div>
  );
};

export default OfferCard;
