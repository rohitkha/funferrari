import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import {
  getOffers,
  getPromotions,
  getSite,
  getUserWebsiteID,
} from "../helpers/apiHelper";
import axios from "axios";
import GameCard from "../common/GameCard";
import OfferCard from "../common/OfferCard";
import { Carousel } from "react-bootstrap";

const Home = () => {
  const [offersList, setOffersList] = useState([]);
  const [siteList, setSiteList] = useState([]);
  const [promotionList, setPromotionList] = useState([]);
  const [activeIDList, setActiveIDList] = useState([]);
  // // const { loading, signOut } = useAuth();

  useEffect(() => {
    fetchOffers();
    fetchSite();
    fetchActiveID();
    fetchPromotions();
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
  const fetchSite = async () => {
    const { data } = await getSite();
    if (data?.data?.data?.length) {
      const siteListData = data.data.data;
      setSiteList(siteListData);
    }
  };

  const fetchActiveID = async () => {
    const { data } = await getUserWebsiteID();
    if (data?.data?.data?.length) {
      const activeListData = data.data.data;
      setActiveIDList(activeListData);
    }
  };
  const fetchPromotions = async () => {
    const { data } = await getPromotions();
    if (data?.data?.data?.length) {
      const promotionList = data.data.data;
      setPromotionList(promotionList);
    }
  };

  // console.log(siteList);

  console.log("data", offersList, promotionList, activeIDList, siteList);
  return (
    <>
      <Navbar />

      <Carousel>
        {offersList.map((ele) => (
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={ele}
            alt="First slide"
            />
        </Carousel.Item>
            ))}
      </Carousel>
     
      {/* main body */}
      <div className="container-fluid">
        <div className="row">
          {/*sitelist  */}
          <p>PlatFrom</p>
          {siteList.map((data) => {
            if (siteList.length > 0) {
              return (
                <>
                  <GameCard
                    id={data.id}
                    name={data.name}
                    description={data.description}
                    image={data.image}
                  />
                </>
              );
            }
          })}
        </div>

        {/* promotion */}
        <div className="row">
          <p>Offer</p>
          {promotionList.map((data) => {
            if (promotionList.length > 0) {
              return (
                <>
                  <OfferCard
                    title={data.title}
                    content={data.content}
                    description={data.description}
                  />
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
