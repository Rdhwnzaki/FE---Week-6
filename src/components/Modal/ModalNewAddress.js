import React, { useState } from 'react';
import { ModalBody } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function ModalNewAddress() {
    const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div className="row">
                <div className="col-12">
                <button style={{border:"dashed",borderColor:"#9B9B9B", width:"765px"}} onClick={() => setLgShow(true)}><h5 className='color-font myfont3 my-4'>Add new address</h5></button>
                </div>
            </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg text-center">
          Add new address
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
        <p className='color-font'>Save address as (ex : home address, office address)</p>
        <div className="row mb-2">
            <div className="col-12">
                <input type="text" className='form-control mb-2' placeholder='Rumah' />
            </div>
            <div className="row">
                <div className="col-6">
                    <p className='myfont3 color-font'>Recipient’s name</p>
                </div>
                <div className="col-6">
                <p className='myfont3 color-font'>Recipient's telephone number</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                <input type="text" className='form-control mb-2' placeholder='' />
                </div>
                <div className="col-6">
                <input type="text" className='form-control mb-2' placeholder='' />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <p className='myfont3 color-font'>Address</p>
                </div>
                <div className="col-6">
                <p className='myfont3 color-font'>Postal code</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                <input type="text" className='form-control mb-2' placeholder='' />
                </div>
                <div className="col-6">
                <input type="text" className='form-control mb-2' placeholder='' />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <p className='myfont3 color-font'>City or Subdistrict</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                <input type="text" className='form-control mb-2' placeholder='' />
                </div>
            </div>
            <div className="row">
                <div className="col-1">
                <Form>
           {['checkbox'].map((type) => (
           <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            className="myfont3"
          />
        </div>
      ))}
    </Form>
                </div>
                <div className="col-9"><p className='myfont3 color-font'>Make it the primary address</p></div>
            </div>
        </div>
        </ModalBody>
        <Modal.Body>
            <div className='justify-content-ebd'>
            <button className='btn btn-outline-secondary rounded-pill mx-3' style={{width:"150px"}}>Cancel</button>
            <button className='btn btn-danger rounded-pill'  style={{width:"150px"}}>Save</button>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalNewAddress;
