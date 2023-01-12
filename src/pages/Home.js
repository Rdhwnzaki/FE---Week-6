/* eslint-disable react-hooks/exhaustive-deps */
import Carousel from "react-bootstrap/Carousel";
import React, { useState, useEffect } from "react";
import axios from "axios";
import carousel1 from "../image/curousel1.png";
import carousel2 from "../image/curousel2.png";
import carousel3 from "../image/curousel3.png";
import carousel4 from "../image/curousel4.png";
import carousel5 from "../image/curousel5.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavbarBeforeLogin from "../components/Navbar/NavbarBeforeLogin";
import NavbarAfterLogin from "../components/Navbar/NavbarAfterLogin";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const settings = {
    autoPlay: true,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [data, setData] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const product = `${process.env.REACT_APP_MY_API_KEY}/products`;
  useEffect(() => {
    const getdata = async () => {
      try {
        let result = await axios.get(product);
        setData(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_MY_API_KEY}/category`, user)
      .then((res) => {
        console.log("Get category success");
        console.log(res.data);
        res.data && setDataCategory(res.data.data);
      })
      .catch((err) => {
        console.log("Get category fail");
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <div>
      {token ? <NavbarAfterLogin /> : <NavbarBeforeLogin />}
      <div className="container-fluid bg-new">
        <div className="container py-5">
          <Carousel fade {...settings}>
            <Carousel.Item>
              <img
                className="carousel-image"
                src={carousel1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="align-font-carousel myfont">Trends In 2022</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src={carousel2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 className="align-font-carousel myfont">Black Edition</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src={carousel3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className="align-font-carousel myfont">Top Shoes</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src={carousel4}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className="align-font-carousel myfont">Sports</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src={carousel5}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className="align-font-carousel myfont">Formal Outfit</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <h1 className="myfont text-title">Category</h1>
          <h5 className="text-sub">What are you currently looking for</h5>
          <div className="container">
            <div className="container">
              <div
                className="row row-cols-1 row-cols-md-5 g-4"
                style={{ marginTop: "8px" }}
              >
                {dataCategory ? (
                  dataCategory.map((item) => (
                    <div className="col-2" key={item.id_category}>
                      <div
                        className=""
                        style={{ width: "90px" }}
                        onClick={() =>
                          navigate(`/category/${item.id_category}`)
                        }
                      >
                        <img
                          src={item.photo_category}
                          style={{
                            height: "120px",
                            backgroundColor: "#D85050",
                            width: "120px",
                            borderRadius: "10%",
                          }}
                          alt=""
                        />
                        <h3
                          className="text-product"
                          style={{
                            marginTop: "-40px",
                            marginLeft: "36px",
                            color: "#f5f5f5",
                          }}
                        >
                          {item.name_category}
                        </h3>
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>...Loading</h1>
                )}
              </div>
            </div>
          </div>
          <h1 className="myfont text-title">New</h1>
          <h5 className="text-sub">You’ve never seen it before!</h5>
          <div className="container">
            <div
              className="row row-cols-1 row-cols-md-5 g-4"
              style={{ marginTop: "8px" }}
            >
              {data ? (
                data.map((item) => (
                  <div className="col-2" key={item.id_product}>
                    <div
                      className="card"
                      style={{ width: "210px" }}
                      onClick={() =>
                        navigate(`/productdetail/${item.id_product}`)
                      }
                    >
                      <img
                        src={item.photo_product}
                        style={{ height: "200px" }}
                        alt=""
                      />
                      <div className="card-body">
                        <h3 className="text-product">{item.name_product}</h3>
                        <h4 className="text-price">{item.price_product}</h4>
                        <h5 className="text-brand">{item.brand_product}</h5>
                        <h6>
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                        </h6>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>...Loading</h1>
              )}
            </div>
          </div>
          <h1 className="myfont text-title">Popular</h1>
          <h5 className="text-sub">Find clothes that are trending recently</h5>
          <div className="container">
            <div
              className="row row-cols-1 row-cols-md-5 g-4"
              style={{ marginTop: "8px" }}
            >
              {data ? (
                data.map((item) => (
                  <div className="col-2" key={item.id_product}>
                    <div
                      className="card"
                      style={{ width: "210px" }}
                      onClick={() =>
                        navigate(`/productdetail/${item.id_product}`)
                      }
                    >
                      <img
                        src={item.photo_product}
                        style={{ height: "200px" }}
                        alt=""
                      />
                      <div className="card-body">
                        <Link to="/productdetail" className="link-product">
                          <h3 className="text-product">{item.name_product}</h3>
                        </Link>
                        <h4 className="text-price">{item.price_product}</h4>
                        <h5 className="text-brand">{item.brand_product}</h5>
                        <h6>
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                        </h6>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>...Loading</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
