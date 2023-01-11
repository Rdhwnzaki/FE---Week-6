/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";
import ModalAddProduct from "../Modal/ModalAddProduct";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ModalCategory from "../Modal/ModalCategory";

function NavTabs() {
  const [data, setData] = useState([]);
  const [dataArchived, setDataArchived] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    search: "",
  });
  const [sortBy, setSortBy] = useState("name_product");
  const [sort, setSort] = useState("asc");
  useEffect(() => {
    console.log("checked", sortBy);
    getData();
  }, [sortBy, sort, inputData.search]);
  useEffect(() => {
    getData();
  }, []);
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let users = `http://localhost:3000/products/product-user?sortby=${sortBy}&sort=${sort}&search=${inputData.search}`;
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
    console.log("checked", sortBy);
    getDataArchived();
  }, [sortBy, sort, inputData.search]);
  useEffect(() => {
    getDataArchived();
  }, []);
  let archived = `http://localhost:3000/products/product-archived?sortby=${sortBy}&sort=${sort}&search=${inputData.search}`;
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
  const ArchivedData = (id_product) => {
    axios
      .put(`http://localhost:3000/products/set-archived/${id_product}`, user)
      .then((res) => {
        console.log("Archived product success");
        console.log(res);
        Swal.fire("Success", "Archived product success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Archived product failed");
        console.log(err);
        Swal.fire("Warning", "Archived product failed", "error");
      });
  };
  const ActivatedData = (id_product) => {
    axios
      .put(`http://localhost:3000/products/set-activated/${id_product}`, user)
      .then((res) => {
        console.log("Activated product success");
        console.log(res);
        Swal.fire("Success", "Activated product success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Activated product failed");
        console.log(err);
        Swal.fire("Warning", "Activated product failed", "error");
      });
  };
  const [key, setKey] = useState("all-item");
  return (
    <div className="container text-start shadow rounded-2 mt-1 bg-white">
      <div className="row align-items-center">
        <div className="col-2">
          <h4 className="text-secondary pt-4 mb-4 ms-3">My Products</h4>
        </div>
        <ModalCategory />
        <ModalAddProduct />
      </div>
      <div className="row rounded-3">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="all-item" title="All Items">
            <div className="bg-white">
              <div className="container mt-2 p-2 rounded mb-5 ">
                <h6 className="myfont3 mb-4">Filter</h6>
                <div className="container d-flex flex-row">
                  <div className="">
                    <div
                      className={`btn ${
                        sortBy === "name_product"
                          ? "btn-danger"
                          : "btn-outline-danger"
                      } ms-1`}
                      onClick={() => setSortBy("name_product")}
                      style={{ width: "100px", borderRadius: "10px" }}
                    >
                      <h6 className="myfont3 mt-1">Name</h6>
                    </div>
                    <div
                      className={`btn ${
                        sortBy === "stock-product"
                          ? "btn-danger"
                          : "btn-outline-danger"
                      } ms-3`}
                      onClick={() => setSortBy("stock_product")}
                      style={{ width: "100px", borderRadius: "10px" }}
                    >
                      <h6 className="myfont3 mt-1">Stock</h6>
                    </div>
                    <div
                      className={`btn ${
                        sortBy === "price_product"
                          ? "btn-danger"
                          : "btn-outline-danger"
                      } ms-3`}
                      onClick={() => setSortBy("price_product")}
                      style={{ width: "100px", borderRadius: "10px" }}
                    >
                      <h6 className="myfont3 mt-1">Price</h6>
                    </div>
                  </div>
                  <div className="ms-5 border-start border-dark">
                    <div
                      className={`btn ${
                        sort === "asc" ? "btn-danger" : "btn-outline-danger"
                      } ms-5`}
                      onClick={() => setSort("asc")}
                      style={{ width: "100px", borderRadius: "10px" }}
                    >
                      <h6 className="myfont3 mt-1">ASC</h6>
                    </div>
                    <div
                      className={`btn ${
                        sort === "desc" ? "btn-danger" : "btn-outline-danger"
                      } ms-3`}
                      onClick={() => setSort("desc")}
                      style={{ width: "100px", borderRadius: "10px" }}
                    >
                      <h6 className="myfont3 mt-1">DESC</h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-5">
                      <div className="search ms-2">
                        <input
                          type="text"
                          className="form-control myfont3 rounded-3 ms-5"
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
                    <th className="myfont3">Category</th>
                    <th className="myfont3">Stock</th>
                    <th className="myfont3">Price</th>
                    <th className="myfont3">Photo</th>
                    <th className="myfont3">Action</th>
                    <th className="myfont3">Action</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {data.map((item, index) => (
                    <tr key={index + 1}>
                      <td className="myfont3">{item.name_product}</td>
                      <td className="myfont3">{item.category}</td>
                      <td className="myfont3">{item.stock_product}</td>
                      <td className="myfont3">Rp.{item.price_product}</td>
                      <td className="myfont3">
                        <img
                          src={item.photo_product}
                          style={{ height: "120px", width: "120px" }}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-warning text-white"
                          key={item.id_product}
                          onClick={() =>
                            navigate(`/edit-product/${item.id_product}`)
                          }
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          key={item.id_product}
                          onClick={() => ArchivedData(item.id_product)}
                        >
                          Archive
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Tab>
          <Tab eventKey="archive" title="Archived">
            <div className="bg-white">
              <div className="container  mt-2 p-2 rounded mb-2 ">
                <h6 className="myfont3">Filter</h6>
                <div className="container d-flex flex-row">
                  <div className="">
                    <div
                      className={`btn ${
                        sortBy === "name_product"
                          ? "btn-danger"
                          : "btn-outline-danger"
                      } ms-1`}
                      onClick={() => setSortBy("name_product")}
                      style={{ width: "100px", borderRadius: "10px" }}
                    >
                      <h6 className="myfont3 mt-1">Name</h6>
                    </div>
                    <div
                      className={`btn ${
                        sortBy === "stock-product"
                          ? "btn-danger"
                          : "btn-outline-danger"
                      } ms-3`}
                      onClick={() => setSortBy("stock_product")}
                      style={{ width: "100px", borderRadius: "10px" }}
                    >
                      <h6 className="myfont3 mt-1">Stock</h6>
                    </div>
                    <div
                      className={`btn ${
                        sortBy === "price_product"
                          ? "btn-danger"
                          : "btn-outline-danger"
                      } ms-3`}
                      onClick={() => setSortBy("price_product")}
                      style={{ width: "100px", borderRadius: "10px" }}
                    >
                      <h6 className="myfont3 mt-1">Price</h6>
                    </div>
                  </div>
                  <div className="ms-5 border-start border-dark">
                    <div
                      className={`btn ${
                        sort === "asc" ? "btn-danger" : "btn-outline-danger"
                      } ms-5`}
                      onClick={() => setSort("asc")}
                      style={{ width: "100px", borderRadius: "10px" }}
                    >
                      <h6 className="myfont3 mt-1">ASC</h6>
                    </div>
                    <div
                      className={`btn ${
                        sort === "desc" ? "btn-danger" : "btn-outline-danger"
                      } ms-3`}
                      onClick={() => setSort("desc")}
                      style={{ width: "100px", borderRadius: "10px" }}
                    >
                      <h6 className="myfont3 mt-1">DESC</h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-5">
                      <div className="search ms-2">
                        <input
                          type="text"
                          className="form-control myfont3 rounded-3 ms-5"
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
                    <th className="myfont3">Stock</th>
                    <th className="myfont3">Price</th>
                    <th className="myfont3">Photo</th>
                    <th className="myfont3">Action</th>
                    <th className="myfont3">Action</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {dataArchived.map((item, index) => (
                    <tr key={index + 1}>
                      <td className="myfont3">{item.name_product}</td>
                      <td className="myfont3">{item.category}</td>
                      <td className="myfont3">{item.stock_product}</td>
                      <td className="myfont3">Rp.{item.price_product}</td>
                      <td className="myfont3">
                        <img
                          src={item.photo_product}
                          style={{ height: "120px", width: "120px" }}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-warning text-white"
                          key={item.id_product}
                          onClick={() =>
                            navigate(`/edit-product/${item.id_product}`)
                          }
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          key={item.id_product}
                          onClick={() => ActivatedData(item.id_product)}
                        >
                          Activated
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
  );
}
export default NavTabs;
