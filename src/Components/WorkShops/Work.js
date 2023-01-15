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
            <h4><b>Criteria :</b> Convergence Pass</h4>
            <h2>LIMITED REGISTRATIONS</h2>
            <h5>FIRST COME FIRST SERVE</h5>
          </span>
        </div>

        <div>
          <a target='_blank' href="https://forms.gle/pgdZbQQFzJhnhp61A">
            <div className="qrcode">
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <img className="qrImg" src={workshops} alt="qr" />
            </div>
          </a>
          <div className="scan" style={{ padding: "10px", textAlign: "center",color:"white" }}>
            Scan or click on the QR Code To Register
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
      <div className="cards">
        <Card card={card} />
      </div>
    </div>
  );
}

export default Work;
