import { GiDiamondTrophy } from "react-icons/gi";
import "./Fun.css";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import qr from "../../Assets/qr.jpg";
import Navbar from "../Navbar/Navbar";

function Fun() {
  return (
      <>
        <Navbar />
        <div style={{minHeight: "80vh"}} className='text-warning display-1 font-bolder d-flex align-items-center justify-content-center text-center'><b>Announcements will be coming soon!</b></div>
      </>
  )
}

export default Fun;