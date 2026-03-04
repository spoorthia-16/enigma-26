import './styles/Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = ({ showOtherSites = false }) => {
    return (
        <div className='foot'>
            {showOtherSites && (
                <div className='ohter-sites'>
                    <h1>
                        OTHER SITES
                    </h1>
                    <div className='sitesLinks'>
                        <a href='https://malnadtechnicalclub.com'>THE MALNAD TECHNICAL CLUB</a>
                        <a href='https://mcehassan.ac.in'>MALNAD COLLEGE OF ENGINEERING</a>
                    </div>
                </div>
            )}
            <footer>
                <div className='contact'>
                    <div className='quickLinks'>
                        <h3>QUICK LINKS</h3>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/Events'>Events</NavLink>
                        <NavLink to='/Team'>Team</NavLink>
                        <NavLink to='/Contact'>Contact</NavLink>
                        <NavLink to='/terms'>Terms and Conditions</NavLink>
                        <NavLink to='/refund'>Refund Policy</NavLink>
                    </div>
                    <div className='stayTouch'>
                        <h3>STAY IN TOUCH</h3>
                        <div className='stayCard'>
                            <div className='social'>
                                <a href='https://www.instagram.com/malnad_technical_club/'>Instagram</a>
                                <a href='https://www.facebook.com/FoundationsMTC'>Facebook</a>
                                <a href='https://twitter.com/MalnadTechClub/'>Twitter</a>
                                <a href='https://www.youtube.com/@themalnadtechnicalclub'>Youtube</a>
                            </div>
                            <div className='social-icons'>
                                <a href='https://www.instagram.com/malnad_technical_club/'><i className="fa-brands fa-instagram"></i></a>
                                <a href='https://www.facebook.com/FoundationsMTC'><i className="fa-brands fa-facebook"></i></a>
                                <a href='https://twitter.com/MalnadTechClub/'><i className="fa-brands fa-x-twitter"></i></a>
                                <a href='https://www.youtube.com/@themalnadtechnicalclub'><i className="fa-brands fa-youtube"></i></a>
                            </div>
                            <div className='address'>
                                <a href='https://www.google.com/maps/place/Malnad+College+of+Engineering/@13.0237294,76.0999861,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba5483386aa3ffd:0x1ffd88ffad2a1ca6!8m2!3d13.0237242!4d76.1021748?shorturl=1'>
                                    <p>No. 21 . Salagame Road</p>
                                    <p>Rangoli Halla, Hassan</p>
                                    <p>Karnataka - 573202</p>
                                </a>
                                <p><a href="mailto: mce.techclub@gmail.com">mce.techclub@gmail.com</a></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='develop'>
                    <p><i className="fa-regular fa-copyright"></i> Enigma'24</p>
                    <p>Designed and Developed by The Malnad Technical Club 🚀.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer