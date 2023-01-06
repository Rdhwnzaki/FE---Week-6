import React from "react";
import shopLogo from "../../image/logo.png";
import cart from "../../image/shopping-cart.png";
import bell from "../../image/bell.png";
import mail from "../../image/mail.png";
import ModalFilter from "../Modal/ModalFilter";
import { Link } from "react-router-dom";
import AvatarImage from "../AvatarImage";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function NavbarAfterLogin() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/loginCustommer");
    Swal.fire("Success", "Logout success", "success");
  };
  return (
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
            <h3 className="myfont text-danger" style={{ marginTop: "10px" }}>
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
            <ModalFilter />
          </div>
          <div className="col-2">
            <button className="btn ">
              <Link to="/mybag" className="link">
                <img
                  src={cart}
                  alt=""
                  className="img-fluid"
                  style={{ marginRight: "30px" }}
                />
                <img
                  src={bell}
                  alt=""
                  className="img-fluid"
                  style={{ marginRight: "30px" }}
                />
                <img src={mail} alt="" className="img-fluid" />
              </Link>
            </button>
          </div>
          <div className="col-1">
            <Link to="/profile">
              <AvatarImage />
            </Link>
          </div>
          <div className="col-1">
            <button
              className="btn btn-danger btn-small"
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavbarAfterLogin;
