import React from 'react'

import Image from '../../UI/image/Image'
import TeamCard from './TeamCard'
import './TeamTrust.css'
const TeamTrust = () => {
  return (
    <div className="team-trust">
        <Image 
        src="./assets/images/teamtrust.png" 
        alt="team you can trust"  
        className="Team-Image" />
        <TeamCard />
        
    </div>
  )
}

export default TeamTrust