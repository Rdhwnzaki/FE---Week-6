/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import NavbarAfterLogin from "../../components/Navbar/NavbarAfterLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";

function Order() {
  const [data, setData] = useState([]);
  const [dataArchived, setDataArchived] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    search: "",
  });
  useEffect(() => {
    getData();
  }, [inputData.search]);
  useEffect(() => {
    getData();
  }, []);
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let users = `${process.env.REACT_APP_MY_API_KEY}/checkout/get-checkout-seller?search=${inputData.search}`;
  const getData = () => {
    axios
      .get(users, user)
      .then((res) => {
        console.log(res.data.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("Get Data Fail");
        console.log(err);
        setData([]);
      });
  };
  useEffect(() => {
    getDataArchived();
  }, [inputData.search]);
  useEffect(() => {
    getDataArchived();
  }, []);
  let archived = `${process.env.REACT_APP_MY_API_KEY}/checkout/get-checkout-delivered?search=${inputData.search}`;
  const getDataArchived = () => {
    axios
      .get(archived, user)
      .then((res) => {
        console.log(res.data.data);
        res.data && setDataArchived(res.data.data);
      })
      .catch((err) => {
        console.log("Get Data Fail");
        console.log(err);
        setDataArchived([]);
      });
  };

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const DeliveryData = (id_checkout) => {
    axios
      .put(
        `${process.env.REACT_APP_MY_API_KEY}/checkout/put-checkout-id/${id_checkout}`
      )
      .then((res) => {
        console.log("Delivered product success");
        console.log(res);
        Swal.fire("Success", "Delivered product success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Delivered product failed");
        console.log(err);
        Swal.fire("Warning", "Delivered product failed", "error");
      });
  };
  const [key, setKey] = useState("active");
  return (
    <div>
      <NavbarAfterLogin />
      <div className="container text-start shadow rounded-2 mt-1 bg-white">
        <div className="row align-items-center">
          <div className="col-2">
            <h4 className="text-secondary pt-4 mb-4 ms-3">My Order</h4>
          </div>
        </div>
        <div className="row rounded-3">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="active" title="Active">
              <div className="bg-white">
                <div className="container mt-2 p-2 rounded ">
                  <h6 className="myfont3">Filter</h6>
                  <div className="container d-flex flex-row">
                    <div className="row">
                      <div className="col-5">
                        <div className="search">
                          <input
                            type="text"
                            className="form-control myfont3 rounded-3 "
                            value={inputData.search}
                            name="search"
                            onChange={handleChange}
                            placeholder="Search"
                            style={{ width: "530px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <table
                  className="table table-striped table-hover container"
                  style={{ color: "black" }}
                >
                  <thead>
                    <tr>
                      <th className="myfont3">Name Product</th>
                      <th className="myfont3">Status</th>
                      <th className="myfont3">Price Total</th>
                      <th className="myfont3">QTY</th>
                      <th className="myfont3">Action</th>
                      <th className="myfont3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {data.map((item, index) => (
                      <tr key={index + 1}>
                        <td className="myfont3">{item?.name_product}</td>
                        <td className="myfont3">{item?.name_status}</td>
                        <td className="myfont3">
                          Rp.{item?.total_transaction}
                        </td>
                        <td className="myfont3">{item?.qty_transaction}</td>
                        <td>
                          <button
                            className="btn btn-danger text-white"
                            key={item.id_checkout}
                            onClick={() =>
                              navigate(`/detail-order/${item.id_checkout}`)
                            }
                          >
                            Detail Order
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-warning text-white"
                            key={item.id_checkout}
                            onClick={() => DeliveryData(item.id_checkout)}
                          >
                            Change Status
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Tab>
            <Tab eventKey="delivered" title="Delivered">
              <div className="bg-white">
                <div className="container  mt-2 p-2 rounded ">
                  <h6 className="myfont3">Filter</h6>
                  <div className="container d-flex flex-row">
                    <div className="row">
                      <div className="col-5">
                        <div className="search ">
                          <input
                            type="text"
                            className="form-control myfont3 rounded-3 "
                            value={inputData.search}
                            name="search"
                            onChange={handleChange}
                            placeholder="Search"
                            style={{ width: "530px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <table
                  className="table table-striped table-hover container "
                  style={{ color: "black" }}
                >
                  <thead>
                    <tr>
                      <th className="myfont3">Name Product</th>
                      <th className="myfont3">Status</th>
                      <th className="myfont3">Price Total</th>
                      <th className="myfont3">QTY</th>
                      <th className="myfont3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {dataArchived.map((item, index) => (
                      <tr key={index + 1}>
                        <td className="myfont3">{item?.name_product}</td>
                        <td className="myfont3">{item?.name_status}</td>
                        <td className="myfont3">
                          Rp.{item?.total_transaction}
                        </td>
                        <td className="myfont3">{item?.qty_transaction}</td>
                        <td>
                          <button
                            className="btn btn-danger text-white"
                            key={item.id_checkout}
                            onClick={() =>
                              navigate(`/detail-order/${item.id_checkout}`)
                            }
                          >
                            Detail Order
                          </button>
                        </td>
                        {/* <td>
                          <button
                            className="btn btn-warning text-white"
                            key={item.id_product}
                            onClick={() => ActivatedData(item.id_product)}
                          >
                            Change Status
                          </button>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Order;
