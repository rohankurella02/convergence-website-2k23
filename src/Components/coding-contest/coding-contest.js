import React from 'react'
import './coding-contest.css'
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import qr from '../../Assets/coding_contest_qr.jpg'

function CodingContest() {
  return (
      <div>
            <Navbar />
            <div className='maincont'>
                <div className="box"><span className="spanBox">
                    <h2>Registration</h2>
                    <p><b>Criteria</b> : Convergence Pass</p>
                    <br />
                    <h2>Student Coordinator</h2>
                    <p>Vardhan - 9182453492</p>
                    <p>Neha - 9949933880</p>
                </span></div>

                <div>
                  <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSeCFcG0-fkAF7DGIcTs-3ZHAA_ld9CzCCr3QcJ-8sGTvZw28g/viewform">
                      <div className='qrcode'>
                          <span className='span'></span>
                          <span className='span'></span>
                          <span className='span'></span>
                          <span className='span'></span>
                          <img className="qrImg" src={qr} alt="qr" />
                      </div>
                   </a>
                    <div className='scan' style={{padding: "10px", textAlign: "center"}}>Scan or click on the QR Code To Register</div>
                </div>
                <div className="box"><span className="spanBox">
                    {/* <h2>Prize Pool</h2>
                    <p><b>RS. 15,000/-</b></p>
                    <br /> */}
                    
                    <h2>Team Size</h2>
                    <p><b>2-3</b></p>
                    <br />
                    
                    <h2>Registration Deadline</h2>
                    <p><b>18th January 2023</b></p>
                    <br />
                    
                </span></div>
            </div>
            
            <div className='maincont'>
                <div className="box"><span className="spanBox">
                    <h2>Qualifier Round</h2>
                    <p><b>Date</b> : 21 Jan 2023</p>
                    <br />
                    <p><b>Timings</b> : 7:00pm - 9:00pm</p>
                    <br />
                    <p><b>Mode</b> : Online</p>
                    <br />
                </span></div>

                <div className="box"><span className="spanBox">
                    <h2>Final Round</h2>
                    <p><b>Date</b> : 25 Jan 2023</p>
                    <br />
                    <p><b>Timings</b> : 10:00am - 1:00pm</p>
                    <br />
                    <p><b>Mode</b> : Onsite</p>
                    <br />
                </span></div>
                
            </div>
            
        </div>
  )
}

export default CodingContest