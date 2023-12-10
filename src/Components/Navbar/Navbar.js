import React, { useEffect } from "react";
import "./Navbar.css";
import vnr from "../../Assets/vnr.png";
import { useMediaQuery } from "react-responsive";
import Dropdown from "react-bootstrap/Dropdown";
import convergence_logo from '../../Assets/convologowhite.png';
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import DropdownButton from "react-bootstrap/DropdownButton";

function Navbar() {
  //usestate hook to know whether the device is mobile or a laptop
  const [isMobile, setIsMobile] = React.useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (isTabletOrMobile) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isTabletOrMobile]);

  const handleShow = () => {
    // e.preventDefault();
    setShow(!show);
  }


  return (
    <div className="navbarr">
      <div className="navbarContainer">
        <div className="navLogo">
          <a href="/">
            <img src={vnr} alt="logo" />
            <img src={convergence_logo} alt="logo" />
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
                <a href="/hackathon" className="linkk">
                  <div className="menu-link"><div>Software Hackathon</div> <input className="button" type="checkbox" value="" /></div>
                </a>

                <a href="/hardware-hackathon" className="linkk">
                  <div className="menu-link"><div>Hardware Hackathon</div> <input className="button" type="checkbox" value="" /></div>
                </a>

                <a href="/cad-athon" className="linkk">
                  <div className="menu-link"><div>Cadathon</div> <input className="button" type="checkbox" value="" /></div>
                </a>

                <a href="/contests/coding-contest" className="linkk">
                  <div className="menu-link">Coding Contest</div>
                </a>

                <a href="/contests/project-contest" className="linkk">
                  <div className="menu-link">Project Contest</div>
                </a>

                <a href="/contests/capture-the-flag" className="linkk">
                  <div className="menu-link">Capture The Flag</div>
                </a>

                <a href="/work-shops" className="linkk">
                  <div className="menu-link">Workshops</div>
                </a>

                <a href="/awareness/talkthe-change" className="linkk">
                  <div className="menu-link">Talk The Change</div>
                </a>

                <a href="/awareness/tech-vision" className="linkk">
                  <div className="menu-link">Tech Vision</div>
                </a>

                <a href="/events/social-events" className="linkk">
                  <div className="menu-link">Social Events</div>
                </a>

                <a href="/events/fun-events" className="linkk">
                  <div className="menu-link">Fun Events</div>
                </a>

                <a href="/paper-presentation" className="linkk">
                  <div className="menu-link">Paper Presentation</div>
                </a>

                <a href="/robotics/robo-s" className="linkk">
                  <div className="menu-link">Robo Soccer</div>
                </a>
                
                <a href="/robotics/robo-r" className="linkk">
                  <div className="menu-link">Robo Ralley</div>
                </a>
                
                <a href="/robotics/robo-m" className="linkk">
                  <div className="menu-link">Maze Bot</div>
                </a>

                <a href="/model-s" className="linkk">
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
                <Dropdown.Item className="text-dark" href="/hardware-hackathon">
                  Hardware Hackathon
                </Dropdown.Item>
                <Dropdown.Item className="text-dark" href="/cad-athon">
                  Campus Automation Contest
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




<Dropdown className="link">
              <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center">
                <a className="text-white mb-0 h5">Awareness</a>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="text-dark" href="/awareness/talkthe-change">
                  Talk The Change
                </Dropdown.Item>
                <Dropdown.Item
                  className="text-dark"
                  href="/awareness/tech-vision"
                >
                  Tech Vision
                </Dropdown.Item>
                
              </Dropdown.Menu>
            </Dropdown>





<Dropdown className="link">
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="d-flex align-items-center"
              >
                <a className="text-white mb-0 h5">Events</a>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  className="text-dark"
                  href="/events/social-events"
                >
                  Social Events
                </Dropdown.Item>
                <Dropdown.Item
                  className="text-dark"
                  href="/events/fun-events"
                >
                  Fun Events
                </Dropdown.Item>
                
              </Dropdown.Menu>
            </Dropdown>


            <a href="/paper-presentation" className="link">Paper Presentation</a>
            <Dropdown className="link">
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="d-flex align-items-center"
              >
                <a className="text-white mb-0 h5">Robotics</a>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="text-dark" href="/robotics/robo-s">
                  Robo Soccer
                </Dropdown.Item>
                <Dropdown.Item className="text-dark" href="/robotics/robo-r">
                  Robo Ralley
                </Dropdown.Item>
                <Dropdown.Item className="text-dark" href="/robotics/robo-m">
                  Maze Bot
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a href="/model-s" className="link">Models</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
