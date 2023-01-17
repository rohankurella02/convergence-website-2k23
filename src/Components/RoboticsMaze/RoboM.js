import Navbar from "../Navbar/Navbar";
import "./RoboM.css";
import qr from "../../Assets/qr.jpg";
import { GiDiamondTrophy } from "react-icons/gi";
import hackathon from "../../Assets/coding_contest_qr.jpg";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

function RoboM() {
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
          <span className="spanBox b5">
             <h2>Registration</h2>
            <p>
              <b>Criteria</b> : Convergence Pass
            </p>
           <p>
              <b>Team Size :</b> 1 - 3
            </p>
          
          </span>
        </div>

        <div>
          
          <a target='_blank' href="https://bit.ly/CodingContest2k23">
            <div className="qrcode">
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <img className="img" src={qr} alt="" />
            </div>
          </a>
          <h2 className="scan" style={{ textAlign: "center", color: "white", width: "300px" }}>SCAN OR CLICK ON QR CODE TO REGISTER</h2>
        </div>

        <div className="box">
          <span className="spanBox">
            <h2><b>1st Prize</b></h2>
            <h2>5,000/-</h2>
             <h2><b>2nd Prize</b></h2>
            <h2>3,000/-</h2>

            <GiDiamondTrophy size={75} />
          </span>
        </div>    
      </div>
      
      <div className="bdy">
        <div className="heading">
          <h1 className="heading1">MAZE BOT</h1>
        </div>
        <div className="hBody">
         <b>Hello Guys!!!!</b><br/>
Convergence 2k23 is back with many exciting events!!!!<br/>
As part of Convergence 2k23, We robotics are hosting the event.<br/>

<br/><b>ROBO MAZE</b><br/>

<br/>Maze is such an interesting game where every age of group connects with it. Where you have to move from an entrance to a goal using a bot. Where there alot of unicursal paths that makes you ever more curiousest.<br/>

<br/>Here You can showcase your talent and win some exciting cash prizes.<br/>
<br/>
<b>1st - Rs-5000/-</b><br/>
<br/><b>2nd - Rs-3000/-</b><br/>
<br/>
<b>For any queries, please contact:</b><br/>
Bharath -7093553990<br/>
Phanindra -9121018044<br/>
        </div>
      </div>
      
    </div>
  );
}

export default RoboM;
