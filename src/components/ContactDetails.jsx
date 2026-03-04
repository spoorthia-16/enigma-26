import './styles/Contact.css'
import ParallaxBackground from './ParallaxBackground'

const ContactDetails = ({ children }) => {
    return (
        <ParallaxBackground showTitleBlock={false}>
            <div className='contact-details'>
                <h1>CONTACT US</h1>
                <div className='contact-container'>
                    <h2>Get in Touch.</h2>
                    <div className='contact-card'>
                        <div className='card-left'>
                            <p>Prajwal L R</p>
                            <span>Committee Chairperson</span>
                        </div>
                        <div className='card-right'>
                            <a href='tel:+916361034226'>Ph: +91 6361034226</a>
                        </div>
                    </div>
                    <div className='contact-card'>
                        <div className='card-left'>
                            <p>Shreyas S</p>
                            <span>Committee Vice-Chairperson</span>
                        </div>
                        <div className='card-right'>
                            <a href='tel:+917019347171'>Ph: +91 7019347171</a>
                        </div>
                    </div>
                    <div className='contact-card'>
                        <div className='card-left'>
                            <p>Spoorthi A</p>
                            <span>Marketing and Publicity</span>
                        </div>
                        <div className='card-right'>
                            <a href='tel:+918431121367'>Ph: +91 7624840897</a>
                        </div>
                    </div>
                    <div className='contact-card'>
                        <div className='card-left'>
                            <p>Tejas Noojile</p>
                            <span>Event Coordinator</span>
                        </div>
                        <div className='card-right'>
                            <a href='tel:+919742845340'>+91 9742845340</a>
                        </div>
                    </div>
                    <div className='contact-card'>
                        <div className='card-left'>
                            <p>Mail to:</p>
                        </div>
                        <div className='card-right'>
                            <a href='mailto: mce.techclub@gmail.com'>mce.techclub@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </ParallaxBackground>
    )
}

export default ContactDetails