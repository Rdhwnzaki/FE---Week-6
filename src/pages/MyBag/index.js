import React from "react";
import jas from  "../picture/jas.png"
import jeans from  "../picture/jeans.png"
import {Link}  from 'react-router-dom';
import MyButtonPlus from "../../components/MyButtonPlus";
import MyButtonMin from "../../components/MyButtonMin";


function MyBagPage() {
  return (
    <div className="container-fluid bg-new">
      <div className='container py-3'>
    <h1 className='myfont text-title'>My bag</h1>

    <div className="container col-12 row py-3">
    <div className="col col-8 row">
    <div className="container col-12 row">
        <div className="col col-12 row container shadow py-3 align-items-center" style={{backgroundColor:"white"}}>
            <div className="col col-1">
            <div class="form-check">
            <input class="form-check-input container-check " type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
             </label>
            </div>
            </div>
            <div className="col-5">
                <h6 className="myfont3">Select all items <h6 className="myfont3 color-font">(2 items selected)</h6></h6>
            </div>
            <div className="col-3 offset-3">
                <button className="btn">
                <h6 className="text-danger myfont3">Delete</h6>
                </button>
            </div>
        </div>
    </div>
    <div className="container col-12 row py-3">
        <div className="col col-12 row container shadow py-3 align-items-center" style={{backgroundColor:"white"}}>
            <div className="col col-1">
            <div class="form-check">
            <input class="form-check-input container-check " type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
             </label>
            </div>
            </div>
            <div className="col-2">
                <img src={jas} alt="" className="bag-pruduct"/>
            </div>
            <div className="col-4">
                <h6 className="myfont">Men's formal suit - Black</h6>
                <h6 className="myfont3 color-font">Zalora Cloth</h6>
            </div>
            <div className="col col-3">
                <MyButtonMin/>
                <span className="myfont3">1</span>
                <MyButtonPlus/>
            </div>
            <div className="col col-2">
                <h6 className="myfont">$ 20.0</h6>
            </div>
        </div>
    </div>
    <div className="container col-12 row">
        <div className="col col-12 row container shadow py-3 align-items-center" style={{backgroundColor:"white"}}>
            <div className="col col-1">
            <div class="form-check">
            <input class="form-check-input container-check " type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
             </label>
            </div>
            </div>
            <div className="col-2">
                <img src={jeans} alt="" className="bag-pruduct"/>
            </div>
            <div className="col-4">
                <h6 className="myfont">Men's formal suit - Black</h6>
                <h6 className="myfont3 color-font">Zalora Cloth</h6>
            </div>
            <div className="col col-3">
                 <MyButtonMin/>
                <span className="myfont3">1</span>
                <MyButtonPlus/>
            </div>
            <div className="col col-2">
                <h6 className="myfont">$ 20.0</h6>
            </div>
        </div>
    </div>
    </div>
    <div className="container col-4">
        <div className="col col-12 row container shadow py-3" style={{backgroundColor:"white"}}>
            <div className="col col-12">
            <h6 className="myfont">Shopping Summary</h6>
            </div>
            <div className="row py-3">
                <div className="col-6">
                    <h6 className="myfont3" style={{color:"#9B9B9B"}}>Total price</h6>
                </div>
                <div className="col-3 offset-3">
                    <h6 className="myfont">$ 40.0</h6>
                </div>
            </div>
            <div className="row align-items-center py-3">
                <div className="col-12">
                    <Link to="/checkout" className="link">
                <button
                  className="btn btn-danger myfont"
                  style={{
                    height: "50px",
                    borderRadius: "40px",
                    width:"350px"
                  }}
                ><p className="myfont3" style={{marginTop:"7px"}}>Buy</p>
                </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>

  );
}

export default MyBagPage;