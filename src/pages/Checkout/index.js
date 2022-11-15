import React from 'react'
import jas from  "../picture/jas.png"
import jeans from  "../picture/jeans.png"

export default function Checkout() {
  return (
    <div className="container-fluid bg-new">
      <div className='container py-3'>
    <h1 className='myfont text-title'>Checkout</h1>
    <h5 className='text-title myfont3'>Shipping Adress</h5>

    <div className="container col-12 row py-3">
    <div className="col col-8 row">
    <div className="container col-12 row">
        <div className="col col-12 row container shadow py-3 align-items-center" style={{backgroundColor:"white"}}>
            <div className="col-12">
                <h6 className='myfont'>Andreas Jane</h6>
            </div>
        <div className="row py-4">
            <div className="col-12">
                <h6 className='myfont3'>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</h6>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <button className='btn btn-outline-secondary' style={{borderRadius:"20px", width:"229px",height:"35px"}}>
                    <h6 className='myfont3' style={{color:"#9b9b9b",marginTop:"2px"}}>Choose another address</h6>
                </button>
            </div>
        </div>
        </div>
    </div>
    <div className="container col-12 row py-3">
        <div className="col col-12 row container shadow py-3 align-items-center" style={{backgroundColor:"white"}}>
            <div className="col-2">
                <img src={jas} alt="" className="bag-pruduct"/>
            </div>
            <div className="col-4">
                <h6 className="myfont">Men's formal suit - Black</h6>
                <h6 className="myfont3 color-font">Zalora Cloth</h6>
            </div>
            <div className="col col-2 offset-4">
                <h6 className="myfont">$ 20.0</h6>
            </div>
        </div>
    </div>
    <div className="container col-12 row">
        <div className="col col-12 row container shadow py-3 align-items-center" style={{backgroundColor:"white"}}>
            <div className="col-2">
                <img src={jeans} alt="" className="bag-pruduct"/>
            </div>
            <div className="col-4">
                <h6 className="myfont">Men's formal suit - Black</h6>
                <h6 className="myfont3 color-font">Zalora Cloth</h6>
            </div>
            <div className="col col-2 offset-4">
                <h6 className="myfont">$ 20.0</h6>
            </div>
        </div>
    </div>
    </div>
    <div className="container col-4">
        <div className="col col-12 row container shadow py-3" style={{backgroundColor:"white"}}>
            <div className="col col-12">
            <h6 className="myfont"style={{color:"black"}}>Shopping Summary</h6>
            </div>
            <div className="row pt-3">
                <div className="col-6">
                    <h6 className="myfont3" style={{color:"#9B9B9B"}}>Order</h6>
                </div>
                <div className="col-3 offset-3">
                    <h6 className="myfont">$ 40.0</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h6 className="myfont3" style={{color:"#9B9B9B"}}>Delivery</h6>
                </div>
                <div className="col-3 offset-3">
                    <h6 className="myfont">$ 5.0</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h6 className="myfont" style={{color:"black"}}>Shopping summary</h6>
                </div>
                <div className="col-3 offset-3">
                    <h6 className="myfont text-danger">$ 45.0</h6>
                </div>
            </div>
            <div className="row align-items-center py-3">
                <div className="col-12">
                <button
                  class="btn btn-danger myfont3"
                  style={{
                    height: "50px",
                    borderRadius: "40px",
                    width:"350px"
                  }}
                >
                    <h6 className='myfont3' style={{marginTop:"9px"}}>Select payment</h6>
                </button>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}
