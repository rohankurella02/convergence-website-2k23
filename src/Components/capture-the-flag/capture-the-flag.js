import Navbar from "../Navbar/Navbar";
import "./capture-the-flag.css";
import qr from "../../Assets/qr.jpg";
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
            <p><b>Registration:</b> 22nd JAN,2023</p>
            <p><b>Intramurals :</b> 20th JAN,2023</p>
          </span>
        </div>

        <div>
          
          <a target='_blank' href="https://tinyurl.com/Conv-CTF-Reg">
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
           <h2>First Round</h2>
           <p><b>Date:</b>24th Jan 2023</p>
           <h2>Second Round</h2>
            <p><b>Date:</b>25th Jan 2023</p>
            
          </span>
        </div>
      </div>
      <div className="bdy">
        <div className="heading">
          <h1 className="heading1">Capture the Flag</h1>
        </div>
        <div className="hBody">
         <b> Hello people!</b><br />
As a part of Convergence, Hyderabad's biggest technical fest, we, the team of Capture The Flag are excited to announce one of a kind event for all the cybersecurity geeks out there.<br />

Through this event, join us on this adventure, where each flag is a new mission and each mission leads to an unexplored horizon. Experience the opportunity to think out-of-the-box, work together and solve interactive puzzles while learning essential cybersecurity concepts, so now's the chance to sign up for it!<br />
<br />
Date: 24th - 25th January 2023<br />
Deadline to register: 22nd January 2023<br />
Intramurals: 20th January 2023<br />
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
Sharwani Kusumba- 96189 53075 <br/>
Yasaswini Ganji-63024 25547<br />
Divya Sree Nemmikanti-93904 33566<br/>
Suhas Patlolla-99891 81755<br/>
        
        </div>
      </div>
      
    </div>
  );
}

export default CaptureFlag;
