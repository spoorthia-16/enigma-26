import './styles/Overview.css'
import Robot from '/robot.svg'
import Online from '/share.svg'
import Paper from '/paper.svg'
import Fun from '/fun.png'
import { HashLink } from 'react-router-hash-link';

const Overview = () => {
  return (
    <div className='overview-deisgn'>
        <h1>WHAT WE’VE GOT FOR YOU</h1>
        <div className='overview-container'>
            <img src={Robot} alt='event-design'/>
            <HashLink to="/Events#design-build"><h2>Design and Build Events</h2></HashLink>
            <p>The Design and Build events celebrate the convergence of creativity and engineering. Participants are required to craft robots that display resilient traits. Robots are specially tailored to engage in challenges like RoboKombat, Robosoccer, Mystique Locomotor and many other dynamic events.</p>
            <HashLink to="/Events#design-build"><i className="fa-solid fa-arrow-right"></i></HashLink>  
        </div>
        <div className='overview-container'>
            <img src={Paper} alt='event-design'/>
            <HashLink to="/Events#paper"><h2>Paper Events</h2></HashLink>
            <p>As participants engage in this intellectual journey, the Paper Events emerge as a celebration of diverse knowledge, offering a platform where minds collide. It includes events that celebrate the diversity of intellect and fuel the passion for knowledge exploration.</p>
            <HashLink to="/Events#paper"><i className="fa-solid fa-arrow-right"></i></HashLink>
        </div>
        <div className='overview-container'>
            <img src={Fun} alt='event-design'/>
            <HashLink to="/Events#fun"><h2>Fun Events</h2></HashLink>
            <p>The ultimate destination where technology meets the thrill. Fun events include a spectrum of endeavours where participants engage in dynamic challenges, unraveling the mysteries of  problem-solving.</p>
            <HashLink to="/Events#fun"><i className="fa-solid fa-arrow-right"></i></HashLink>
        </div>
    </div>
)
}

export default Overview