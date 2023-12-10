import Navbar from "../Navbar/Navbar";
import "./coding-contest.css";
import qr from "../../Assets/qr.jpg";
import { GiDiamondTrophy } from "react-icons/gi";
import hackathon from "../../Assets/coding_contest_qr.jpg";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

function Coding({ type }) {
  var [windowSize, setWindowSize] = useState(getWindowSize());
  const location = useLocation();
  console.log({ type });
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
          <span className="spanBox b2">
            <h2>Registration</h2>
            <p>
              <b>Criteria</b> : Convergence Pass
            </p>
            <p>
              <b>Team Size :</b> 2 - 3
            </p>
            <h5>DEADLINES</h5>
            <p>
              <b>Registration:</b> 18th JAN,2023
            </p>
           
          </span>
        </div>

        <div>
          <a
            target="_blank"
            href="https://bit.ly/CodingContest2k23"
          >
            <div className="qrcode">
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <img className="img" src={qr} alt="" />
            </div>
          </a>
          <h2
            className="scan"
            style={{ textAlign: "center", color: "white", width: "300px" }}
          >
            CLICK ON QR CODE TO REGISTER
          </h2>
        </div>

        <div className="box">
          <span className="spanBox">
            <h1>Prize Pool</h1>
            <br></br>
            <h1>15,000/-</h1>

            <GiDiamondTrophy size={100} />
          </span>
        </div>
      </div>
      <div className="row">
      <div className="roundbox col">
        <div className="box">
          <span className="spanBox b1">
            <h2>Qualifier Round</h2>
            <p><b>Date:</b>21st Jan,2023</p>
            <p><b>Timings:</b>7:00pm-9:00pm</p>
            <p><b>Mode:</b>Online</p>
          </span>
        </div>
      </div>
      
       <div className="roundbox col">
        <div className="box ">
          <span className="spanBox b1">
            <h2>Final Round</h2>
            <p><b>Date:</b>25th Jan,2023</p>
            <p><b>Timings:</b>10:00am-1:00pm</p>
            <p><b>Mode:</b>Onsite</p>
          </span>
        </div>
      </div>
      
      
      </div>
      <div className="bdy">
        <div className="heading">
          <h1 className="heading1">Coding Contest</h1>
        </div>
        <div className="hBody">
          Hello everyone!
          <br />
          We are delighted to inform you that VNRVJIET's Annual Technical
          symposium CONVERGENCE 2K23 is back and will take place on the 24th and
          25th of January 2023.
          <br />
          <br />
          Convergence presents you with Coding Contest, an event to exercise
          your brain and enhance your problem-solving skills.
          <br />
          <br />
          <b>Note:</b>
          <br />
          • Any candidate currently pursuing Btech can participate in the
          contest by forming a team of size 2-3.
          <br />
          • Participants from different branches and different colleges can team
          up.
          <br />
          • Participation certificates will be provided to all participants and
          finalists.
          <br />
          <br />
          <b>Registration:</b>
          <br />
          • Free registration for qualifier round.
          <br />
          • Teams which advance to the final round must have a convergence pass.
          <br />
          • Registration Deadline : 18th January 2023
          <br />
          <br />
          <b>For any queries, please contact:</b>
          <br />
          Vardhan - 9182453492
          <br />
          Neha - 9949933880
          <br />
          Yashaswi - 8332855901
          <br />
          Neelima - 7993703993
          <br />
          Gnaneshwar - 8688412217
        </div>
      </div>
    </div>
  );
}

export default Coding;
