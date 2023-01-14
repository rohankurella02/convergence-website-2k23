import { useState } from "react";
import "./App.css";
import Loading from "./Components/Loading";
import convergence_logo from "./Assets/convergence_logo.png";
import Card from "./Components/Card/Card";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import RegisterLogo from "./Assets/register.png";
import { Route, Routes } from "react-router-dom";
import Shack from "./Components/soft_hack/shack";
import Home from "./Components/Home/Home";
import Paper from "./Components/PaperPresentation/Paper";
import Work from "./Components/WorkShops/Work";
import Robo from "./Components/Robotics/Robo";
import Mod from "./Components/Models/Mod";
import Talk from "./Components/TalktheChange/Talk";
import Tech from "./Components/TechVision/Tech";
import Fun from "./Components/FunEvents/Fun";
import Social from "./Components/SocialEvents/Social";
import Team from "./Components/Team/Team";
import CodingContest from "./Components/coding-contest/coding-contest"
import ProjectContest from "./Components/project-contest/project-contest"
import CaptureFlag from "./Components/capture-the-flag/capture-the-flag"
function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 7000);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hackathon" element={<Shack />} />
      <Route path="/paper-presentation" element={<Paper />} />
       <Route path="/robotic-s" element={<Robo />} />
        <Route path="/model-s" element={<Mod/>} />
      <Route path="/work-shops" element={<Work />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contests">
        <Route path="coding-contest" element={<CodingContest/>}/>
        <Route path="project-contest" element={<ProjectContest/>}/>
        <Route path="capture-the-flag" element={<CaptureFlag/>}/>
      </Route>
      <Route path="/awareness">
        <Route path="talkthe-change" element={<Talk/>}/>
        <Route path="tech-vision" element={<Tech/>}/>
      </Route>
      <Route path="/events">
        <Route path="social-events" element={<Social/>}/>
        <Route path="fun-events" element={<Fun/>}/>
      </Route>
      
      
    </Routes>
  );
}

export default App;
