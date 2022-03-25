import React, { useState, useEffect } from "react";
import Navbar from "./common/Navbar";
import { getOffers } from "./helpers/apiHelper";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import GameCard from "./component/GameCard/GameCard";
import OfferCard from "./component/OfferCard/OfferCard";
const Home = () => {
  const [offersList, setOffersList] = useState([]);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    const { data } = await getOffers();

    if (data?.data?.data?.length) {
      const offersListData = data.data.data;
      let imgList = offersListData.map(
        (item) => `${axios.defaults.baseURL}/${item.image}`
      );
      if (imgList.length) {
        setOffersList(imgList);
      }
    }
  };

  return (
    <>
      <Navbar />
      <Carousel controls={false}>
        {offersList.map((ele, index) => (
          <Carousel.Item interval={1000} key={index}>
            <img className="d-block w-100 banner" src={ele} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
      <GameCard />
      <OfferCard />

      <div
        className="helper"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p
          style={{
            color: "black",
            fontSize: "1rem",
            fontWeight: 400,
            marginTop: "5px",
            marginRight: "5px",
          }}
        >
          For Any Support Please
        </p>
        <a
          target="_blank"
          href="https://wa.me/+909150165000"
          className="btn"
          style={{
            textDecoration: "none",
            backgroundColor: "rgb(252, 182, 20)",
            color: "black",
          }}
        >
          Click Here
        </a>
      </div>
    </>
  );
};

export default Home;
