import React from 'react'
import './Navbar.css'
import vnr from '../../Assets/vnr.png'
import { useMediaQuery } from 'react-responsive'

function Navbar() {

  //usestate hook to know whether the device is mobile or a laptop
  const [isMobile, setIsMobile] = React.useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  React.useEffect(() => {
    if (isTabletOrMobile) {
      setIsMobile(true);
    }
    else {  
      setIsMobile(false);
    }
  }, [isTabletOrMobile])

  return (
    <div className='navbar'>
      <div className="navbarContainer">
        <div className="navLogo">
          <a href="/"><img src={vnr} alt="logo" /></a>
        </div>
        {
          isMobile ? (
            <div className="menu-btn">
              <input className="button" type='checkbox' value="" />
              <span></span>
              <span></span>
              <span></span>
              <div className="menu">
                <div className="menu-links">
                  <a href='/paper-presentation' className="link"><div className="menu-link">Paper Presentation</div></a>
                  <a href='/paper-presentation' className="link"><div className="menu-link">Hackathons</div></a>
                  <a href='/paper-presentation' className="link"><div className="menu-link">Workshops</div></a>
                  <a href='/paper-presentation' className="link"><div className="menu-link">Contests</div></a>
                  <a href='/paper-presentation' className="link"><div className="menu-link">Robotics</div></a>
                  <a href='/paper-presentation' className="link"><div className="menu-link">Tech Talks</div></a>
                </div>
              </div>
            </div>
          )
            :
            (
              <div className="navLinks">
                <a href='/paper-presentation' className="link">Paper Presentation</a>
                <a className="link">Hackathons</a>
                <a className="link">Workshops</a>
                <a className="link">Contests</a>
                <a className="link">Robotics</a>
                <a className="link">Tech Talks</a>
                <a className="link">Social Events</a>
              </div>
            )
        }
      </div>

    </div>
  )
}

export default Navbar