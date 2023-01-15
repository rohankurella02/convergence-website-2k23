import React from 'react'
import './project-contest.css'
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import qr from '../../Assets/project_contest_qr.png'

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
                    <p>Sharanya - 9949386825</p>
                    <p>Avanikanta - 9396949928</p>
                </span></div>

                <div>
                  <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSe_XEDsWIaGEeaWjFheOrqbuf0fhZxanMI-A9jtYlP4i6zNyQ/viewform">
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
                    <p><b>2-4</b></p>
                    <br />
                    
                    <h2>Registration Deadline</h2>
                    <p><b>15th January 2023</b></p>
                    <br />
                    
                </span></div>
            </div>
            
            <div className='maincont'>
                <div className="box"><span className="spanBox">
                    <h2>Beneficts of participating</h2>
                    <ul className='text-start text-light'>
                        <li className='text-warning h6'>Create a sense of competetion</li>
                        <li className='text-warning'>Learn to work and excel in a team</li>
                        <li className='text-warning'>To validate ideas and to identify potential issues</li>
                    </ul>
                </span></div>

                <div className="box"><span className="spanBox">
                    <h2>Note:</h2>
                    <ul className='text-start text-light'>
                        <li className='text-warning'>Participants from different branches and different colleges can team up together</li>
                        <li className='text-warning'>The projects can be of type software or hardware</li>
                    </ul>
                </span></div>
                
            </div>
            
        </div>
  )
}

export default ProjectContest