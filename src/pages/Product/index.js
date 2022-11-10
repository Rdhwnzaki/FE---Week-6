import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Product.module.css";

export default function Product() {
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [inputData, setInputData] = useState({
    name_product: "",
    stock_product: "",
    price_product: "",
    category_id: "1",
  });

  let product = "http://localhost:3000/products/";
  useEffect(() => {
    axios
      .get(product)
      .then((res) => {
        console.log("get data success");
        console.log(res.data.product);
        res.data && setData(res.data.product);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", inputData.name);
    formData.append("stock", inputData.stock);
    formData.append("price", inputData.price);
    formData.append("category_id", inputData.category_id);
    formData.append("photo", photo);
    console.log(formData);
    axios
      .post("http://localhost:3000/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("input data success");
        console.log(res);
      })
      .catch((err) => {
        console.log("input data fail");
        console.log(err);
      });
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
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
      {/* post data */}
      <form onSubmit={postForm} className="container mt-3 p-2 border">
        <input
          type="text"
          value={inputData.name}
          name="name"
          onChange={handleChange}
          placeholder="nama"
        />
        <input
          type="number"
          value={inputData.stock}
          name="stock"
          onChange={handleChange}
          placeholder="stock"
        />
        <input
          type="number"
          value={inputData.price}
          name="price"
          onChange={handleChange}
          placeholder="price"
        />
        <input
          type="file"
          name="photo"
          onChange={handlePhoto}
          placeholder="photo"
        />

        <button className="btn btn-primary" type="submit">
          input
        </button>
      </form>

      {/* get data */}
      <table className="table">
        <thead>
          <tr>
            <th>number</th>
            <th>nama</th>
            <th>stock</th>
            <th>harga</th>
            <th>photo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{item.name_product}</td>
              <td>{item.stock_product}</td>
              <td>{item.price_product}</td>
              <td>
                <img src={item.photo} className={styles.photo} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
