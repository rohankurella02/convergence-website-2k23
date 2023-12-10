import { useState } from 'react';
// import './App.css';
import "./Home.css";
import Loading from '../Loading';
import convergence_logo from '../../Assets/convologowhite.png';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import RegisterLogo from '../../Assets/register.png';
import intro from '../../Assets/intro.png'


function Home() {

    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 7000);

    return (
        <>
            {loading ? <Loading /> :
                <div className="App">
                    <Navbar />
                    <div className="home_container">
                        <img className='logo_1' src={convergence_logo} alt="Loading" />
                        <a href="https://linktr.ee/vnrvjiet_event"><img className='logo_2' src={RegisterLogo} alt="Register" /></a>
                    </div>
                    <Footer />
                    <div className="filler"></div>
                    <div className="containerr">
                        {/* <Card /> */}
                        <div className="leftC">
                            <h1 className='homeHeading headinghome'>About</h1>
                            <p className="contenhome">The Annual National Level Technical Symposium under the banner “CONVERGENCE” has been instrumental in shifting the paradigm of usual course work. Since its inception in 1999, it has evolved as an ultimate platform for techno maniacs. The 2012 edition has taken up an untraded path on its way to be stupendous, throwing light on new ideas. It brings in a series of events and activities spread over 2 days involving the students of myriad disciplines and hence broadening the horizons. The 28 year legacy of convergence would start on 24th of January, 2023 and continues for 2 days, including series of events, workshops, technical presentations, fun events, talks, hackathons and many more!</p>
                        </div>
                        <div className="rightC">
                            <h1 className='homeHeading_2'>Powered By</h1>
                            <div className='clubs'>
                                <div className='club'>
                                <img className='club_logos' src="https://res.cloudinary.com/da1f0jqh8/image/upload/v1674064127/LOGOs/1_irn4iu.png" alt="Loading" />
                            </div>
                            <div className='club'>
                                <img className='club_logos' src="https://res.cloudinary.com/da1f0jqh8/image/upload/v1674064125/LOGOs/2_ipltqv.png" alt="Loading" />
                            </div>
                            <div className='club'>
                                <img className='club_logos' src="https://res.cloudinary.com/da1f0jqh8/image/upload/v1674064127/LOGOs/3_adgki1.png" alt="Loading" />
                            </div>
                            <div className='club'>
                                <img className='club_logos' src="https://res.cloudinary.com/da1f0jqh8/image/upload/v1674064126/LOGOs/4_hfz0ku.png" alt="Loading" />
                            </div>
                            <div className='club'>
                                <img className='club_logos' src="https://res.cloudinary.com/da1f0jqh8/image/upload/v1674064125/LOGOs/5_jitrt5.png" alt="Loading" />
                            </div>
                            <div className='club'>
                                <img className='club_logos' src="https://res.cloudinary.com/da1f0jqh8/image/upload/v1674064125/LOGOs/6_how8fh.png" alt="Loading" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Home;
