import React from 'react'
import portal from '../Assets/portal.png'
import back_video from '../Assets/back_video.mp4'
import convergence_logo from '../Assets/convergence_logo.png'
import './Loading.css'

function Loading() {
  return (
    <div className='loadingContainer'>
        <div className="imgOverlay"></div>
      <video src={back_video} className='backVideo' autoPlay playsInline loop muted />
        <img className='portalImage' src={portal} alt="Loading" />
        <div className="imgCont">
        <img className='convergenceLogo' src={convergence_logo} alt="Loading" />
        </div>
    </div>
  )
}

export default Loading