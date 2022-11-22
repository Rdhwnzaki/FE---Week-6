import Carousel from 'react-bootstrap/Carousel';
import React,{useState, useEffect} from "react";
import axios from 'axios';
import Slider from "react-slick";
import carousel1 from "../image/curousel1.png";
import carousel2 from "../image/curousel2.png";
import carousel3 from "../image/curousel3.png";
import carousel4 from "../image/curousel4.png";
import carousel5 from "../image/curousel5.png";
import tshirt from "../image/tshirt.png"
import shorts from "../image/shorts.png"
import jacket from "../image/jacket.png"
import pants from "../image/pants.png"
import shoes from "../image/shoes.png"
import jam from  "../image/jam.png"
import jas from  "../image/jas.png"
import {FaStar} from "react-icons/fa"
import {Link}  from 'react-router-dom';
import NavbarBeforeLogin from '../components/Navbar/NavbarBeforeLogin';


function HomePage() {
  const settings = {
    autoPlay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3
  };
  const [data, setData] = useState([])
  const product = `${process.env.REACT_APP_MY_API_KEY}`
  useEffect(()=>{
    const getdata = async()=>{
      try {
        let result = await axios.get(product)
        setData(result.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    getdata()
  }, [])
  
  console.log(data)
  return (
    <div>
      <NavbarBeforeLogin/>
    <div className="container-fluid bg-new">
      <div className='container py-5'>
    <Carousel fade {...settings}>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={carousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='align-font-carousel myfont'>Trends In 2022</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={carousel2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='align-font-carousel myfont'>Black Edition</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={carousel3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='align-font-carousel myfont'>Top Shoes</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={carousel4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='align-font-carousel myfont'>Sports</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={carousel5}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='align-font-carousel myfont'>Formal Outfit</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h1 className='myfont text-title'>Category</h1>
    <h5 className='text-sub'>What are you currently looking for</h5>
    <div className="container">
        <Slider {...settings}>
        <div>
        <div className="cell">
            <div className="carousel-item active">
          <div
            className="box-wrapper justify-content-center"
            style={{marginTop:"20px"}}
            >
            <div className="box1">
              <Link to="/category">
              <img src={tshirt} id="cat-1" alt=''/>
              <h4 className="carousel-caption">T-Shirt</h4>
              </Link>
            </div>
          </div>
            </div>
          </div>
          </div>
        <div>
        <div className="cell">
            <div className="carousel-item active">
          <div
            className="box-wrapper justify-content-center"
            style={{marginTop:"20px"}}
            >
            <div className="box2">
              <Link to="/category">
              <img src={shorts} id="cat-2" alt=''/>
              <h4 className="carousel-caption">Shorts</h4>
              </Link>
            </div>
          </div>
            </div>
          </div>
          </div>
        <div>
        <div className="cell">
            <div className="carousel-item active">
          <div
            className="box-wrapper justify-content-center"
            style={{marginTop:"20px"}}
            >
            <div className="box3">
              <Link to="/category">
              <img src={jacket} id="cat-3" alt=''/>
              <h4 className="carousel-caption">Jacket</h4>
              </Link>
            </div>
          </div>
            </div>
          </div>
          </div>
        <div>
        <div className="cell">
            <div className="carousel-item active">
          <div
            className="box-wrapper justify-content-center"
            style={{marginTop:"20px"}}
            >
            <div className="box4">
              <Link to="/category">
              <img src={pants} id="cat-4" alt=''/>
              <h4 className="carousel-caption">Pants</h4>
              </Link>
            </div>
          </div>
            </div>
          </div>
          </div>
        <div>
        <div className="cell">
            <div className="carousel-item active">
          <div
            className="box-wrapper justify-content-center"
            style={{marginTop:"20px"}}
          >
            <div className="box5">
              <Link to="/category">
              <img src={shoes} id="cat-5" alt=''/>
              <h4 className="carousel-caption">Shoes</h4>
              </Link>
            </div>
          </div>
            </div>
          </div>
          </div>
        <div>
        <div className="cell">
            <div className="carousel-item active">
          <div
            className="box-wrapper justify-content-center"
            style={{marginTop:"20px"}}
          >
            <div className="box6">
              <Link to="/category">
              <img src={jam} id="cat-4" alt=''/>
              <h4 className="carousel-caption">Watch</h4>
              </Link>
            </div>
          </div>
            </div>
          </div>
          </div>
        </Slider>
      </div>
      <h1 className='myfont text-title'>New</h1>
      <h5 className='text-sub'>You’ve never seen it before!</h5>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-5 g-4"style={{marginTop:"8px"}}>
        {data ? data.map((item)=>(
          <div className="col-2">
            <div className="card" style={{width:"210px"}}>
              <img src={item.photo_product} style={{height:"200px"}} alt="" />
              <div className="card-body">
                <Link to="/productdetail" className="link-product">
                <h3 className='text-product'>{item.name_product}</h3>
                </Link>
                <h4 className='text-price'>{item.price_product}</h4>
                <h5 className='text-brand'>Zalora Cloth</h5>
                <h6>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                </h6>
              </div>
            </div>
          </div>
           )) : <h1>...Loading</h1>}
        </div>
      </div>
      <h1 className='myfont text-title'>Popular</h1>
      <h5 className='text-sub'>Find clothes that are trending recently</h5>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-5 g-4"style={{marginTop:"8px"}}>
        {data ? data.map((item)=>(
          <div className="col-2">
            <div className="card" style={{width:"210px"}}>
              <img src={item.photo_product} style={{height:"200px"}} alt="" />
              <div className="card-body">
                <Link to="/productdetail" className="link-product">
                <h3 className='text-product'>{item.name_product}</h3>
                </Link>
                <h4 className='text-price'>{item.price_product}</h4>
                <h5 className='text-brand'>Zalora Cloth</h5>
                <h6>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                </h6>
              </div>
            </div>
          </div>
           )) : <h1>...Loading</h1>}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default HomePage;