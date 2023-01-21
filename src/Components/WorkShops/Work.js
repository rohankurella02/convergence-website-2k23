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
           <p>A. Sai Shreya - 86887 61933</p>
<p>C. Ravi Varma - 99122 63085</p>
<p>E. Bhanusree - 63057 45015</p>
<p>I. Navya - 96520 46095</p>
          </span>
        </div>
      </div>
      
       <div className="bdy">
        <div className="heading">
          <h1>Workshops</h1>
        </div>
        <div className="hBody">
          Hey there!!<br />
We, team <b>WORKSHOPS</b>, are extremely delighted to present the 13 workshops that are a part of <b>CONVERGENCE 2k23!</b><br />
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
2. Every workshop has a <b>limit of 60 students.</b> It will be based on <b>first come, first serve. </b><br />
<br />
<b>List of workshops:</b><br />
1. React Native <br />
2. Applied AI <br />
3. Ethical Hacking <br />
4. DevOps <br />
5. IoT Workshop using ESP32 and NodeMCU <br />
6. Smart Vehicles<br />
7. Robotics and Drones <br />
8. 3D Modelling and 3D Printing <br />
9. Tekla Structures Steel Detailing <br />
10. Automotive Embedded Systems <br />
11. Analysing and Visualising Data through advanced frameworks<br />
12. The Role of Mathematics in Mezzanine technologies <br />
13. Design Thinking - A human centric approach<br />
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
