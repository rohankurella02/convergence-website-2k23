import { GiDiamondTrophy } from "react-icons/gi";
import "./Talk.css";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import qr from "../../Assets/qr.jpg";
import Navbar from "../Navbar/Navbar";

function Talk() {
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
      <h1 className="hee">TALK THE CHANGE</h1>
      <h1 className="heee">presents</h1>
      <div className="maincont">
        <div className="box">
          <span className="spanBox">
            <h2>Registration</h2>
            <h5>Convergence Pass Mandatory</h5>
            <h3>Time Limit-5min</h3>
            <h4 className="color:rgb(241, 194, 6)">English/Telugu</h4>
            <h3>19th & 20th JAN,2023</h3>
          </span>
        </div>
        <div>
          <div className="code">
            <div className="qrcode">
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <img className="qrImg" src={qr} alt="qr" />
            </div>
          </div>
          <h2 style={{ padding: "10px", textAlign: "center", color: "white" }}>
            Scan To Register
          </h2>
          <h1 style={{ padding: "10px", textAlign: "center", color: "white" }}>
            The Orator Competition
          </h1>
        </div>
        <div className="box">
          <span className="spanBox">
            <h2>Student Coordinator</h2>
            <p>Ch. Yochana - 9014852308</p>
            <p>V. Vinusha - 9542031507</p>
            <p>Surabhi - 8897878610</p>
            <p>Shreya - 7702892788</p>
            <p>Harsha- 8500022633</p>
          </span>
        </div>
      </div>

      <div className="con">
        <div>
          <div className="prizecard">
            <div className="icon">
              <GiDiamondTrophy size={100} />
            </div>
            <div className="content">
              <h1>TOP 4 participants</h1>
              <h4>Interaction with</h4>
              <h1>VIVEK ATHREYA</h1>
              <h4>Director, TFI</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talk;
