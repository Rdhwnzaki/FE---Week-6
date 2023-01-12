import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Swal from "sweetalert2";
import { Form } from "react-bootstrap";

function ModalAddProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState(null);
  const [photo_product, setPhotoProduct] = useState(null);
  const token = localStorage.getItem("token");
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
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
  const handlePhotoChange = (e) => {
    setPhotoProduct(e.target.files[0]);
    console.log(e.target.files[0]);
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
      .post(
        `${process.env.REACT_APP_MY_API_KEY}/products/post-product`,
        formData,
        user,
        {
          "content-type": "multipart/form-data",
        }
      )
      .then((res) => {
        console.log("Post product success");
        console.log(res);
        Swal.fire("Success", "Post product success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Post product failed");
        console.log(err);
        Swal.fire("Warning", "Post product failed", "error");
      });
  };

  return (
    <div>
      <button
        className="btn btn-warning text-white"
        style={{
          height: "40px",
          width: "130px",
          marginLeft: "1100px",
          marginTop: "-136px",
        }}
        onClick={handleShow}
      >
        Add Product
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h6 className="myfont3 color-font">Name product</h6>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukan nama product"
              className="myfont3"
              name="name_product"
              onChange={(e) => handleChange(e)}
              value={postData.name_product}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h6 className="myfont3 color-font">Stock product</h6>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukan nama product"
              className="myfont3"
              name="stock_product"
              onChange={(e) => handleChange(e)}
              value={postData.stock_product}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h6 className="myfont3 color-font">Price product</h6>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukan nama product"
              className="myfont3"
              name="price_product"
              onChange={(e) => handleChange(e)}
              value={postData.price_product}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h6 className="myfont3 color-font">Category id product</h6>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukan nama product"
              className="myfont3"
              name="category_id"
              onChange={(e) => handleChange(e)}
              value={postData.category_id}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h6 className="myfont3 color-font">Photo product</h6>
            </Form.Label>
            <Form.Control
              type="file"
              name="photo_product"
              onChange={handlePhotoChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h6 className="myfont3 color-font">Brand product</h6>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukan nama product"
              className="myfont3"
              name="brand_product"
              onChange={(e) => handleChange(e)}
              value={postData.brand_product}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h6 className="myfont3 color-font">Description product</h6>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukan nama product"
              className="myfont3"
              name="description_product"
              onChange={(e) => handleChange(e)}
              value={postData.description_product}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="white" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={(e) => handleData(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalAddProduct;
