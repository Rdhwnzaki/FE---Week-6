/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import NavbarAfterLogin from "../../components/Navbar/NavbarAfterLogin";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DetailOrder() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const { id_checkout } = useParams();
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_MY_API_KEY}/checkout/get-checkout-detail/${id_checkout}`,
        user
      )
      .then((res) => {
        console.log("Get data checkout success");
        console.log(res.data);
        setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log("Get data checkout fail");
        console.log(err);
      });
  }, []);
  return (
    <div>
      <NavbarAfterLogin />
      <div
        className="container mt-5 shadow"
        style={{ width: "500px", height: "430px" }}
      >
        <h4 className="myfont3 my-4 py-4">Detail Order</h4>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">
            Name Product : {data?.name_product}
          </h6>
        </div>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">Qty : {data?.qty_transaction}</h6>
        </div>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">
            Total Price : {data?.total_transaction}
          </h6>
        </div>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">Status : {data?.name_status}</h6>
        </div>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">
            Order : {data?.fullname_user} - {data?.address_user}
          </h6>
        </div>
      </div>
    </div>
  );
}
