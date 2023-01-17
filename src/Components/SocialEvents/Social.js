import { GiDiamondTrophy } from "react-icons/gi";
import "./Social.css";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import qr from "../../Assets/qr.jpg";
import Navbar from "../Navbar/Navbar";
import workshops from "../../Assets/workshops.jpeg";

function Social() {
  var [windowSize, setWindowSize] = useState(getWindowSize());

  var [card, setCard] = useState([
    {
      id: 1,
      heading: "SOCH",
      text: "Idea presentation competition of various social impacts",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 2,
      heading: "AAVISHKAR",
      text: "Presenting creative and innovative prototypes that address societal issues in stalls",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "I AM NOT A HERO ",
      text: "An opportunity to hear out from a few unsung heroes of society who will discuss their achievements",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "WILL YOU BE MY TEACHER",
      text: "Insights are given to children studying in government schools by inviting them to the college",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "PARISHEELAN",
      text: " Capturing diverse perspectives of people on current social issues",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "NSS GALLERY",
      text: "Showcasing works and societal contributions of Team NSS",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "JAGRUTHI",
      text: "It acts as a platform to Educate, Enlighten and Empower the fellow citizens by exhibiting various topics.",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "DHIKSUCHI",
      text: "Creating awareness on Schlorships, National portals that provide Various benefits to students and Serves as a direction to future plans",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: " WOW ",
      text: "Wealth Out of Waste ( Making any useful product from waste materials)",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "WHAT DO YOU KNOW ABOUT COLLEGE",
      text: "A platform that brings students to know more about the college",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "VOTE FOR NATION",
      text: " Application for Voter ID and representing the importance for voting and its role in Nation's Future",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "YOUTH PARLIAMENT",
      text: "Helps in understanding our constitution and the way our parliament is implemented.",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "సాహిత్య సందడి",
      text: "A platform to showcase our own history and culture",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "జిజ్ఞాస",
      text: "A rapid fire to showcase your talent in the fastest time possible",
      cardHeading: { fontSize: "2.5rem" },
      cardText: { fontSize: "1.5rem" },
    },
    {
      id: 1,
      heading: "సభా పర్వం( Debate)",
      text: "Choose a side for a given topic and stand by it with your strong points",
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
              <b>Criteria :</b> Convergence Pass
            </p>
            <h2>Dates</h2>
            <p>24th & 25th Jan 2023</p>
          </span>
        </div>

        <div>
          <div className="domain">
            <h3>NSS, VJSV, VNRSF</h3>
            <h4>presents</h4>
            <h1>SAARADHI</h1>
          </div>
        </div>
        <div className="box">
          <span className="spanBox">
            <h2>Student Coordinators</h2>
            <p>C. SriRam Reddy- 7386359926</p>
            <p>P. Yashwanth - 8639238677</p>
            <p>L. Sravanthi - 7569357756</p>
            <p>P. Pavani - 9059864632</p>
          </span>
        </div>
      </div>

      <div className="cards">
        <Card card={card} />
      </div>
    </div>
  );
}

export default Social;
