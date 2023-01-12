/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const EditProduct = () => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");
  const [photo_product, setPhoto] = useState("");

  console.log("ini token", token);
  const navigate = useNavigate();
  const { id_product } = useParams();
  console.log(id_product);

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let getData = `${process.env.REACT_APP_MY_API_KEY}/products/detail/${id_product}`;
  useEffect(() => {
    axios
      .get(getData, user)
      .then((res) => {
        console.log("Get detail product success");
        console.log(res.data.data[0]);
        res.data && setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log("Get detail product fail");
        console.log(err);
      });
  }, []);
  const [postData, setPostData] = useState({
    name_product: data?.name_product,
    stock_product: data?.stock_product,
    price_product: data?.price_product,
    category_id: data?.category_id,
    brand_product: data?.brand_product,
    description_product: data?.description_product,
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
    formData.append("name_product", postData.name_product);
    formData.append("stock_product", postData.stock_product);
    formData.append("price_product", postData.price_product);
    formData.append("category_id", postData.category_id);
    formData.append("brand_product", postData.brand_product);
    formData.append("description_product", postData.description_product);
    formData.append("photo_product", photo_product);
    console.log(formData);
    axios
      .put(
        `${process.env.REACT_APP_MY_API_KEY}/products/${id_product}`,
        formData,
        user
      )
      .then((res) => {
        console.log("Put product success");
        console.log(res);
        Swal.fire("Success", "Put product success", "success");
        navigate(`/product`);
      })
      .catch((err) => {
        console.log("Put product failed");
        console.log(err);
        Swal.fire("Warning", "Put product failed", "error");
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
            <h3 className="myfont4 mt-4">Product</h3>
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
                  <h6 className="myfont3 color-font">Name product</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={data?.name_product}
                  className="myfont3"
                  name="name_product"
                  onChange={(e) => handleChange(e)}
                  value={postData.name_product}
                />
              </Form.Group>
            </div>
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Stock product</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={data?.stock_product}
                  className="myfont3"
                  name="stock_product"
                  onChange={(e) => handleChange(e)}
                  value={postData.stock_product}
                />
              </Form.Group>
            </div>
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Price product</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={data?.price_product}
                  className="myfont3"
                  name="price_product"
                  onChange={(e) => handleChange(e)}
                  value={postData.price_product}
                />
              </Form.Group>
            </div>
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Category id</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={data?.category_id}
                  className="myfont3"
                  name="category_id"
                  onChange={(e) => handleChange(e)}
                  value={postData.category_id}
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
                    name="photo_product"
                    onChange={handlePhotoChange}
                  />
                </div>
              </div>
            </Form.Group>
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Brand product</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={data?.brand_product}
                  className="myfont3"
                  name="brand_product"
                  onChange={(e) => handleChange(e)}
                  value={postData.brand_product}
                />
              </Form.Group>
            </div>
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Description product</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={data?.description_product}
                  className="myfont3"
                  name="description_product"
                  onChange={(e) => handleChange(e)}
                  value={postData.description_product}
                />
              </Form.Group>
            </div>
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
                Update product
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default EditProduct;
