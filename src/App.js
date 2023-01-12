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
import Talk from "./Components/TalktheChange/Talk";
import Team from "./Components/Team/Team";
import CodingContest from "./Components/coding-contest/coding-contest"
import ProjectContest from "./Components/project-contest/project-contest"

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
      <Route path="/work-shops" element={<Work />} />
      <Route path="/talkthe-change" element={<Talk />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contests">
        <Route path="coding-contest" element={<CodingContest/>}/>
        <Route path="project-contest" element={<ProjectContest/>}/>
        <Route path="capture-the-flag" element={<p>capture the flag</p>}/>
      </Route>
    </Routes>
  );
}

export default App;
