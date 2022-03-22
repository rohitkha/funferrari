import React from "react";
import axios from "axios";
import "./GameCard.css";
import { useHistory } from "react-router-dom";

const GameCard = (props) => {
  const History = useHistory();

  return (
    <div className="col col-md-4 col-lg-3 col-xl-2">
      <div className="block">
        <div className="inner-block">
          <img
            className="block-img"
            src={`${axios.defaults.baseURL}/${props.image}`}
            alt=""
          />
        </div>
        <div className="block-content">
          <div className="block-name">{props.name}</div>
          <div className="block-description">{props.description}</div>
          <hr />
        </div>
        <div className="block-button">
          <div
            className="block-view-button"
            onClick={() => History.push(`/single/${props.id}`)}
          >
            view
          </div>
          {/* <a target='_blank' href={'https://wa.me/919097415163'}><i class="fa fa-whatsapp whatsapp-icon"></i></a> */}
          <div className="block-getid-button">get ID</div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
