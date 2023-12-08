import { GiDiamondTrophy } from "react-icons/gi";
import "./Work.css";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import qr from "../../Assets/qr.jpg";
import Navbar from "../Navbar/Navbar";
import workshops from "../../Assets/workshops.jpeg";

function Work() {
  var [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    var { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <div>
      <Navbar />
      <div className="maincont">
        <div className="box">
          <span className="spanBox">
            <h2>Registration</h2>
            <p>
              <b>Criteria</b> : Convergence Pass
            </p>
            <h2>LIMITED REGISTRATIONS</h2>
            <h2>FIRST COME FIRST SERVE</h2>
          </span>
        </div>

        <div>
          <a target="_blank" href="https://forms.gle/pgdZbQQFzJhnhp61A">
            <div className="qrcode">
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <img className="qrImg" src={workshops} alt="qr" />
            </div>
          </a>
          <div
            className="scan"
            style={{
              paddingTop: "10px",
              paddingBottom: "70px",
              textAlign: "center",
              color: "white",
            }}
          >
            Click QR To Register
          </div>
        </div>
        <div className="box">
          <span className="spanBox">
            <h2>Student Coordinators</h2>
           <p>K. Akhil - 79897 65743</p>
<p>Pavan - 63001 06036</p>
<p>Vinay - 63052 06632</p>
<p>Nevan - 63044 07924</p>
          </span>
        </div>
      </div>
      
       <div className="bdy">
        <div className="heading">
          <h1>Workshops</h1>
        </div>
        <div className="hBody">
          Hey there!!<br />
We, team <b>WORKSHOPS</b>, are extremely delighted to present the 14 workshops that are a part of <b>CONVERGENCE 2k23R!</b><br />
<br />
<b>“Tell me and I forget, teach me and I may remember, involve me and I learn.”</b> <br />- Benjamin Franklin<br />
<br />
That's exactly what workshops are for!<br />
It is the perfect place to participate, if you are looking to:<br />
1. Learn new skills<br />
2. Have exposure to technologies from other branches/domains<br />
3. Get a participation certificate that can be used to build your resume<br />
<br />
<b>Registration link:</b> <br />
https://forms.gle/pgdZbQQFzJhnhp61A<br />
<br />
<b>Note:</b><br />
1. It is mandatory to have a <b>Convergence pass</b> to participate for workshops.<br />
2. <b>Limited seats</b> are allocated for each workshop and registration operates on a <b>first-come, first-served basis</b>. So, do register soon.<br />
3. Participants will receive the <b>participation certificates</b>.<br/>
<br />
<b>List of workshops:</b><br />
1. Flutter <br />
2. FPGA <br />
3. Robotics <br />
4. 3D Printing <br />
5. Draft-a-thon <br />
6. Creation of Video tour <br />
7. Datathon(Swecha) <br />
8. Unlocking industrial automation <br />
9. Data Visualization <br />
10. Model based design <br />
11. Drones <br />
12. Git and Github <br />
13. Rust(Swecha)<br />
14. Path to success- Mastering UPSC exams <br/>
<br />


<br />
Hop in, let's learn and grow together! <br />
See you soon :)<br />
        
        </div>
      </div>
      
      
    </div>
  );
}

export default Work;
