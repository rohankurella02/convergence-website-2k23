import Navbar from "../Navbar/Navbar";
import "./shack.css";
import qr from "../../Assets/qr.jpg";
import { GiDiamondTrophy } from "react-icons/gi";
import hackathon from "../../Assets/hackathon.jpg";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

function Shack({ type }) {
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
          <span className="spanBox">
            <h2>Registration</h2>
            <p>
              <b>Criteria</b> : Convergence Pass
            </p>
            <p>
              <b>Team Size :</b> 3 - 4
            </p>
            <h5>DEADLINES</h5>
            <p>
              <b>Registration:</b> 12th DEC,2023
            </p>
            <p>
              <b>Intramurals :</b> 9th DEC,2023
            </p>
          </span>
        </div>

        <div>
          <a
            target="_blank"
            href="https://www.mihvnrvjiet.org/convergence-hackathon"
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
            <h1>Prize Pool and Support upto</h1>
            <br></br>
            <h1>75,000/-</h1>

            <GiDiamondTrophy size={100} />
          </span>
        </div>
      </div>
      <div className="bdy">
        <div className="heading">
          <h1>{type} Hackathon</h1>
        </div>
        <div className="hBody">
          As a part of <b>Convergence</b>, Hyderabad's biggest technical fest,
          we, the team of HACKATHONS are excited to announce our <b>theme</b>{" "}
          for this year: <b>DIGITAL ERA 2.0.</b>
          <br />
          <br />
          The main objective of theme <b>DIGITAL ERA 2.0</b> is to ensure that
          the solutions are implemented in our daily lives with ease. Hackathons
          are the <b>best place</b> where you can come up with{" "}
          <b>innovative solutions</b> that lead to the betterment of the world
          around you!
          <br />
          <br />
          <b>Theme :</b> DIGITAL ERA 2.0
          <br />
          <b>Date :</b> 14th-15th December, 2023
          <br />
          <b>Time :</b> 24 hrs Hackathon
          <br />
          <b>Deadline to register :</b> 12th December,2023
          <br />
          <b>Intramurals :</b> 9th December, 2023
          <br />
          <b>Team size :</b> 3-4
          <br />
          <b>Prize pool :</b> Rs.75,000 for each hackathon
          <br />
          <br />
          <b>Hackathon Process:</b>
          <br />
          1. Once you've come up with a solution, upload the PPT in the
          registration form given. 2. Teams will be shortlisted based on the PPT
          and results will be updated on 21st January, 2023.
          <br />
          <br />
          <b>Abstract sample:</b> You can find the abstract sample{" "}
          <a className="aref" href="https://tinyurl.com/CH23-abstract-sample">
            here
          </a>
          <br />
          <br />
          <b>Abstract guidelines :</b>You can find the abstract guidelines{" "}
          <a className="aref" href="https://tinyurl.com/abstract-guide">
            here
          </a>
          <br />
          <br />
          <b>Note :</b> <br />
          1. Teaming up with anyone across any college of India, for
          registration is acceptable. <br />
          2. Convergence pass is mandatory for shortlisted candidates. <br />
          3. You can attend Intramurals to understand code-of-conduct of the
          hackathon and meet mentors to level up your hackathon experience -
          Optional <br />
          4. The final round will be held in the premises of VNRVJIET. Travel
          expenses won't be given by us. <br />
          5. The organizers are not responsible for any action taken as a
          consequence of violation of rules. <br />
          <br />
          <br />
          <b>So, what are you waiting for?</b> Come up with your innovative
          ideas and be a part of this amazing journey!
          <br />
          <br />
          <b> For any queries, please contact:</b>
          <br />
          Nithin- 7396813838
          <br />
          Adithya- 6302722627
          <br />
        </div>
      </div>
    </div>
  );
}

export default Shack;
