import Home from "./pages/Home";
import Login from "./pages/Login";
import MyBag from "./pages/MyBag";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Category from "./pages/Category";
import Reset from "./pages/Reset";
import Register from "./pages/Register"
import Selling from "./pages/SellingProduct"
import LoginCustommer from "./pages/LoginCustommer"
import Product from "./pages/Product"
import RegisterCustommer from "./pages/RegisterCustommer"
import AuthChecker from "./components/AuthChecker";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} replace="true" />
          <Route path="/home" element={<Home />} />
          <Route path="/mybag" element={
            <AuthChecker>
              <MyBag />
            </AuthChecker>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={
            <AuthChecker>
              <Profile />
            </AuthChecker>
          } />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/checkout" element={
            <AuthChecker>
              <Checkout />
            </AuthChecker>
          } />
          <Route path="/category" element={
            <AuthChecker>
              <Category />
            </AuthChecker>
          } />
          <Route path="/reset" element={<Reset />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loginCustommer" element={<LoginCustommer />} />
          <Route path="/registerCustommer" element={<RegisterCustommer />} />\
          <Route path="/product" element={
            <AuthChecker>
              <Product />
            </AuthChecker>
          } />
          <Route path="/selling" element={
            <AuthChecker>
              <Selling />
            </AuthChecker>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
