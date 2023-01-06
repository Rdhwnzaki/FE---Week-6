import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import DatePicker from "react-datepicker";
import homelogo from "../../image/homelogo.png";
import cube from "../../image/cube.png";
import Accordion from "react-bootstrap/Accordion";
import cart from "../../image/shopping-cart (3) 1.png";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Profile() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
    Swal.fire("Success", "Logout success", "success");
  };

  const [data, setData] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  let users = "https://jsonplaceholder.typicode.com/users/1";
  useEffect(() => {
    axios
      .get(users)
      .then((res) => {
        console.log("get data success");
        console.log(res);
        res.data && setData(res.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-light w-100 h-100 d-flex flex-row">
      <div
        className="col-3 d-flex flex-column pt-5 "
        style={{ height: "90vh", backgroundColor: "white" }}
      >
        <div className="justify-content-center d-flex flex-row ">
          <div className="d-flex flex-row h-25 justify-content-center ">
            <img
              src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg"
              alt=""
              className="img rounded-pill"
              style={{ height: "120px" }}
            />
            <div className="d-flex flex-column h-50 mt-3 ms-2">
              <h6 className="myfont   ">Johanes Michael</h6>
              <p>
                <img src={Image.edit} alt="" />
                Ubah profile
              </p>
            </div>
          </div>
        </div>

        <div className="w-50 justify-content-center d-flex flex-column mt-5 ms-5">
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p className="myfont3">
                  <div
                    className="btn mx-2"
                    style={{
                      backgroundColor: "#456BF3",
                      borderRadius: "50px",
                      width: "40px",
                    }}
                  >
                    <img src={homelogo} alt="" />
                  </div>
                  Store
                </p>
              </Accordion.Header>
              <Accordion.Body>
                <Link to="/profile">
                  <button className="btn">
                    <p className=" myfont3">Store Profile</p>
                  </button>
                </Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p className="myfont3">
                  <div
                    className="btn mx-2"
                    style={{
                      backgroundColor: "#F36F45",
                      borderRadius: "50px",
                      width: "40px",
                    }}
                  >
                    <img src={cube} alt="" />
                  </div>
                  Product
                </p>
              </Accordion.Header>
              <Accordion.Body>
                <Link to="/product">
                  <button className="btn">
                    <p className=" myfont3">My Product</p>
                  </button>
                </Link>
              </Accordion.Body>
              <Accordion.Body>
                <Link to="/selling">
                  <button className="btn">
                    <p className=" myfont3">Selling products</p>
                  </button>
                </Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p className="myfont3">
                  <div
                    className="btn mx-2"
                    style={{
                      backgroundColor: "#F3456F",
                      borderRadius: "50px",
                      width: "40px",
                    }}
                  >
                    <img src={cart} alt="" />
                  </div>
                  Order
                </p>
              </Accordion.Header>
              <Accordion.Body>
                <p className="myfont3">My Order</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <button
            className="btn btn-danger btn-small rounded-pill"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="container p-5">
        <h1 className="myfont3">My Profile</h1>
        <h5 className="myfont3 color-font mb-3">
          Manage your profile information
        </h5>
        <div className={styles.line}></div>

        <div className="container col-12 row">
          <div className="col col-8 row">
            {/* form */}
            <div className="col col-12 row ">
              <div className="col col-3 myfont3">Name</div>
              <div className="col col-9">
                <input
                  type="text"
                  className="form-control mb-3 myfont3"
                  value={data ? data.name : "data not found"}
                />
              </div>
            </div>
            <div className="col col-12 row ">
              <div className="col col-3 myfont3">Email</div>
              <div className="col col-9">
                <input
                  type="text"
                  className="form-control  mb-3 myfont3"
                  value={data ? data.email : "data not found"}
                />
              </div>
            </div>
            <div className="col col-12 row ">
              <div className="col col-3 myfont3">Phone Number</div>
              <div className="col col-9">
                <input
                  type="text"
                  className="form-control  mb-3 myfont3"
                  value={data ? data.phone : "data not found"}
                />
              </div>
            </div>
            <div className="col col-12 row mb-3">
              <div className="col col-3 myfont3">Store description</div>
              <div className="col col-9">
                <textarea class="form-control" id="floatingTextarea"></textarea>
              </div>
            </div>
            <div className="col col-12 row mb-3">
              <div className="col col-3  btn btn-danger rounded-pill">
                <h6 className="myfont3 mt-1">Save</h6>
              </div>
            </div>
            <div className="col col-12 row ">
              <div className="col col-3 myfont3">Gender</div>
              <div className="col col-9 row mb-3">
                <div c>
                  <input
                    class="form-check-input mt-1"
                    type="radio"
                    value=""
                    aria-label="Radio button for following text input"
                    name="gender"
                    id="gender1"
                  />
                  <span className="ms-2 myfont3">Laki-Laki</span>
                  <input
                    class="form-check-input mt-1 ms-2"
                    type="radio"
                    value=""
                    aria-label="Radio button for following text input"
                    name="gender"
                    id="gender"
                  />
                  <span className="ms-2 myfont3">Perempuan</span>
                  <div></div>
                </div>
              </div>
              <div className="col col-12 row  mt-3">
                <div className="col col-3 myfont3">Date of birth</div>
                <div className="col col-9">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="myfont3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col col-4">
            <img
              src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg"
              className={styles.image}
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
