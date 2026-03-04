import './styles/Techsandhya.css'
import TechS from '/7th.jpg'

const Techsandhya = () => {
  return (
    <div className='techs-design'>
      <h1>TECHSANDHYA</h1>
      <div className='techs-inner'>
        <img src={TechS} alt='techsandhya' />
        <div className='techs-content'>
          <p>Techsandhya is the technical newsletter of the college, published annually by The Malnad Technical Club. It was launched in 2016 with the vision of providing tech-savvy students an opportunity to showcase their ideas on technical topics.</p>
          <a href='/enigma24/techsandhya(7.0).pdf'>Techsandhya 7.0</a>
        </div>
      </div>
    </div>
  )
}

export default Techsandhya