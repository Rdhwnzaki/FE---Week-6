import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import vector from "../../image/Vector.png"

function ModalFilter() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="btn btn-outline-dark " onClick={handleShow}>
                  <img src={vector} alt="" className="img-fluid" />
                </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='myfont3'>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body className='myfont3'>Color</Modal.Body>
        <Modal.Body><button className='btn btn-dark button-color shadow' style={{borderRadius:"50px"}}></button>
            <button className='btn btn-white button-color shadow' style={{borderRadius:"50px",marginLeft:"10px"}}></button>
            <button className='btn btn-danger button-color shadow' style={{borderRadius:"50px",marginLeft:"10px"}}></button>
            <button className='btn btn-success button-color shadow' style={{borderRadius:"50px",marginLeft:"10px"}}></button>
            <button className='btn btn-primary button-color shadow' style={{borderRadius:"50px",marginLeft:"10px"}}></button>
            <button className='btn btn-warning button-color shadow' style={{borderRadius:"50px",marginLeft:"10px"}}></button>
            </Modal.Body>
            <hr/>
            <Modal.Body className='myfont3'>Sizes</Modal.Body>
            <Modal.Body className='myfont3'>
                <Button variant="outline-danger" className='mx-2 button-size'>XS</Button>
                <Button variant="outline-danger" className='mx-2 button-size'>S</Button>
                <Button variant="outline-danger" className='mx-2 button-size'>M</Button>
                <Button variant="outline-danger" className='mx-2 button-size'>L</Button>
                <Button variant="outline-danger" className='mx-2 button-size'>XL</Button>
            </Modal.Body>
            <hr />
            <Modal.Body className='myfont3'>Category</Modal.Body>
            <Modal.Body className='myfont3'>
                <div className="col my-2">
                <Button variant="outline-danger" className='mx-2 button-size'>All</Button>
                <Button variant="outline-danger" className='mx-2 button-size'>Women</Button>
                <Button variant="outline-danger" className='mx-2 button-size'>Men</Button>
                </div>
                <Button variant="outline-danger" className='mx-2 button-size'>Boys</Button>
                <Button variant="outline-danger" className='mx-2 button-size'>Girls</Button>
            </Modal.Body>
            <hr />
            <Modal.Body className='myfont3'>
            <Dropdown as={ButtonGroup}>
            <Button variant='white'>Brand</Button>

            <Dropdown.Toggle split variant="white" id="dropdown-split-basic" />

            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">adidas Originals,</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Jack & Jones</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
                </Modal.Body>
            <Modal.Body className='myfont3'>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
          Discard
          </Button>
          <Button variant="danger" onClick={handleClose}>
          Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalFilter;