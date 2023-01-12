/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const EditCategory = () => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");
  const [photo_category, setPhoto] = useState("");

  console.log("ini token", token);
  const navigate = useNavigate();
  const { id_category } = useParams();
  console.log(id_category);

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [postData, setPostData] = useState({
    name_category: data?.name_product,
  });
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const handleData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name_category", postData.name_category);
    formData.append("photo_category", photo_category);
    console.log(formData);
    axios
      .put(
        `${process.env.REACT_APP_MY_API_KEY}/category/edit/${id_category}`,
        formData,
        user
      )
      .then((res) => {
        console.log("Put category success");
        console.log(res);
        Swal.fire("Success", "Put category success", "success");
        navigate(`/product`);
      })
      .catch((err) => {
        console.log("Put category failed");
        console.log(err);
        Swal.fire("Warning", "Put category failed", "error");
      });
  };
  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  return (
    <div>
      <div className="container text-start shadow rounded-2 mt-5">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="myfont4 mt-4">Category</h3>
          </div>
          <hr />
        </div>
        <Form>
          <div className="row">
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Name category</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={data?.name_category}
                  className="myfont3"
                  name="name_category"
                  onChange={(e) => handleChange(e)}
                  value={postData.name_category}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h6 className="myfont3 color-font">Upload gambar</h6>
              </Form.Label>
              <div className="row">
                <div className="col-lg-12">
                  <Form.Control
                    type="file"
                    className="myfont3"
                    name="photo_category"
                    onChange={handlePhotoChange}
                  />
                </div>
              </div>
            </Form.Group>
            <hr className="mt-1" />
            <div className="col-lg-12 align-items-center mb-5 mt-1">
              <button
                className="btn btn-danger text-white"
                type="submit"
                onClick={(e) => handleData(e)}
                style={{
                  width: "1230px",
                  marginLeft: "26px",
                }}
              >
                Update category
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default EditCategory;
