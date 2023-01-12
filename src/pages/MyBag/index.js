/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import MyButtonPlus from "../../components/Button/MyButtonPlus";
import MyButtonMin from "../../components/Button/MyButtonMin";
import NavbarAfterLogin from "../../components/Navbar/NavbarAfterLogin";
import axios from "axios";
import Swal from "sweetalert2";
import "./index.css";
import { useNavigate } from "react-router-dom";

function MyBagPage() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [transaction_id, setTransactionId] = useState("");
  const [seller_id, setSellerId] = useState("");
  const [product_id, setProductId] = useState("");
  const navigate = useNavigate();
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_MY_API_KEY}/transaction/get-transaction`,
        user
      )
      .then((res) => {
        console.log("Get data bag success");
        console.log(res.data);
        setData(res.data.data);
        setTransactionId(res.data.data[0].id_transaction);
        setSellerId(res.data.data[0].seller_id);
        setProductId(res.data.data[0].product_id);
      })
      .catch((err) => {
        console.log("Get data bag fail");
        console.log(err);
      });
  }, []);
  const DeleteBag = (id_transaction) => {
    axios
      .delete(
        `${process.env.REACT_APP_MY_API_KEY}/transaction/delete/${id_transaction}`,
        user
      )
      .then((res) => {
        console.log("Delete bag success");
        console.log(res);
        Swal.fire("Success", "Delete bag success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Delete bag failed");
        console.log(err);
        Swal.fire("Warning", "Delete bag failed", "error");
      });
  };
  const postData = async (e) => {
    e.preventDefault();
    let form = {
      transaction_id: transaction_id,
      seller_id: seller_id,
      product_id: product_id,
    };
    axios
      .post(
        `${process.env.REACT_APP_MY_API_KEY}/checkout/post-checkout`,
        form,
        user
      )
      .then((res) => {
        console.log("Checkout success");
        console.log(res);
        Swal.fire("Success", "Checkout success", "success");
        navigate("/checkout");
      })
      .catch((err) => {
        console.log("Checkout failed");
        console.log(err);
        Swal.fire("Warning", "Checkout failed", "error");
      });
  };
  return (
    <div>
      <NavbarAfterLogin />
      <div className="body">
        <div className="container-fluid bg-new">
          <div className="container py-3">
            <h1 className="myfont text-title">My bag</h1>
            <div className="container col-12 row py-3">
              <div className="col col-8 row">
                <div className="container col-12 row">
                  {data ? (
                    data.map((item) => (
                      <div
                        className="col col-12 row container shadow py-3 align-items-center mb-3"
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="col-1">
                          <img
                            src={item.photo_product}
                            style={{ height: "70px", width: "70px" }}
                            alt=""
                            className="bag-pruduct"
                          />
                        </div>
                        <div className="col-4 offset-1">
                          <h6 className="myfont">{item.name_product}</h6>
                          <div className="row">
                            <div className="col-6">
                              <h6 className="myfont3 color-font">
                                {item.brand_product}
                              </h6>
                            </div>
                            <div className="col-2">
                              <h6
                                className="myfont3 color-font"
                                style={{ marginLeft: "-20px" }}
                              >
                                Rp.{item.price_product}
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className=" col-2">
                          <MyButtonMin />
                          <span className="myfont3">
                            {item.qty_transaction}
                          </span>
                          <MyButtonPlus />
                        </div>
                        <div className=" col-2 ">
                          <h6 className="myfont">
                            Rp.{item.total_transaction}
                          </h6>
                        </div>
                        <div
                          className=" col-1 text-danger btn "
                          key={item.id_transaction}
                          onClick={() => DeleteBag(item.id_transaction)}
                        >
                          <h6 className="myfont">Delete</h6>
                        </div>
                      </div>
                    ))
                  ) : (
                    <h1>...Loading</h1>
                  )}
                </div>
              </div>
              <div className="container col-4">
                <div
                  className="col col-12 row container shadow py-3"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="col col-12">
                    <h6 className="myfont">Shopping Summary</h6>
                  </div>
                  <div className="row py-3">
                    <div className="col-6">
                      <h6 className="myfont3" style={{ color: "#9B9B9B" }}>
                        Total price
                      </h6>
                    </div>
                    <div className="col-3 offset-3">
                      <h6 className="myfont">$ 40.0</h6>
                    </div>
                  </div>
                  <div className="row align-items-center py-3">
                    <div className="col-12">
                      {/* <Link to="/checkout" className="link"> */}
                      <button
                        className="btn btn-danger myfont"
                        onClick={postData}
                        style={{
                          height: "50px",
                          borderRadius: "40px",
                          width: "350px",
                        }}
                      >
                        <p className="myfont3" style={{ marginTop: "7px" }}>
                          Buy
                        </p>
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBagPage;
