import React from "react";
import axios from "axios";
import "./GameCard.css";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
const GameCard = (props) => {
  const History = useHistory();

  return (
    <div className="col col-lg-4 col-xl-3">
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
          <div className="block-getid-button">
            <a target='_blank' href={'https://wa.me/919097415163'}>get ID</a></div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
