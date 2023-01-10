import { useState } from 'react';
// import './App.css';
import Loading from '../Loading';
import convergence_logo from '../../Assets/convergence_logo.png';
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
                        <a href="https://www.townscript.com/e/national-technical-fest-convergence-2k23-experience-innovation-230102"><img className='logo_2' src={RegisterLogo} alt="Register" /></a>
                    </div>
                    <Footer />
                    <div className="filler"></div>
                    <div className="containerr">
                        {/* <Card /> */}
                        <div className="leftC">
                            <h1 className='homeHeading'>About</h1>
                            The Annual National Level Technical Symposium under the banner “CONVERGENCE” has been instrumental in shifting the paradigm of usual course work. Since its inception in 1999, it has evolved as an ultimate platform for techno maniacs. The 2012 edition has taken up an untraded path on its way to be stupendous, throwing light on new ideas. It brings in a series of events and activities spread over 2 days involving the students of myriad disciplines and hence broadening the horizons. The 27 year legacy of convergence would start on 15th of December and continues for 2 days, including series of events, workshops, technical presentations, fun events, talks, hackathons and many more!
                        </div>
                        <div className="rightC">

                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Home;
