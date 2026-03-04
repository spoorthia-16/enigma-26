import Ribbon from '/ribbon.svg'
import './styles/Sponsors.css'

const SponsCard = ({ image, desc }) => {
    console.log(image, desc)
    return (
        <div className='spons-card'>
            <img src={image} alt='spons-logo' className='spons-logo' />
            <img src={Ribbon} alt='ribbon' className='ribbon-design' />
            <p>{desc} PARTNER</p>
        </div>
    )
}

export default SponsCard