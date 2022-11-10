import { useState } from "react";
import shopLogo from "./image/logo.png";
import vector from "./image/Vector.png";
import cart from "./image/shopping-cart.png";
// import Login from "./pages/Login";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";

function App() {
  const [title, setTitle] = useState("Belajar Frontend");
  return (
    <div className="App">
      <header className="App-header">{title}</header>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-white bg-white">
          <div className="container text-center">
            <div className="row align-items-center">
              <img src={shopLogo} alt="" id="logo--nav" />
              <h3
                className="text-danger myfont"
                style={{ margintop: "20px", marginleft: "10px" }}
              >
                Shop.id
              </h3>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2 myfont2"
                  type="search"
                  style={{
                    margintop: "23px",
                    marginbottom: "15px",
                    marginleft: "30px",
                    width: "400px",
                    borderradius: "30px",
                    height: "45px",
                  }}
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              <button
                className="btn btn-outline-dark btn-block btn-md"
                id=""
                style={{
                  margintop: "23px",
                  marginbottom: "15px",
                  height: "40px",
                  borderradius: "10px",
                  marginleft: "3px",
                  width: "50px",
                }}
              >
                <img src={vector} alt="" />
              </button>
              <img
                src={cart}
                style={{
                  margintop: "20px",
                  marginleft: "135px",
                  marginbottom: "15px",
                }}
                alt=""
              />
              <button
                className="btn btn-danger btn-block btn-md myfont2"
                id="button-cust-2"
                style={{
                  margintop: "23px",
                  marginbottom: "15px",
                  height: "45px",
                  borderradius: "40px",
                  marginleft: "20px",
                }}
              >
                {/* <Link to="/login">Login</Link> */}
              </button>

              <a href="regisCustommer.html" id="link">
                <button
                  className="btn btn-gray btn-outline-danger btn-block btn-md myfont2"
                  id="button-cust-2"
                  style={{
                    margintop: "23px",
                    marginbottom: "15px",
                    height: "45px",
                    borderradius: "40px",
                    marginleft: "20px",
                  }}
                >
                  Signup
                </button>
              </a>
            </div>
          </div>
        </nav>
        <Routes>{/* <Route path="/login" element={<Login />} /> */}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
