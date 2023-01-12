import React from "react";
import "./Navbar.css";
import vnr from "../../Assets/vnr.png";
import { useMediaQuery } from "react-responsive";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Navbar() {
  //usestate hook to know whether the device is mobile or a laptop
  const [isMobile, setIsMobile] = React.useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  React.useEffect(() => {
    if (isTabletOrMobile) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isTabletOrMobile]);

  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="navLogo">
          <a href="/">
            <img src={vnr} alt="logo" />
          </a>
        </div>
        {isMobile ? (
          <div className="menu-btn">
            <input className="button" type="checkbox" value="" />
            <span></span>
            <span></span>
            <span></span>
            <div className="menu">
              <div className="menu-links">
                <a href="/hackathon" className="link">
                  <div className="menu-link">Hackathons</div>
                </a>

                <a href="/paper-presentation" className="link">
                  <div className="menu-link">Contests</div>
                </a>

                <a href="/work-shops" className="link">
                  <div className="menu-link">Workshops</div>
                </a>

                <a href="/talkthe-change" className="link">
                  <div className="menu-link">Talk the Change</div>
                </a>

                <a href="/work-shops" className="link">
                  <div className="menu-link">Events</div>
                </a>

                <a href="/paper-presentation" className="link">
                  <div className="menu-link">Paper Presentation</div>
                </a>

                <a href="/paper-presentation" className="link">
                  <div className="menu-link">Robotics</div>
                </a>
                
                <a href="/paper-presentation" className="link">
                  <div className="menu-link">Models</div>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="navLinks">
            <Dropdown className="link">
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="d-flex align-items-center"
              >
                <a className="text-white mb-0 h5">Hackathons</a>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="text-dark" href="/hackathon">
                  Software Hackathon
                </Dropdown.Item>
                <Dropdown.Item className="text-dark" href="/hackathon">
                  Hardware Hackathon
                </Dropdown.Item>
                <Dropdown.Item className="text-dark" href="/hackathon">
                  Cadathon
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="link">
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="d-flex align-items-center"
              >
                <a className="text-white mb-0 h5">Contests</a>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  className="text-dark"
                  href="/contests/coding-contest"
                >
                  Coding contest
                </Dropdown.Item>
                <Dropdown.Item
                  className="text-dark"
                  href="/contests/project-contest"
                >
                  Project Contest
                </Dropdown.Item>
                <Dropdown.Item
                  className="text-dark"
                  href="/contests/capture-the-flag"
                >
                  Capture the flag
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <a href="/work-shops" className="link">
              Workshops
            </a>
           
            <a href="/talkthe-change" className="link">
              Talk the Change
            </a>
           
           
           
            <a className="link">Events</a>
            <a href="/paper-presentation" className="link">
              Paper Presentation
            </a>
            <a className="link">Robotics</a>
            <a className="link">Models</a>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
