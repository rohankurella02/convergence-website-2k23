import React from 'react'
import './Robo.css'
import Navbar from "../Navbar/Navbar";

function Robo() {
  return (
      <>
        <Navbar />
        <div style={{minHeight: "80vh"}} className='text-warning display-1 font-bolder d-flex align-items-center justify-content-center text-center'><b>Announcements will be coming soon!</b></div>
      </>
  )
}

export default Robo;