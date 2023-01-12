/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import NavbarAfterLogin from "../../components/Navbar/NavbarAfterLogin";
import axios from "axios";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useNavigate } from "react-router-dom";

function History() {
  const [data, setData] = useState([]);
  const [dataDone, setDataDone] = useState([]);
  const token = localStorage.getItem("token");
  const [key, setKey] = useState("active");
  const navigate = useNavigate();
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [inputData, setInputData] = useState({
    search: "",
  });
  useEffect(() => {
    getData();
  }, [inputData.search]);
  useEffect(() => {
    getData();
  }, []);
  let getCheckout = `${process.env.REACT_APP_MY_API_KEY}/checkout/get-checkout?search=${inputData.search}`;
  const getData = () => {
    axios
      .get(getCheckout, user)
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
    getDataDone();
  }, [inputData.search]);
  useEffect(() => {
    getDataDone();
  }, []);
  let getCheckoutDone = `${process.env.REACT_APP_MY_API_KEY}/checkout/get-checkout-done?search=${inputData.search}`;
  const getDataDone = () => {
    axios
      .get(getCheckoutDone, user)
      .then((res) => {
        console.log(res.data.data);
        res.data && setDataDone(res.data.data);
      })
      .catch((err) => {
        console.log("Get Data Fail");
        console.log(err);
        setData([]);
      });
  };
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  return (
    <div>
      <NavbarAfterLogin />
      <div className="container text-start shadow rounded-2 mt-1 bg-white">
        <div className="row align-items-center">
          <div className="col-2">
            <h4 className="text-secondary pt-4 mb-4 ms-3">My History</h4>
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
                <div className="container mt-2 p-2 rounded mb-5 ">
                  <h6 className="myfont3 mb-4">Filter</h6>
                  <div className="container d-flex flex-row">
                    <div className="row">
                      <div className="col-5">
                        <div className="search ms-2">
                          <input
                            type="text"
                            className="form-control myfont3 rounded-3"
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
                      <th className="myfont3">Name</th>
                      <th className="myfont3">Status</th>
                      <th className="myfont3">Total Price</th>
                      <th className="myfont3">Action</th>
                      <th className="myfont3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {data.map((item, index) => (
                      <tr key={index + 1}>
                        <td className="myfont3">{item.name_product}</td>
                        <td className="myfont3">{item.name_status}</td>
                        <td className="myfont3">Rp.{item.total_transaction}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            key={item.id_product}
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
                            key={item.id_product}
                            onClick={() => navigate(`/checkout`)}
                          >
                            Checkout
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Tab>
            <Tab eventKey="done" title="Done">
              <div className="bg-white">
                <div className="container  mt-2 p-2 rounded mb-2 ">
                  <h6 className="myfont3">Filter</h6>
                  <div className="container d-flex flex-row">
                    <div className="row">
                      <div className="col-5">
                        <div className="search ms-2">
                          <input
                            type="text"
                            className="form-control myfont3 rounded-3"
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
                      <th className="myfont3">Name</th>
                      <th className="myfont3">Category</th>
                      <th className="myfont3">Total Price</th>
                      <th className="myfont3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {dataDone.map((item, index) => (
                      <tr key={index + 1}>
                        <td className="myfont3">{item.name_product}</td>
                        <td className="myfont3">{item.name_status}</td>
                        <td className="myfont3">Rp.{item.total_transaction}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            key={item.id_product}
                            onClick={() =>
                              navigate(`/detail-order/${item.id_checkout}`)
                            }
                          >
                            Detail Order
                          </button>
                        </td>
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

export default History;
