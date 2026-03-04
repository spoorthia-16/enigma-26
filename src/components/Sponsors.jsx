import './styles/Sponsors.css'
import SponsCard from './SponsCard'
import { stock, vcc, ktm, esscee, hexa, poorvika, teachnook, hassanNews } from './index.js'

const sponsDetails = [
    { id: 1, image: ktm, "desc": "TITLE" },
    { id: 2, image: hassanNews, "desc": "SOCIAL MEDIA" },
    { id: 3, image: poorvika, "desc": "CERTIFICATE" },
    { id: 4, image: hexa, "desc": "TICKETING" },
    { id: 5, image: stock, "desc": "PLATFORM" },
    { id: 6, image: teachnook, "desc": "EDUCATION" },
    { id: 7, image: esscee, "desc": "PRINTING" },
    { id: 8, image: vcc, "desc": "NEWS" },
]

const Sponsors = () => {
    return (
        <div className='spons-design'>
            <h1>Our Previous Sponsors</h1>
            {/* <p className='spons-p'>We invite prospective sponsors to join hands with us in powering innovation and excellence at our upcoming Enigma'24, The National Level Technical Fest. Your sponsorship is key to ensuring this event a resounding success!</p> */}
            <div className='spons-container'>
                {sponsDetails.map((content, index) => {
                    return (
                        <SponsCard key={index} image={content.image} desc={content.desc} />
                    );
                })}
            </div>
        </div>
    )
}

export default Sponsors