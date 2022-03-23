import React from "react";
import dollarbag from "../../assets/dollarbag.png";
const AllTransaction = () => {
  return (
    <div className="container-fluid">
      <div className="t-block">
        <img className="t-img" src={dollarbag} alt="" />
        <div className="t-content">
          <div className="t-amount">3000</div>
          <div className="t-time">Deposit on 3/3/2022 at 11.23pm</div>
        </div>
      </div>
    </div>
  );
};

export default AllTransaction;
