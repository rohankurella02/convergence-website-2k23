import React, { useEffect, useState } from 'react'
import './Footer.css'
import arrow from '../../Assets/arrow.gif'

function Footer() {

    const [offset, setOffset] = useState(0);

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
            <h2>Contact Us</h2>
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
    </div>
  )
}

export default Footer