import React from "react";
import "./OfferCard.css";
const OfferCard = (props) => {
  return (
    <div className="col col-md-4 col-lg-3 col-xl-2">
      <div className="offer">
        <div className="offer-inner">
          <div className="offer-title">{props.title}</div>
          <div className="offer-content">{props.content}</div>
          <div className="offer-description">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
