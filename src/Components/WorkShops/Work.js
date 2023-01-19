import { GiDiamondTrophy } from "react-icons/gi";
import "./Work.css";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import qr from "../../Assets/qr.jpg";
import Navbar from "../Navbar/Navbar";
import workshops from "../../Assets/workshops.jpeg";

function Work() {
  var [windowSize, setWindowSize] = useState(getWindowSize());

  var [card, setCard] = useState([
    {
      id: 1,
      heading: "One",
      text: "React Native",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 2,
      heading: "Two",
      text: "Applied AI",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "Three",
      text: "Automative Embedded Systems",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "Four",
      text: "Analysing and Visualising data through advanced frameworks",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "Five",
      text: "3D Modelling and 3D Printing",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "Six",
      text: "Robotics and Drones",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "Seven",
      text: "DevOps",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "Eight",
      text: "IOT Workshop using ESP32 and NodeMCU",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "Nine",
      text: "Smart Vehicles",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "Ten",
      text: "The Role of Mathematics in Mezzanine Technologies",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "Eleven",
      text: "Design of Anchored Connections",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "Twelve",
      text: "Ethical Hacking",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
  ]);

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
            <h2>LIMITED REGISTRATIONS</h2>
            <h2>FIRST COME FIRST SERVE</h2>
          </span>
        </div>

        <div>
          <a target="_blank" href="https://forms.gle/pgdZbQQFzJhnhp61A">
            <div className="qrcode">
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <img className="qrImg" src={workshops} alt="qr" />
            </div>
          </a>
          <div
            className="scan"
            style={{
              paddingTop: "10px",
              paddingBottom: "70px",
              textAlign: "center",
              color: "white",
            }}
          >
            Click QR To Register
          </div>
        </div>
        <div className="box">
          <span className="spanBox">
            <h2>Student Coordinator</h2>
            <p>Sai Shreya - 8688761933</p>
            <p>Bhanusree - 6305745015</p>
            <p>Ravi - 9912263085</p>
            <p>Navya - 9652046095</p>
          </span>
        </div>
      </div>
      <div className="domain">
        <h1>Domains</h1>
      </div>

      <div className="row">
        <div class="newcard col">
          <div>
            <h1 className="hd1">React Native</h1>
          </div>

          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">01</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1">Applied AI</h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">02</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1">Automative Embedded Systems</h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">03</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div class="newcard col">
          <div>
            <h1 className="hd1">
              Analysing and Visualising data through advanced frameworks
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">04</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1">3D Modelling and 3D Printing</h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">05</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1">Robotics and Drones</h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">06</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div class="newcard col">
          <div>
            <h1 className="hd1">DevOps</h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">07</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1">IOT Workshop using ESP32 and NodeMCU</h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">08</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1">Smart Vehicles</h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">09</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div class="newcard col">
          <div>
            <h1 className="hd1">
              The Role of Mathematics in Mezzanine Technologies
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">10</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1">Design of Anchored Connections</h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">11</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1">Ethical Hacking</h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">12</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
