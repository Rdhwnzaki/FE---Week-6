import React, { useState } from "react";
import logo from "../picture/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { otpUser } from "../../Redux/Actions/Otp";

export default function Otp() {
  const [email_user, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(email_user);
    console.log(otp);
    let data = {
      email_user,
      otp,
    };
    dispatch(otpUser(data, navigate));
  };
  return (
    <div>
      <div className="container">
        <div className="container column mt-5 d">
          <div className="d-flex mt-5 justify-content-center">
            <img
              src={logo}
              alt=""
              style={{ marginRight: "20px", height: "40px" }}
            />
            <h3 className="text-danger myfont" style={{ marginTop: "9px" }}>
              Shop.Id
            </h3>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <h4 className="mb-5 myfont">Please verification your account</h4>
          </div>
          <form onSubmit={postData}>
            <div
              className="d-flex justify-content-center container flex-column input-wrap"
              id="input-wrp"
            >
              <input
                type="email"
                className="form-control myfont3"
                value={email_user}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Email"
                aria-label="email"
                aria-describedby="basic=addon1"
              />
              <input
                type="number"
                className="form-control myfont3"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                name="otp"
                placeholder="OTP"
                aria-label="password"
                aria-describedby="basic=addon1"
                id="input-margin"
              />
            </div>
            <div
              className="d-flex mt-2 justify-content-center container flex-column"
              id="container-login"
            >
              <button
                type="submit"
                className="btn round btn-danger mt-3"
                id="button-login"
              >
                <h5 className="myfont3" style={{ marginTop: "10px" }}>
                  Confirm
                </h5>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
