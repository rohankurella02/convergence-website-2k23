import React from 'react'
import './project-contest.css'
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";

function ProjectContest() {
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
                    <div className='qrcode'>
                        <span className='span'></span>
                        <span className='span'></span>
                        <span className='span'></span>
                        <span className='span'></span>
                        <img className="qrImg" src={""} alt="qr" />
                    </div>
                    <h2 style={{padding: "10px", textAlign: "center"}}>Scan To Register</h2>
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

export default ProjectContest