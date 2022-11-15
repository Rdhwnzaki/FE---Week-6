import React from 'react'
import jas from  "../picture/jas.png"
import {Link}  from 'react-router-dom';
import { FaChevronRight, FaStar } from 'react-icons/fa';

 function Category() {
  return (
    <div className='container-fluid bg-new'>
        <div className="container py-3">
            <div className="row py-3">
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
            <h1 className='myfont text-title'>T-Shirt</h1>
            <div className="container">
        <div className="row row-cols-1 row-cols-md-5 g-4"style={{marginTop:"8px"}}>
          <div className="col-2">
            <div className="card" style={{width:"210px"}}>
              <img src={jas} alt="" />
              <div className="card-body">
                <Link to="/productdetail" className="link-product">
                <h3 className='text-product'>Men's formal suit - Black & White</h3>
                </Link>
                <h4 className='text-price'>$ 40.0</h4>
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
          <div className="col-2">
            <div className="card" style={{width:"210px"}}>
              <img src={jas} alt="" />
              <div className="card-body">
              <Link to="/productdetail" className="link-product">
                <h3 className='text-product'>Men's formal suit - Black & White</h3>
                </Link>
                <h4 className='text-price'>$ 40.0</h4>
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
          <div className="col-2">
            <div className="card" style={{width:"210px"}}>
              <img src={jas} alt="" />
              <div className="card-body">
              <Link to="/productdetail" className="link-product">
                <h3 className='text-product'>Men's formal suit - Black & White</h3>
                </Link>
                <h4 className='text-price'>$ 40.0</h4>
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
          <div className="col-2">
            <div className="card" style={{width:"210px"}}>
              <img src={jas} alt="" />
              <div className="card-body">
              <Link to="/productdetail" className="link-product">
                <h3 className='text-product'>Men's formal suit - Black & White</h3>
                </Link>
                <h4 className='text-price'>$ 40.0</h4>
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
          <div className="col-2">
            <div className="card" style={{width:"210px"}}>
              <img src={jas} alt="" />
              <div className="card-body">
              <Link to="/productdetail" className="link-product">
                <h3 className='text-product'>Men's formal suit - Black & White</h3>
                </Link>
                <h4 className='text-price'>$ 40.0</h4>
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
        </div>
        <div className="row row-cols-1 row-cols-md-5 g-4" style={{marginTop:"8px"}}>
          <div className="col-2">
            <div className="card" style={{width:"210px"}}>
              <img src={jas} alt="" />
              <div className="card-body">
              <Link to="/productdetail" className="link-product">
                <h3 className='text-product'>Men's formal suit - Black & White</h3>
                </Link>
                <h4 className='text-price'>$ 40.0</h4>
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
          <div className="col-2">
            <div className="card" style={{width:"210px"}}>
              <img src={jas} alt="" />
              <div className="card-body">
              <Link to="/productdetail" className="link-product">
                <h3 className='text-product'>Men's formal suit - Black & White</h3>
                </Link>
                <h4 className='text-price'>$ 40.0</h4>
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
          <div className="col-2">
            <div className="card" style={{width:"210px"}}>
              <img src={jas} alt="" />
              <div className="card-body">
              <Link to="/productdetail" className="link-product">
                <h3 className='text-product'>Men's formal suit - Black & White</h3>
                </Link>
                <h4 className='text-price'>$ 40.0</h4>
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
          <div className="col-2">
            <div className="card" style={{width:"210px"}}>
              <img src={jas} alt="" />
              <div className="card-body">
              <Link to="/productdetail" className="link-product">
                <h3 className='text-product'>Men's formal suit - Black & White</h3>
                </Link>
                <h4 className='text-price'>$ 40.0</h4>
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
          <div className="col-2">
            <div className="card" style={{width:"210px"}}>
              <img src={jas} alt="" />
              <div className="card-body">
              <Link to="/productdetail" className="link-product">
                <h3 className='text-product'>Men's formal suit - Black & White</h3>
                </Link>
                <h4 className='text-price'>$ 40.0</h4>
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
        </div>
      </div>
        </div>
    </div>
  )
}
export default Category;