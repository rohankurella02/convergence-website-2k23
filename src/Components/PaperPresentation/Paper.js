import { GiDiamondTrophy } from "react-icons/gi";
import "./Paper.css";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import qr from "../../Assets/qr.jpg";
import Navbar from "../Navbar/Navbar";

function Paper() {
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
            <h4>Registration Criteria:</h4> <h4>Convergence Pass</h4>
            <h5>
              <b>Team Size:</b> 1-3
            </h5>
            <h5>DEADLINES</h5>
            <h5>
              <b style={{ display: "inline-block"}}>Registration:</b>
              15th JAN,2023
            </h5>
            <h5>
              <b>Submission:</b> 17th JAN,2023
            </h5>
          </span>
        </div>

        <div>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfTew9ecYxpTJmZ7wunqu5h-40IC3lXB9rUP5SMlgKjyNkRaA/viewform"
          >
            <div className="qrcode">
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <img className="qrImg" src={qr} alt="qr" />
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
            <h4>Student Coordinators</h4>
            <br />
            <h5>Sushma-7075748018</h5>
            <h5>Chaithanya-9347122029</h5>
            <h5>Aashritha-9100002412</h5>
            <h5>Neha Reddy-7729933894</h5>
            <h5>Harveni-9440377304</h5>
          </span>
        </div>
      </div>

      <div className="box b1">
        <span className="spanBox">
          <h1>Prize Pool</h1>
          <br></br>
          <h1>15,000/-</h1>
          <GiDiamondTrophy size={100} />
        </span>
      </div>

      <div className="domain">
        <h1>Domains</h1>
      </div>

      <div className="row">
        <div class="newcard col">
          <div>
            <h1 className="hd1">AI/ML/DL</h1>
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
            <h1 className="hd1">Cyber Security</h1>
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
            <h1 className="hd1">5G Wireless System</h1>
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
        <div class="newcard1 col">
          <div>
            <h1 className="hd1">
             Electrical Vehicles
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

        <div class="newcard1 col">
          <div>
            <h1 className="hd1">Renewable Energy</h1>
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
      </div>

      <div className="row">
          <div class="newcard col">
          <div>
            <h1 className="hd1">Process Control Automation</h1>
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
        <div class="newcard col">
          <div>
            <h1 className="hd1">Structural Health Monitoring</h1>
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
            <h1 className="hd1">Internet Of Things</h1>
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

      </div>

      <div className="row">
         <div class="newcard1 col">
          <div>
            <h1 className="hd1">Mobility, Automotive and Transportation</h1>
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
        <div class="newcard1 col">
          <div>
            <h1 className="hd1">
             Trends in Automobile
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
      </div>
    </div>
  );
}

export default Paper;
