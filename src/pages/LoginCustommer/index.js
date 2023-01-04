import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../picture/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginCus } from "../../Redux/Actions/LoginCustommer";

export default function LoginCustommer() {
  const [email_user, setEmail] = useState("");
  const [password_user, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(email_user);
    console.log(password_user);
    let data = {
      email_user,
      password_user,
    };
    dispatch(loginCus(data, navigate));
  };
  return (
    <div className="container">
      <div className="container column mt-5 d">
        <div className="d-flex mt-5 justify-content-center">
          <img src={logo} alt="" className="logo" />
          <h3 className="text-danger myfont" style={{ marginTop: "9px" }}>
            Shop.Id
          </h3>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <h4 className="mb-5 myfont">Please login with your account</h4>
        </div>
        <div
          className="d-flex mt-2 justify-content-center container"
          style={{ width: "30%" }}
        >
          <Link to="/loginCustommer" className="link">
            <button
              className="btn btn-danger btn-block btn-lg"
              id="button-cust-2"
            >
              <h5 className="myfont3 mt-1">Custommer</h5>
            </button>
          </Link>

          <Link to="/login" className="link color-font">
            <button
              className="btn btn-light btn-block btn-lg"
              id="button-seller-2"
            >
              <h5 className="myfont3 mt-1">Seller</h5>
            </button>
          </Link>
        </div>
        {/* <div
          className="d-flex justify-content-center container flex-column input-wrap"
          id="input-wrp"
        >
          <input
            type="email"
            className="form-control myfont3"
            placeholder="Email"
            aria-label="email"
            aria-describedby="basic=addon1"
          />
          <input
            type="password"
            className="form-control myfont3"
            placeholder="Password"
            aria-label="password"
            aria-describedby="basic=addon1"
            id="input-margin"
          />
          <Link
            to="/reset"
            className="text-danger text-end mt-3 mb-3 myfont3"
            style={{ textDecoration: "none" }}
          >
            Forgot password?
          </Link>
        </div> */}
        {/* <div
          className="d-flex mt-2 justify-content-center container flex-column"
          id="container-login"
        >
          <button
            className="btn btn-lg btn round btn-danger mt-3"
            id="button-login"
          >
            <h5 className="myfont3" style={{ marginTop: "10px" }}>
              Login
            </h5>
          </button>
          <p className="text-dark text-center" id="text-all">
            Don't have Shop.id account?
            <Link to="/registerCustommer" className="text-danger link myfont3">
              {" "}
              Register
            </Link>
          </p>
        </div> */}
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
              type="password"
              className="form-control myfont3"
              value={password_user}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic=addon1"
              id="input-margin"
            />
            <Link
              to="/reset"
              className="text-danger text-end mt-3 mb-3 myfont3"
              style={{ textDecoration: "none" }}
            >
              Forgot password?
            </Link>
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
                Login
              </h5>
            </button>
            <p className="text-dark text-center" id="text-all">
              Don't have Shop.id account?
              <Link to="/register" className="text-danger link myfont3">
                {" "}
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
