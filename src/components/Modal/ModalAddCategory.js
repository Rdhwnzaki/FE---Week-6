import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Swal from "sweetalert2";
import { Form } from "react-bootstrap";

function ModalAddCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState(null);
  const [photo_category, setPhotoCategory] = useState(null);
  const token = localStorage.getItem("token");
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [postData, setPostData] = useState({
    name_category: data?.name_category,
  });
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const handlePhotoChange = (e) => {
    setPhotoCategory(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name_category", postData.name_category);
    formData.append("photo_category", photo_category);
    console.log(formData);
    axios
      .post(
        `${process.env.REACT_APP_MY_API_KEY}/category/post-category`,
        formData,
        user,
        {
          "content-type": "multipart/form-data",
        }
      )
      .then((res) => {
        console.log("Post category success");
        console.log(res);
        Swal.fire("Success", "Post category success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Post category failed");
        console.log(err);
        Swal.fire("Warning", "Post category failed", "error");
      });
  };
  return (
    <div>
      <button className="btn btn-danger rounded-4" onClick={handleShow}>
        Add Category
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h6 className="myfont3 color-font">Name category</h6>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukan nama category"
              className="myfont3"
              name="name_category"
              onChange={(e) => handleChange(e)}
              value={postData.name_category}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h6 className="myfont3 color-font">Photo category</h6>
            </Form.Label>
            <Form.Control
              type="file"
              name="photo_category"
              onChange={handlePhotoChange}
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

export default ModalAddCategory;
