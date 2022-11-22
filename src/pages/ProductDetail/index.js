import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link}  from 'react-router-dom';
import {FaChevronRight} from "react-icons/fa"
import pic1 from  "../picture/pagep1.png"
import pic2 from  "../picture/pagep2.png"
import pic3 from  "../picture/pagep3.png"
import pic4 from  "../picture/pagep4.png"
import {FaStar} from "react-icons/fa"
import NavbarBeforeLogin from '../../components/Navbar/NavbarBeforeLogin';

export default function ProductDetail() {
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
      <div className='container py-3'>
        <div className="row py-4">
          <div className="col-1">
            <Link to="/home" className='link-title-detail'>
          <h6 className='color-font myfont3'>Home</h6>
            </Link>
          </div>
          <div className="col-1">
          <h6 className='myfont3 color-font'><FaChevronRight/>category</h6>
          </div>
          <div className="col-1">
          <h6 className='myfont3 color-font'><FaChevronRight/>T-Shirt</h6>
          </div>
        </div>
          <div className="row">
          <div className="col-md-4">
        <div className="col-md-12">
          <img src={pic1} alt="" style={{borderRadius:"15px"}}/>
        </div>
        <div className="row ml-1">
          <div className="col-md-3 mt-2">
            <img src={pic2} alt="" style={{height: "70px",borderRadius:"15px"}} />
          </div>
          <div className="col-md-3 mt-2">
            <img src={pic3} alt="" style={{height: "70px",borderRadius:"15px"}} />
          </div>
          <div className="col-md-3 mt-2">
            <img src={pic4} alt="" style={{height: "70px",borderRadius:"15px"}} />
          </div>
        </div>
      </div>
      <div className="col-md-8">
          <div className="ml-2">
            <h3 className='myfont'>Baju muslim pria</h3>
            <h6 className="myfont3 color-font">Zalora Cloth</h6>
            <h6 className='mb-5'>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                <span className='myfont3 color-font'>(10)</span>
                </h6>
            <h6 className="color-font myfont3">Price</h6>
            <h3 className='myfont mb-5'>$ 20.0</h3>
            <h6 className='myfont'>Color</h6>
            <button className='btn btn-dark button-color' style={{borderRadius:"50px"}}></button>
            <button className='btn btn-danger button-color' style={{borderRadius:"50px",marginLeft:"10px"}}></button>
            <button className='btn btn-primary button-color' style={{borderRadius:"50px",marginLeft:"10px"}}></button>
            <button className='btn btn-success button-color' style={{borderRadius:"50px",marginLeft:"10px"}}></button>

            <div className="row mt-5 mb-3">
              <div className="col-md-6">
                <h6 className='myfont' style={{marginLeft:"29px"}}>Size</h6>
                <button className=" btn-min "style={{borderRadius:"50%", marginRight:"10px"}}>-</button>
                <span className="myfont3">1</span>
                <button className=" btn-plus shadow" style={{borderRadius:"50%", marginLeft:"10px"}}>+</button>
              </div>
              <div className="col-md-6">
              <h6 className='myfont' style={{marginLeft:"19px"}}>Jumlah</h6>
              <button className=" btn-min "style={{borderRadius:"50%", marginRight:"10px"}}>-</button>
                <span className="myfont3">1</span>
                <button className=" btn-plus shadow" style={{borderRadius:"50%", marginLeft:"10px"}}>+</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                  <button
                    type="submit"
                    className="btn btn-outline-secondary btn-in-product rounded-pill"
                  >
                    <h6 className='myfont3' style={{marginTop:"5px"}}>Chat</h6>
                  </button>
              </div>
              <div className="col-md-3">
                  <button
                    type="submit"
                    className="btn btn-outline-secondary btn-in-product rounded-pill"
                  >
                   <h6 className='myfont3' style={{marginTop:"5px"}}>Add bag</h6>
                  </button>
              </div>
              <div className="col-md-6">
                  <button type="submit" className="btn btn-danger btn-in-product2 rounded-pill">
                  <h6 className='myfont3' style={{marginTop:"5px"}}>Add bag</h6>
                  </button>
              </div>
            </div>
          </div>
        </div>
        <div>
        <h3 className='myfont mt-5 mb-5'>Informasi Produk</h3>
        <h4 className='myfont3'>Condition</h4>
        <h5 className='myfont3 text-danger mb-5'>New</h5>
        <h4 className='myfont3'>Description</h4>
        <p className="myfont3 color-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="myfont3 color-font">Donec non magna pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. </p>
        <p className="myfont3 color-font">Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.</p>
        <p className="myfont3 color-font">Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.</p>
        <p className="myfont3 color-font">In ultricies rutrum tempus. Mauris vel molestie orci.</p>
        <h3 className='myfont mt-5 mb-5'>Product review</h3>
        <div className="row">
          <div className="col-md-2">
        <h1 className='myfont'>5.0</h1>
        <h4 className='mb-5'>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                <FaStar className='fastar'/>
                </h4>
          </div>
          <div className="col-1">
            <p>5</p>
            <p>4</p>
            <p>3</p>
            <p>2</p>
            <p>1</p>
          </div>
          <div className="col-2">
          <p>
          <div className="progress-1">
          <div className="progress-bar-1" role="progressbar" aria-label="Basic example" style={{width: "100%", ariaValuenow:"100", ariaValuemin:"0" ,ariaValuemax:"100"}}></div>
          </div>
          </p>
          <p>
          <div className="progress-2">
          <div className="progress-bar-1" role="progressbar" aria-label="Basic example" style={{width: "100%", ariaValuenow:"100", ariaValuemin:"0" ,ariaValuemax:"100"}}></div>
          </div>
          </p>
          <p>
          <div className="progress-3">
          <div className="progress-bar-1" role="progressbar" aria-label="Basic example" style={{width: "100%", ariaValuenow:"100", ariaValuemin:"0" ,ariaValuemax:"100"}}></div>
          </div>
          </p>
          <p>
          <div className="progress-4">
          <div className="progress-bar-1" role="progressbar" aria-label="Basic example" style={{width: "100%", ariaValuenow:"100", ariaValuemin:"0" ,ariaValuemax:"100"}}></div>
          </div>
          </p>
          <p>
          <div className="progress-5">
          <div className="progress-bar-1" role="progressbar" aria-label="Basic example" style={{width: "100%", ariaValuenow:"100", ariaValuemin:"0" ,ariaValuemax:"100"}}></div>
          </div>
          </p>
          </div>
          <div className="col-md-1 mb-3">
            <p>5</p>
            <p>4</p>
            <p>3</p>
            <p>2</p>
            <p>1</p>
          </div>
        </div>
        </div>
          </div>
          <hr />
          <h3 className='myfont mt-5'>You can also like this</h3>
          <h6 className='myfont3 color-font'>You’ve never seen it before!</h6>
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
  )
}
