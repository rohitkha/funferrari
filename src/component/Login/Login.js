import React, { useState, useEffect } from "react";
import "./Login.css";
import FunFerrari400 from "../../assets/funferrai400.png";
import { sendOTP, verifyOTP } from "../../helpers/apiHelper";
import { useHistory } from "react-router-dom";

function Login() {
  const [Agree, setAgree] = useState(false);
  const [Mobile, setMobile] = useState("");
  const [OTP, setOTP] = useState("");

  const History = useHistory();

  let token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      History.push("/");
    } else {
      History.push("/home");
    }
  }, [token]);

  const Obj = {
    otp: OTP,
    mobile: Mobile,
    country_code: "IN",
  };

  const LoginHandler = (e) => {
    e.preventDefault();
    verifyOTP(Obj).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.access_token);
        History.push("/home");
        window.location.reload();
      }
    });
  };

  return (
    <div className="container-fluid login-page">
      <div className="container login-inner">
        <div className="logo">
          <img src={FunFerrari400} alt="logo" />
        </div>
        <form className="login">
          <div className="mb-3">
            <input
              type="text"
              className="form-control p-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your 10 digit mobile no."
              onChange={(event) => setMobile(event.target.value)}
            />
          </div>
          <p
            className="nav-link link-light"
            onClick={() => sendOTP(Obj).then((res) => alert(res.data.otp))}
          >
            Send OTP
          </p>
          <div className="mb-3">
            <input
              type="text"
              className="form-control p-2"
              id="exampleInputPassword1"
              placeholder="Enter OTP"
              onChange={(event) => setOTP(event.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onClick={() => setAgree((prev) => !prev)}
            />
            <label htmlfor="exampleCheck1" style={{ color: "white" }}>
              I agree terms & condition
            </label>
          </div>
          <div className="d-grid gap-2">
            {Agree && (
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "rgb(252, 182, 20)" }}
                onClick={LoginHandler}
              >
                Login
              </button>
            )}
            {!Agree && (
              <button
                type="submit"
                className="btn"
                disabled
                style={{ backgroundColor: "rgb(252, 182, 20)" }}
              >
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
