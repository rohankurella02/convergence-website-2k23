import { useState } from 'react';
import './App.css';
import Loading from './Components/Loading';
import convergence_logo from './Assets/convergence_logo.png';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import RegisterLogo from './Assets/register.png';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Paper from './Components/PaperPresentation/Paper';
import Team from './Components/Team/Team';

function App() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 7000);

  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/paper-presentation" element={<Paper />} />
      <Route path="/team" element={<Team />} />
     </Routes>
  );
}

export default App;
