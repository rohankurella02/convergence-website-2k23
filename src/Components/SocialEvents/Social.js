import { GiDiamondTrophy } from "react-icons/gi";
import "./Social.css";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import qr from "../../Assets/qr.jpg";
import Navbar from "../Navbar/Navbar";
import workshops from "../../Assets/workshops.jpeg";

function Social() {
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
      <div className="maincont pb">
        <div className="box">
          <span className="spanBox b10">
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

      <div className="row">
        <div class="newcard col">
          <div>
            <h1 className="hd1 hd2">
              Idea presentation competition of various social impacts
            </h1>
          </div>

          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">SOCH</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1 hd2">
              Presenting creative and innovative prototypes that address
              societal issues in stalls
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">AAVISHKAR</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1 hd2">
              An opportunity to hear out from a few unsung heroes of society who
              will discuss their achievements and life experiences
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">I AM NOT A HERO</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div class="newcard col">
          <div>
            <h1 className="hd1 hd2">
              Insights are given to children studying in government schools by
              inviting them to the college.
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">WILL YOU BE MY TEACHER</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1 hd2">
              Capturing diverse perspectives of people on current social issues
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">PARISH-<br />EELAN </h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1 hd2">
              Showcasing works and societal contributions of Team NSS
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">NSS GALLERY</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div class="newcard col">
          <div>
            <h1 className="hd1 hd2">
              {" "}
              It acts as a platform to Educate, Enlighten and Empower the fellow
              citizens by exhibiting various topics
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">JAGRUTHI </h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1 hd2">
              Creating awareness on Schlorships, National portals that provide
              Various benefits to students and Serves as a direction to future
              plans
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">DHIKSUCHI</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1 hd2">
              {" "}
              Wealth Out of Waste <br />
              (Making any useful product from waste materials){" "}
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">WOW</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div class="newcard col">
          <div>
            <h1 className="hd1 hd2">
              A platform that brings students to know more about the college
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">WHAT DO YOU KNOW ABOUT COLLEGE</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1 hd2">
              Application for Voter ID and representing the importance for
              voting and its role in Nation's Future
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">VOTE FOR NATION </h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1 hd2">
              Helps in understanding our constitution and the way our parliament
              is implemented
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">YOUTH PARLIA-<br />MENT</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div class="newcard col">
          <div>
            <h1 className="hd1 hd2">
              A platform to showcase our own history and culture
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">సాహిత్య సందడి</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1 hd2">
              A rapid fire to showcase your talent in the fastest time possible
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">జిజ్ఞాస </h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>

        <div class="newcard col">
          <div>
            <h1 className="hd1 hd2">
              Choose a side for a given topic and stand by it with your strong
              points
            </h1>
          </div>
          <div class="cover">
            <div class="coverFront">
              <div>
                <h1 className="num">సభా పర్వం</h1>
              </div>
            </div>
            <div class="coverBack"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
