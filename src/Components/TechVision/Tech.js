import Navbar from "../Navbar/Navbar";
import "./Tech.css";
import qr from "../../Assets/qr.jpg";
import { GiDiamondTrophy } from "react-icons/gi";
import hackathon from "../../Assets/hackathon.jpg";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

function Tech({ type }) {
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
          <span
            className="spanBox"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h4>Registration</h4>
            <p> Criteria : Convergence Pass</p>
          </span>
        </div>

        <div>
          <a target="_blank" href="https://tinyurl.com/2eyf8tr2">
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
          <span
            className="spanBox"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2>Round 1</h2>

            <p>24th Jan 2023</p>

            <h2>Round 2</h2>

            <p>25th Jan 2023</p>
          </span>
        </div>
      </div>
      <div className="bdy">
        <div className="heading">
          <h1>TECH VISION</h1>
          <h3>presents</h3>
          <h1>SILICON DATING</h1>
        </div>
        <div className="hBody">
          Hellooo peeps.....👋
          <br />
          <br />
          As a part of Convergence, Hyderabad's biggest technical fest,we,the
          team of Tech Vision are excited to announce our event Silicon Dating.
          <br />
          <br />
          Salt doesn't taste good until it is used in the right amount....and
          your skill tooo, is not proved best unless it is serving the right
          idea.
          <br />
          <br />
          If you are stuck at finding a fabulous team for your idea
          implementation and are brainstorming where to invest your
          skills.......here comes the perfect team matching.
          <br />
          <br />
          It's more than Bumble or Tinder but also it's the platform where your
          skills can serve a better idea and your idea can get the best team.
          <br />
          <br />
          Make your start up grow more with the 2 days of Silicon Dating.
          <br />
          <b>Round 1 on 24/01/2023</b>
          <br />
          <b>Round 2 on 25/01/2023</b>
          <br />
          <br />
          <b>Note :</b> Convergence pass is a must
          <br />
          <br />
          Spot registrations also available
          <br />
          <br />
          <b>Any queries Contact:-</b>
          <br />
          Ananya :- 8309243777
          <br />
          Varun :- 7780475564
          <br />
          Naidhruv:- 8464847076
          <br />
        </div>
      </div>
    </div>
  );
}

export default Tech;
