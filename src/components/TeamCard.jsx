import React from 'react'
import './styles/Teams.css'
import Ribbon from '/teamRibbon.svg'

 
const TeamCard = (props) => {
  return (
    <div className='teamCard'>
        <img src={props.img} alt='team-member' className='team-image'/>
        <img src={Ribbon} alt='ribbon' className='team-ribbon'/>
        <p>{props.name}</p>
    </div>
  )
}

export default TeamCard