import Home from "./pages/Home";
import Login from "./pages/Login";
import MyBag from "./pages/MyBag";
import ProfileSeller from "./pages/Profile";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Category from "./pages/Category";
import Reset from "./pages/Reset";
import Register from "./pages/Register";
import Selling from "./pages/SellingProduct";
import LoginCustommer from "./pages/LoginCustommer";
import Product from "./pages/Product";
import RegisterCustommer from "./pages/RegisterCustommer";
import Otp from "./pages/Otp";
import OtpCustommer from "./pages/OtpCustommer";
import ProfileCustommer from "./pages/ProfileCustommer";
import EditProduct from "./pages/EditProduct";
import Swal from "sweetalert2";
import { Outlet } from "react-router-dom";
import EditCategory from "./pages/EditCategory";
import Order from "./pages/Order";
import History from "./pages/History";
import DetailOrder from "./pages/DetailOrder";

function App() {
  const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return <Outlet />;
    } else {
      Swal.fire("Warning", "Please login first", "error");
      return <Navigate to="/login" />;
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} replace="true" />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:id_category" element={<Category />} />
          <Route
            path="/productdetail/:id_product"
            element={<ProductDetail />}
          />
          <Route path="/mybag" element={<PrivateRoute />}>
            <Route index element={<MyBag />} />
          </Route>
          <Route path="/profile-seller" element={<PrivateRoute />}>
            <Route index element={<ProfileSeller />} />
          </Route>
          <Route path="/profile-custommer" element={<PrivateRoute />}>
            <Route index element={<ProfileCustommer />} />
          </Route>
          <Route path="/checkout" element={<PrivateRoute />}>
            <Route index element={<Checkout />} />
          </Route>
          <Route path="/product" element={<PrivateRoute />}>
            <Route index element={<Product />} />
          </Route>
          <Route path="/selling" element={<PrivateRoute />}>
            <Route index element={<Selling />} />
          </Route>
          <Route path="/edit-product/:id_product" element={<PrivateRoute />}>
            <Route index element={<EditProduct />} />
          </Route>
          <Route path="/edit-category/:id_product" element={<PrivateRoute />}>
            <Route index element={<EditCategory />} />
          </Route>
          <Route path="/order" element={<PrivateRoute />}>
            <Route index element={<Order />} />
          </Route>
          <Route path="/history" element={<PrivateRoute />}>
            <Route index element={<History />} />
          </Route>
          <Route path="/detail-order/:id_checkout" element={<PrivateRoute />}>
            <Route index element={<DetailOrder />} />
          </Route>
          <Route path="/reset" element={<Reset />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/otp-custommer" element={<OtpCustommer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loginCustommer" element={<LoginCustommer />} />
          <Route path="/registerCustommer" element={<RegisterCustommer />} />\
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
