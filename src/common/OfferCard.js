import React from "react";
import "./OfferCard.css";
const OfferCard = (props) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
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
