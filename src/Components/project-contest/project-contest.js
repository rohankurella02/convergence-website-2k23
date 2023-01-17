import Navbar from "../Navbar/Navbar";
import "./project-contest.css";
import qr from "../../Assets/project_contest_qr.png";
import { GiDiamondTrophy } from "react-icons/gi";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

function ProjectContest({type}) {
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
            <p><b>Team Size :</b> 2 - 4</p>
            <h5>DEADLINES</h5>
            <p><b>Registration:</b> 19th JAN,2023</p>
            <p><b>Intramurals :</b> 17th-18th JAN,2023</p>
          </span>
        </div>

        <div>
          
          <a target='_blank' href="http://tiny.cc/projectcontest">
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
            <h1>Prize Pool</h1>
            <br></br>
            <h1>50,000/-</h1>

            <GiDiamondTrophy size={100} />
          </span>
        </div>
      </div>
      <div className="bdy">
        <div className="heading">
          <h1 className="heading1">{type} Project Contest</h1>
        </div>
        <div className="hBody">
          <p>
              "Contests play a crucial role in the success of a project."</p>
<br />
<h5>Hello everyone!</h5>
<br />We are now back with <b>VNRVJIET's</b> Annual Technical symposium <b>CONVERGENCE</b> 2K23 which is conducted on the 24th and 25th of January 2023.

<br /><b>Convergence</b> presents you with the event, <b>Project Contest</b> to upskill your abilities, showcase your technical knowledge, and advertise your projects.
<br />
<br />
<b>Benefits of participating:</b><br />
1.Create a sense of competition<br />
2.Learns to work and excel in a team<br />
3.To validate ideas and to identify potential issues<br />
<br />
<b>Note:</b><br />
1.It is mandatory to have a convergence pass to participate in the event.<br />
2.Participants from different branches and different colleges can team up together.<br />
3.The projects can be of type software or hardware.<br />
          <br/>
<b> For any queries, please contact:</b><br/>
Srujan - 9390595060 <br/>
Sharanya - 9949386825<br/>
Avanikanta - 9396949928<br/>
Abhinav - 8886762003<br/>
Srinivas - 8106139083<br/>
Divya - 9390433566<br/>

        </div>
      </div>
      
    </div>
  );
}

export default ProjectContest;
