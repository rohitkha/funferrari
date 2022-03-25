import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import left from "../assets/left_arrow.png";
import funferrari from "../assets/funferrai400.png";
import notification from "../assets/notification.png";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";
import * as GoThreeBars from "react-icons/go";
import * as ImCross from "react-icons/im";
import { getUser } from "../helpers/apiHelper";

import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const location = useLocation();
  const History = useHistory();
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  const [user, setUser] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const data = await getUser();
    setUser(data.data.data);
  };

  return (
    <>
      <div>
        <nav style={{ backgroundColor: "black" }}>
          <ul style={{ display: "flex", justifyContent: "space-between" }}>
            <li style={{ paddingTop: "20px", listStyle: "none" }}>
              {location.pathname !== "/home" ? (
                <img
                  src={left}
                  alt="log"
                  onClick={() => History.push("/home")}
                  style={{
                    filter: "invert(1)",
                    cursor: "pointer",
                    width: "30px",
                    height: "30px",
                  }}
                />
              ) : (
                <>
                  <GoThreeBars.GoThreeBars
                    fontSize={20}
                    color={"white"}
                    onClick={ToggleSidebar}
                    style={{ cursor: "pointer" }}
                  />
                </>
              )}
            </li>
            <li style={{ listStyle: "none" }}>
              <img
                src={funferrari}
                alt="logo"
                style={{ width: "100px", height: "60px" }}
              />
            </li>
            <li
              style={{
                paddingTop: "20px",
                paddingRight: "10px",
                listStyle: "none",
                display: "flex",
                marginRight: "20px",
              }}
            >
              <img
                src={notification}
                alt="logo"
                style={{
                  filter: "invert(1)",
                  cursor: "pointer",
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                }}
              />
            </li>
          </ul>
        </nav>
        <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
          <div className="sd-header" style={{ margin: "25px", float: "right" }}>
            <ImCross.ImCross
              color="white"
              onClick={ToggleSidebar}
              style={{ cursor: "pointer" }}
            />
          </div>
          <ul className="side-item">
            <li className="side-link" style={{ marginBottom: "30px" }}>
              <img
                src={user.profile_photo_url}
                style={{
                  width: "50px",
                  borderRadius: "10px",
                  height: "50px",
                  margin: "10px",
                  marginBottom: "20px",
                }}
                alt="profile pic"
              />
              <h4
                style={{
                  color: "white",
                  fontSize: ".9rem",
                }}
              >
                {user.name}
              </h4>
              <h4
                style={{
                  color: "white",
                  fontSize: ".9rem",
                }}
              >
                {user.mobile}
              </h4>
            </li>

            <li className="side-link">
              <h6
                style={{
                  color: "white",
                  paddingTop: "3px",
                  fontWeight: "400",
                  textAlign: "left",
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/user-profile"
                >
                  My Account
                </Link>
              </h6>
            </li>
            <li className="side-link">
              <h6
                style={{
                  color: "white",
                  paddingTop: "3px",
                  fontWeight: "400",
                  textAlign: "left",
                }}
              >
                Complaint
              </h6>
            </li>
            <li className="side-link">
              <h6
                style={{
                  color: "white",
                  paddingTop: "3px",
                  fontWeight: "400",
                  textAlign: "left",
                }}
              >
                Offer
              </h6>
            </li>
            <li className="side-link">
              <h6
                style={{
                  color: "white",
                  paddingTop: "3px",
                  fontWeight: "400",
                  textAlign: "left",
                }}
                onClick={() => {
                  localStorage.removeItem("token");
                  History.push("/");
                  window.location.reload();
                }}
              >
                Logout
              </h6>
            </li>
          </ul>
        </div>
        <div
          className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
