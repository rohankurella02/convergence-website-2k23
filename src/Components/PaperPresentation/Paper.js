import { GiDiamondTrophy } from "react-icons/gi";
import './Paper.css';
import { useEffect, useState } from 'react';
import Card from "../Card/Card";
import qr from '../../Assets/qr.jpg';
import Navbar from "../Navbar/Navbar";


function Paper() {
    var [windowSize, setWindowSize] = useState(getWindowSize());

    var [card, setCard] = useState([
        {
            id: 1,
            heading: 'One',
            text: 'AI/ML/DL',
            cardHeading: {fontSize: '2.5rem'},
            cardText: {fontSize: '1.5rem'},
        },
        {
            id: 2,
            heading: 'Two',
            text: 'Cyber Security',
            cardHeading: { fontSize: '2.5rem' },
            cardText: { fontSize: '1.5rem' },
        },
        {
            id: 1,
            heading: 'Three',
            text: '5G Wireless System',
            cardHeading: { fontSize: '2.5rem' },
            cardText: { fontSize: '1.5rem' },
        },
        {
            id: 1,
            heading: 'Four',
            text: 'Electrical Vehicles',
            cardHeading: { fontSize: '2.5rem' },
            cardText: { fontSize: '1.5rem' },
        },
        {
            id: 1,
            heading: 'Five',
            text: 'Renewable Energy',
            cardHeading: { fontSize: '2.5rem' },
            cardText: { fontSize: '1.5rem' },
        },
        {
            id: 1,
            heading: 'Six',
            text: 'Process Control Automation',
            cardHeading: { fontSize: '2.5rem' },
            cardText: { fontSize: '1.5rem' },
        },
        {
            id: 1,
            heading: 'Seven',
            text: 'Structural Health Monitoring',
            cardHeading: { fontSize: '2.5rem' },
            cardText: { fontSize: '1.5rem' },
        },
        {
            id: 1,
            heading: 'Eight',
            text: 'Internet Of Things',
            cardHeading: { fontSize: '2.5rem' },
            cardText: { fontSize: '1.5rem' },
        },
        {
            id: 1,
            heading: 'Nine',
            text: 'Mobility, Automotive and Transportation',
            cardHeading: { fontSize: '2.5rem' },
            cardText: { fontSize: '1.5rem' },
        },
        {
            id: 1,
            heading: 'Ten',
            text: 'Trends in Automobile',
            cardHeading: { fontSize: '2.5rem' },
            cardText: { fontSize: '1.5rem' },
        },
    ])

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    function getWindowSize() {
        var { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }


    return (
        <div>
            <Navbar />
            <div className='maincont'>
                <div className="box"><span className="spanBox">
                    <h2>Registration</h2>
                    <p><b>Criteria</b> : Convergence Pass</p>
                    <br />
                    <h2>Student Coordinator</h2>
                    <p>John Doe - 9999999999</p>
                </span></div>

                <div>
                    <div className='qrcode'>
                        <span className='span'></span>
                        <span className='span'></span>
                        <span className='span'></span>
                        <span className='span'></span>
                        <img className="qrImg" src={qr} alt="qr" />
                    </div>
                    <h2 style={{padding: "10px", textAlign: "center"}}>Scan To Register</h2>
                </div>
                <div className="box"><span className="spanBox">
                    <h2>Prize Money</h2>
                    <p style={{paddingBottom: "10px"}}><b>Winner</b> : Rs. 5000 /-</p>
                    <p><b>Runner</b> : Rs. 3000 /-</p>
                    <br />
                    <h3 style={{paddingBottom: "10px"}}>Two Consolation Prizes</h3>
                    <p> Rs. 2000 /-</p>
                </span></div>
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

export default Paper;