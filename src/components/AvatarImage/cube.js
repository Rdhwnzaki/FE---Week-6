import React from 'react'
import cube from "../../image/cube.png"
const CubeImage = () =>{
    return(
        <div>
           <div class="flex-shrink-0">
                      <button
                        className="btn clr-btn"
                        type="submit"
                        style={{borderRadius: "50%", backgroundColor:" #f36f45"}}
                      >
                        <p className='fw-bold'>
                        <img src={cube} alt="" />
                        Store</p>
                      </button>
                    </div>
        </div>
    )

}
export default CubeImage;
