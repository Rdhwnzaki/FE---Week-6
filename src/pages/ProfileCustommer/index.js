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
import ModalEditPhoto from "../../components/Modal/ModalEditPhoto";

export default function ProfileCustommer() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
    Swal.fire("Success", "Logout success", "success");
  };
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [data, setData] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  let users = "http://localhost:3000/users/profile";
  useEffect(() => {
    axios
      .get(users, user)
      .then((res) => {
        console.log("get data success");
        console.log(res.data.data[0]);
        res.data && setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  // const [photo_user, setPhotoUser] = useState(null);
  const [updateData, setUpdateData] = useState({
    fullname_user: data?.fullname_user,
    email_user: data?.email_user,
    phone_user: data?.phone_user,
    gender_user: data?.gender_user,
    date_user: data?.date_user,
    address_user: data?.address_user,
  });

  // const handlePhotoChange = (e) => {
  //   setPhotoUser(e.target.files[0]);
  //   console.log(e.target.files[0]);
  // };

  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname_user", updateData.fullname_user);
    formData.append("email_user", updateData.email_user);
    formData.append("phone_user", updateData.phone_user);
    formData.append("gender_user", updateData.gender_user);
    formData.append("date_user", updateData.date_user);
    formData.append("address_user", updateData.address_user);
    console.log(formData);
    axios
      .put(`http://localhost:3000/users/edit-profile`, formData, user, {
        "content-type": "multipart/form-data",
      })
      .then((res) => {
        console.log("Update profile succes");
        console.log(res);
        window.location.reload(false);
        Swal.fire("Success", "Update profile success", "success");
      })
      .catch((err) => {
        console.log("Update data profile failed");
        console.log(err);
        Swal.fire("Warning", "Update profile failed", "error");
      });
  };
  return (
    <div className="bg-light w-100 h-100 d-flex flex-row">
      <div
        className="col-3 d-flex flex-column pt-5 "
        style={{ height: "90vh", backgroundColor: "white" }}
      >
        <div className="justify-content-center d-flex flex-row ">
          <div className="d-flex flex-row h-25 justify-content-center ">
            <img
              src={data?.photo_user}
              alt=""
              className="img rounded-pill"
              style={{ height: "110px", width: "110px" }}
            />
            <div className="d-flex flex-column h-50 mt-3 ms-2">
              <h6 className="myfont ms-3">{data?.fullname_user}</h6>
              <ModalEditPhoto />
            </div>
          </div>
        </div>

        <div className="w-50 justify-content-center d-flex flex-column mt-5 ms-5">
          <Link to="/history">
            <button className="myfont3 btn">
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
              History
            </button>
          </Link>
          <Link to="/mybag">
            <button className="myfont3 btn mb-5">
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
              Cart
            </button>
          </Link>
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
                  name="fullname_user"
                  placeholder={data?.fullname_user}
                  onChange={(e) => handleChange(e)}
                  value={updateData.fullname_user}
                />
              </div>
            </div>
            <div className="col col-12 row ">
              <div className="col col-3 myfont3">Email</div>
              <div className="col col-9">
                <input
                  type="text"
                  className="form-control  mb-3 myfont3"
                  name="email_user"
                  placeholder={data?.email_user}
                  onChange={(e) => handleChange(e)}
                  value={updateData.email_user}
                />
              </div>
            </div>
            <div className="col col-12 row ">
              <div className="col col-3 myfont3">Address</div>
              <div className="col col-9">
                <input
                  type="text"
                  className="form-control  mb-3 myfont3"
                  name="address_user"
                  placeholder={data?.address_user}
                  onChange={(e) => handleChange(e)}
                  value={updateData.address_user}
                />
              </div>
            </div>
            <div className="col col-12 row ">
              <div className="col col-3 myfont3">Phone Number</div>
              <div className="col col-9">
                <input
                  type="text"
                  className="form-control  mb-3 myfont3"
                  name="phone_user"
                  placeholder={data?.phone_user}
                  onChange={(e) => handleChange(e)}
                  value={updateData.phone_user}
                />
              </div>
            </div>
            <div className="col col-12 row ">
              <div className="col col-3 myfont3">Gender</div>
              <div className="col col-9 row mb-3">
                <input
                  type="text"
                  className="form-control  mb-3 myfont3 ms-2"
                  name="gender_user"
                  placeholder={data?.gender_user}
                  onChange={(e) => handleChange(e)}
                  value={updateData.gender_user}
                />
              </div>
              <div className="col col-12 row  mt-3">
                <div className="col col-3 myfont3">Date of birth</div>
                <div className="col col-9">
                  <input
                    type="date"
                    className="form-control  mb-3 myfont3"
                    name="date_user"
                    placeholder={data?.date_user}
                    onChange={(e) => handleChange(e)}
                    value={updateData.date_user}
                  />
                </div>
              </div>
            </div>
            <div className="col col-12 row mb-3">
              <button
                className="col col-3  btn btn-danger rounded-pill"
                onClick={(e) => handleData(e)}
              >
                <h6 className="myfont3 mt-1">Save</h6>
              </button>
            </div>
          </div>
          <div className="col col-4">
            <img src={data?.photo_user} className={styles.image} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}
