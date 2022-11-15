import shopLogo from "./image/logo.png";
import vector from "./image/Vector.png";
import cart from "./image/shopping-cart.png";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyBag from "./pages/MyBag";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Link, Routes, Navigate, useLocation } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Category from "./pages/Category";
import Reset from "./pages/Reset";
import Register from "./pages/Register"
import LoginCustommer from "./pages/LoginCustommer"
import Product from "./pages/Product"
import RegisterCustommer from "./pages/RegisterCustommer"
import MyButtonLogin from "./components/MyButtonLogin";
import MyButtonSignUp from "./components/MyButtonSignUp";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
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
                <form class="form-inline">
                  <input
                    class="form-control myfont2 search-input"
                    type="search"
                    style={{ borderRadius: "25px", marginLeft: "15px" }}
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
              <div className="col-1">
                <div className="btn btn-outline-dark modal-dialog modal-lg">
                  <img src={vector} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-1">
                <button className="btn ">
                  <Link to="/mybag" className="link">
                  <img src={cart} alt="" className="img-fluid" />
                  </Link>
                </button>
              </div>
              <div className="col-1">
                <Link to="/loginCustommer" className="link">
                <MyButtonLogin/>
                  </Link>
              </div>
              <div className="col-1 offset-1">
                <Link to='/registerCustommer'>
                <MyButtonSignUp/>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} replace="true" />
          <Route path="/home" element={<Home />} />
          <Route path="/mybag" element={<MyBag />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category" element={<Category />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loginCustommer" element={<LoginCustommer />} />
          <Route path="/registerCustommer" element={<RegisterCustommer />} />\
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
