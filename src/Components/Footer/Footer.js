import React, { useEffect, useState } from 'react'
import './Footer.css'
import arrow from '../../Assets/arrow.gif'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Footer() {

    const [offset, setOffset] = useState(0);
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log({offset})

  return (
      <div style={offset > 2 ? { bottom: "-100px" } : { bottom: "0px" }} className="footer">
        <div className="footerLeft">
        <a><h2 className='sponsors' onClick={handleShow}>Contact Us</h2></a>
            
        
        <a href="/team"><h2 className='sponsors'>Designed By</h2></a>
        </div>
        <div className="footerMiddle">
          <img style={{width: "30px"}} src={arrow} alt="arrow" />
        </div>
          <div  className="footerRight">
            {/* <h2>Follow Us</h2> */}
            <div className="icons">
                <i className="fab fa-facebook-f fa-lg"></i>
                  <i className="fab fa-instagram fa-lg"></i>
                  <i className="fab fa-twitter fa-lg"></i>
                  <i className="fab fa-linkedin-in fa-lg"></i>

            </div>
        </div>
        

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modalBG text-light border border-light' closeButton>
          <Modal.Title>Call or text us at</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBodyBG text-light border border-light'>
          <b>Nippun:</b>
          <p>8712798597</p>
          
          <b>Dheeraj:</b>
          <p>7207020464</p>
          
          <b>Sushanth:</b>
          <p>9502329336</p>
          
          <b>Puneeth:</b>
          <p>9390651145</p>
          
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
        
    </div>
  )
}

export default Footer