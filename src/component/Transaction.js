import React, { useState } from "react";
import dollarbag from "../assets/dollarbag.png";
function Transcation() {
  const [toggleState, settoggleState] = useState(1);

  const toggleDiv = (index) => settoggleState(index);

  return (
    <>
      <nav style={{ backgroundColor: "black" }}>
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item ">
            <p
              className={toggleState === 1 ? "link-light active" : "link-light"}
              style={{
                paddingTop: "8px",
                fontSize: ".8rem",
                cursor: "pointer",
              }}
              onClick={() => toggleDiv(1)}
            >
              ALL
            </p>
          </li>
          <li className="nav-item">
            <p
              className={toggleState === 2 ? "link-light active" : "link-light"}
              style={{
                fontSize: ".8rem",
                paddingTop: "8px",
                cursor: "pointer",
              }}
              onClick={() => toggleDiv(2)}
            >
              DIPOSIT
            </p>
          </li>
          <li className="nav-item">
            <p
              className={toggleState === 3 ? "link-light active" : "link-light"}
              style={{
                fontSize: ".8rem",
                paddingTop: "8px",
                cursor: "pointer",
              }}
              onClick={() => toggleDiv(3)}
            >
              WITHDRAW
            </p>
          </li>
        </ul>
      </nav>
      {toggleState === 3 ? (
        <div>
          <div className="container-fluid">
            <div className="t-block">
              <img className="t-img" src={dollarbag} alt="" />
              <div className="t-content">
                <div className="t-amount">3000</div>
                <div className="t-time">Deposit on 3/3/2022 at 11.23pm</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {toggleState === 2 ? (
        <div>
          <div className="container-fluid">
            <div className="t-block">
              <img className="t-img" src={dollarbag} alt="" />
              <div className="t-content">
                <div className="t-amount">3000</div>
                <div className="t-time">Deposit on 3/3/2022 at 11.23pm</div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="t-block">
              <img className="t-img" src={dollarbag} alt="" />
              <div className="t-content">
                <div className="t-amount">3000</div>
                <div className="t-time">Deposit on 3/3/2022 at 11.23pm</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {toggleState === 1 ? (
        <div>
          <div className="container-fluid">
            <div className="t-block">
              <img className="t-img" src={dollarbag} alt="" />
              <div className="t-content">
                <div className="t-amount">3000</div>
                <div className="t-time">Deposit on 3/3/2022 at 11.23pm</div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="t-block">
              <img className="t-img" src={dollarbag} alt="" />
              <div className="t-content">
                <div className="t-amount">3000</div>
                <div className="t-time">Deposit on 3/3/2022 at 11.23pm</div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="t-block">
              <img className="t-img" src={dollarbag} alt="" />
              <div className="t-content">
                <div className="t-amount">3000</div>
                <div className="t-time">Deposit on 3/3/2022 at 11.23pm</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Transcation;
