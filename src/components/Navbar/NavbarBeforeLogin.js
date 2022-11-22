import React from "react";
import shopLogo from "../../image/logo.png";
import cart from "../../image/shopping-cart.png";
import MyButtonLogin from "../Button/MyButtonLogin";
import MyButtonSignUp from "../Button/MyButtonSignUp";
import ModalFilter from "../Modal/ModalFilter";
import { Link } from "react-router-dom";

function NavbarBeforeLogin(){
    return(
        <nav className="container-fluid py-4 navbar-shop sticky-top bg-nav">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-1">
                <img
                  src={shopLogo}
                  alt=""
                  className="img-fluid"
                  style={{ marginLeft: "50px" }}
                />
              </div>
              <div className="col-1">
                <h3
                  className="myfont text-danger"
                  style={{ marginTop: "10px" }}
                >
                  Shop.id
                </h3>
              </div>
              <div className="col-5">
                <form className="form-inline">
                  <input
                    className="form-control myfont2 search-input"
                    type="search"
                    style={{ borderRadius: "25px", marginLeft: "15px" }}
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
              <div className="col-1">
                <ModalFilter/>
              </div>
              <div className="col-1">
                <button className="btn ">
                  <Link to="/mybag" className="link">
                  <img src={cart} alt="" className="img-fluid" />
                  </Link>
                </button>
              </div>
              <div className="col-1">
                <Link to="/login" className="link">
                <MyButtonLogin/>
                  </Link>
              </div>
              <div className="col-1 offset-1">
                <Link to='/register'>
                <MyButtonSignUp/>
                </Link>
              </div>
            </div>
          </div>
        </nav>
    )
}
export default NavbarBeforeLogin