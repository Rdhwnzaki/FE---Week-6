/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Swal from "sweetalert2";
import ModalAddCategory from "./ModalAddCategory";

function ModalCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let getData = `${process.env.REACT_APP_MY_API_KEY}/category`;
  useEffect(() => {
    axios
      .get(getData, user)
      .then((res) => {
        console.log("Get category success");
        console.log(res.data.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("Get category fail");
        console.log(err);
      });
  }, []);
  const DeleteCategory = (id_category) => {
    axios
      .delete(
        `${process.env.REACT_APP_MY_API_KEY}/category/delete/${id_category}`,
        user
      )
      .then((res) => {
        console.log("Delete category success");
        console.log(res);
        Swal.fire("Success", "Delete category success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Delete category failed");
        console.log(err);
        Swal.fire("Warning", "Delete category failed", "error");
      });
  };
  return (
    <div>
      <button
        className="btn btn-warning text-white"
        style={{
          height: "40px",
          width: "130px",
          marginLeft: "950px",
          marginTop: "-90px",
        }}
        onClick={handleShow}
      >
        Category
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalAddCategory />
        </Modal.Body>
        <Modal.Body>
          <div className="row mt-4">
            {data ? (
              data.map((item) => (
                <div key={item.id_category}>
                  <div className="col-1">
                    <img
                      src={item?.photo_category}
                      alt=""
                      style={{ height: "98px", width: "90px" }}
                    />
                  </div>
                  <div
                    key={item.id_category}
                    className="col-9 offset-1"
                    style={{ marginLeft: "100px", marginTop: "-80px" }}
                  >
                    <h5 className="myfont">{item?.name_category}</h5>
                    {/* <button
                      className="btn"
                      style={{
                        width: "90px",
                        height: "40px",
                        backgroundColor: "#FBB017",
                        color: "white",
                      }}
                      key={item.id_category}
                      onClick={() =>
                        navigate(`/edit-category/${item.id_category}`)
                      }
                    >
                      Edit
                    </button> */}
                    <button
                      className="btn"
                      style={{
                        width: "90px",
                        height: "40px",
                        backgroundColor: "red",
                        color: "white",
                        marginLeft: "20px",
                      }}
                      key={item.id_category}
                      onClick={() => DeleteCategory(item.id_category)}
                    >
                      Hapus
                    </button>
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <h1>...Loading</h1>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCategory;
