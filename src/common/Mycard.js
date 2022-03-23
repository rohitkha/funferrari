import React, { useState, useEffect } from "react";
import { getUserWebsiteID } from "../helpers/apiHelper";
import "./MyCard.css";
const Mycard = () => {
  const [activeIDList, setActiveIDList] = useState([]);
  const [Auth, setAuth] = useState(true);
  useEffect(() => {
    fetchActiveID();
  }, []);

  // logic
  const NumOfColumn = 5;

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

  const fetchActiveID = async () => {
    const { data } = await getUserWebsiteID();

    const activeListData = data.data.data;

    const newData = FormatCard(activeListData, NumOfColumn);

    setActiveIDList(newData || []);
  };

  return (
    <div className="container-fluid">
      {Auth && <p className="home-title">Offers</p>}
      <div className="mobile-my-device">
        {activeIDList.map((ele) => {
          if (ele.empty) {
            return <div className="block" style={{ boxShadow: "none" }}></div>;
          } else {
            return (
              <div className="myCard" key={ele.id}>
                <div className="myCard-inner">
                  <div className="myCard-title">{ele.title}</div>
                  <div className="myCard-content">{ele.content}</div>
                  <div className="myCard-description">{ele.description}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Mycard;
