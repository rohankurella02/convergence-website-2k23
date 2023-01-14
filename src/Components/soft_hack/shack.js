import Navbar from "../Navbar/Navbar";
import "./shack.css";
import qr from "../../Assets/qr.jpg";
import { GiDiamondTrophy } from "react-icons/gi";

import { useEffect, useState } from "react";

function Shack() {
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
            <br />
            <h2>Student Coordinator</h2>
            <p>John Doe - 9999999999</p>
          </span>
        </div>

        <div>
          {" "}
          <div className="qrcode">
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <img className="img" src={qr} alt="" />
          </div>
          <h2 style={{ textAlign: "center" }}>SCAN TO REGISTER</h2>
        </div>

        <div className="box">
          <span className="spanBox">
            <h2>Prize Money</h2>
            <p style={{ paddingBottom: "10px" }}>
              <b>Winner</b> : Rs. 5000 /-
            </p>
            <p>
              <b>Runner</b> : Rs. 3000 /-
            </p>
            <br />
            <h3 style={{ paddingBottom: "10px", color: "rgb(241, 194, 6)" }}>
              Two Consolation Prizes
            </h3>
            <p> Rs. 2000 /-</p>
          </span>
        </div>
      </div>

      <div className="body">
        <div className="container">
          <div className="hexagonArea zero">
            {windowSize.innerWidth < 826 && (
              <div className="hexagon r1b0">
                <div className="display-5"></div>
              </div>
            )}
          </div>
          <div className="hexagonArea zero">
            <div className="hexagon r1b1">
              <div className="display-5"></div>
            </div>
            <div className="hexagon r1b2">
              <div className="display-5"></div>
            </div>
            <div className="hexagon r1b3">
              <div className="display-5"></div>
            </div>
          </div>

          <div className="hexagonArea first">
            <div className="hexagon r2b1">
              <div className="display-5 "></div>
            </div>
            <div className="hexagon r2b2">
              <div className="display-5"></div>
            </div>
            <div className="hexagon r2b3">
              <div className="display-5"></div>
            </div>
            {windowSize.innerWidth > 1113 && (
              <div className="hexagon r2b4">
                <div className="display-5 "></div>
              </div>
            )}
          </div>

          <div className="hexagonArea last">
            <div className="hexagon r3b1">
              <div className="display-5"></div>
            </div>
            <div className="hexagon r3b2">
              <div className="display-5"></div>
            </div>
            <div className="hexagon r3b3">
              <div className="display-5"></div>
            </div>
          </div>

          <div className="hexagonArea last def">
            {windowSize.innerWidth > 841 && windowSize.innerWidth < 1113 && (
              <div className="hexagon r4b0">
                <div className="display-5 "></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shack;
