import Navbar from "../Navbar/Navbar";
import "./Cad.css";
import qr from "../../Assets/qr.jpg";
import { GiDiamondTrophy } from "react-icons/gi";
import hackathon from "../../Assets/hackathon.jpg";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

function Cad({type}) {
  var [windowSize, setWindowSize] = useState(getWindowSize());
  const location = useLocation();
  console.log({type})
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
           
            <h5>DEADLINES</h5>
            <p><b>Registration:</b> 20th JAN,2023</p>
            <p><b>Intramurals :</b> 19th-23rd JAN,2023</p>
          </span>
        </div>

        <div>
          
          <a target='_blank' href="https://tinyurl.com/CAD-Register">
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
          <span className="spanBox">
            <h1>Prize Pool</h1>
            <br></br>
            <h1>25,000/-</h1>

            <GiDiamondTrophy size={100} />
          </span>
        </div>
      </div>
      <div className="bdy">
        <div className="heading">
          <h1>Cadathon</h1>
        </div>
        <div className="hBody">
          “ Design is not just what it looks like or feels like. Design is how it works and how it is planned.”
<br />~ STEVE JOBS
<br /><br />
Hello peeps!✨<br />
As we started our journey in new calendar year, the zeal multiplies and opportunities await to access your innovative design skills. We, Team Convergence brings you the exciting event “CADATHON” for all design enthusiasts and planners out there!
<br />
<br />
You need to put your creativity and skill in designing a product in ‘ FUSION 360 ’ or creating a floor plan in ‘ AUTOCAD ’.
<br /><b>Date: 24th & 25th Jan 2023</b><br />
<b>Dead line to register: 20 Jan 2023</b><br />
<b>Intramurals : 19th-23rd Jan 2023</b><br />
<b>Prize pool: Rs 25,000</b><br />

<b>Note: </b><br />
1.It is mandatory to have a convergence pass to participate in the event.<br />
2.The students of VNR VJIET will have intramurals or hands on session before the event.<br />
3. Individual participation for this event.<br />
<br />
Brace yourselves.💥
        <br />
          <br/>
<b> For any queries, please contact:</b><br/>
Ch. Hruthik - 7396609709<br/>
Nithesh - 9515482713<br/>
Naveen - 9985759103<br/>
        
        </div>
      </div>
      
    </div>
  );
}

export default Cad;
