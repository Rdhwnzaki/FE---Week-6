import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalNewAddress from './ModalNewAddress';


function ModalAddress() {
    const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <button onClick={() => setLgShow(true)} className='btn btn-outline-secondary' style={{borderRadius:"20px", width:"229px",height:"35px"}}>
      <h6 className='myfont3' style={{color:"#9b9b9b",marginTop:"2px"}}>Choose another address</h6>
      </button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg text-center">
          Choose another address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-12">
                    <ModalNewAddress/>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-12">
                    <div style={{border:"solid",borderColor:"#DB3022", width:"765px"}}>
                        <div className="row mx-1">
                            <div className="col-12">
                        <h5 className=' myfont3 my-4'>Andreas Jane</h5>
                            </div>
                        </div>
                        <div className="row mx-1">
                            <div className="col-12">
                        <p className=' myfont3 my-4'>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                        <div className='btn text-danger'><p className='myfont'>Change address</p></div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalAddress;