import React from "react";
import { Link } from "react-router-dom";
import logo from  "../picture/logo.png"

export default function RegisterCustommer() {
  return (
    <div className="container column mt-5 d">
      <div className="d-flex mt-5 justify-content-center">
        <img src={logo} alt="" className="logo" />
        <h3 className="text-danger myfont" style={{marginTop:"9px"}}>Shop.Id</h3>
      </div>
      <div className="d-flex justify-content-center mt-5">
      <h4 className="mb-5 myfont">Please login with your account</h4>
    </div>
    <div
      className="d-flex mt-2 justify-content-center container"
      style={{width: "30%"}}
    >
     <Link to="/loginCustommer" className="link">
        <button className="btn btn-danger btn-block btn-lg" id="button-cust-2">
          <h5 className="myfont3 mt-1">Custommer</h5>
        </button>
        </Link>
        <Link to="/register" className="link color-font">
        <button className="btn btn-light btn-block btn-lg" id="button-seller-2">
          <h5 className="myfont3 mt-1">Seller</h5>
        </button>
        </Link>
    </div>
    <div
      className="d-flex justify-content-center container flex-column input-wrap"
      id="input-wrp"
    >  <input
       type="name"
       className="form-control myfont3"
       placeholder="Name"
       aria-label="name"
       aria-describedby="basic=addon1"
      />
      <input
        type="email"
        className="form-control myfont3 mt-3"
        placeholder="Email"
        aria-label="email"
        aria-describedby="basic=addon1"
      />
      <input
        type="password"
        className="form-control myfont3 mt-3"
        placeholder="Password"
        aria-label="password"
        aria-describedby="basic=addon1"
      />
    </div>
    <div
      className="d-flex mt-2 justify-content-center container flex-column"
      id="container-login"
    >
      <button className="btn btn-lg btn round btn-danger mt-4" id="button-login">
        <h5 className="myfont3" style={{marginTop:"10px"}}>Login</h5>
      </button>
      <p className="text-dark text-center myfont3" id="text-all">
      Already have a Shop.id account?
        <Link to="/loginCustommer" className="link text-danger myfont3"> Login</Link>
      </p>
    </div>
    </div>
  )
}
