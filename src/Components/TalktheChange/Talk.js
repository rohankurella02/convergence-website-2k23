import { GiDiamondTrophy } from "react-icons/gi";
import "./Talk.css";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import qr from "../../Assets/qr.jpg";
import Navbar from "../Navbar/Navbar";
import ttc from "../../Assets/ttc.png";

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
    <>
      <Navbar />
      <div className="ttcContainer">
        <div className="maincont">
          <div className="box">
            <span className="spanBox b6">
              <h2>Registration</h2>
              <p>Criteria : Convergence Pass</p>
              <h2>Time Limit :</h2>
              <p>5min</p>
              <p>English/Telugu</p>
              <p>19th & 20th JAN,2023</p>
            </span>
          </div>
          <div>
            <div className="code">
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSer8WyMrNvpvaHs0QxkwPhbbGaM1NtKCCN_XvbhNTR3fEeGAw/viewform"
              >
                <div className="qrcode">
                  <span className="span"></span>
                  <span className="span"></span>
                  <span className="span"></span>
                  <span className="span"></span>
                  <img className="qrImg" src={ttc} alt="qr" />
                </div>
              </a>
            </div>
            <h2
              className="scan"
              style={{ textAlign: "center", color: "white", width: "300px" }}
            >
              CLICK ON QR CODE TO REGISTER
            </h2>
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

        <h1 style={{ padding: "10px", textAlign: "center", color: "white" }}>
          The Orator Competition
        </h1>
        <div className="con">
          <div>
            <div className="prizecard">
              <div className="icon">
                <GiDiamondTrophy color="white" size={100} />
              </div>
              <div
                className="content"
                style={{ textAlign: "center", color: "white" }}
              >
                <h1>TOP 4 participants</h1>
                <h4>Interaction with</h4>
                <h1>VIVEK ATHREYA</h1>
                <h4>Director, TFI</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Talk;
