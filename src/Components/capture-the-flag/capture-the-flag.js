import Navbar from "../Navbar/Navbar";
import "./capture-the-flag.css";
import qr from "../../Assets/qr.png";
import { GiDiamondTrophy } from "react-icons/gi";
import hackathon from "../../Assets/hackathon.jpg";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

function CaptureFlag() {
  var [windowSize, setWindowSize] = useState(getWindowSize());
  const location = useLocation();
  console.log()
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
            <p><b>Team Size :</b> 1 - 3</p>
            <h5>DEADLINES</h5>
            <p><b>Registration:</b> 12th DEC,2023</p>
            <p><b>Intramurals :</b> 12th DEC,2023</p>
          </span>
        </div>

        <div>
          
          <a target='_blank' href="https://forms.gle/AT8E8Dwjjm1EP6rEA">
            <div className="qrcode">
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <img className="img" src={qr} alt="" />
            </div>
          </a>
          <h2 className="scan" style={{ textAlign: "center", color: "white", width: "300px" }}>CLICK ON QR CODE TO REGISTER</h2>
        </div>

        <div className="box">
          <span className="spanBox b3">
           <h2>Qualifier Round</h2>
           <p><b>Date:</b>14th Dec 2023</p>
           <h2>Final Round</h2>
            <p><b>Date:</b>15th Dec 2023</p>
            
          </span>
        </div>
      </div>
      <div className="bdy">
        <div className="heading">
          <h1 className="heading1">Capture the Flag</h1>
        </div>
        <div className="hBody">
         <b> Hey guys!!</b><br />
         Calling all tech enthusiasts and security aficionados!
<br />
Gear up for an adrenaline-fueled journey into the world of cybersecurity as we present the Capture the Flag (CTF)
<br />

<br/>
<br />
Date: 14th - 15th December 2023<br />
Deadline to register: 12th December 2023<br />
Intramurals: 12th December 2023<br />
Team size: 1-3<br />
<br />
Exciting prizes are in store for the winners!<br />
<br />
Note:<br />
1. Convergence pass is mandatory to take participate.<br />
2. Participants can participate individually or in teams of size 1-3. Each team has one team leader.<br />
3. Enter each person's name as it should be printed on certificates.<br />
4. Spot registrations will be available.<br />

 <br/>
<b> For any queries, please contact:</b><br/>
Apurva- 79959 10789 <br/>
Shahriyaan-93921 10872<br />
Sabeeha-89851 22786<br/>
        
        </div>
      </div>
      
    </div>
  );
}

export default CaptureFlag;
