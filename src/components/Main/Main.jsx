import React from 'react'
import Employees from './Employee'
import LatestNews from './LatestNews'
import './Main.css'
import TeamTrust from './TeamTrust'
import WhyChooseUs from './WhyChooseUs'
import SpeakToExpert from './SpeakToExpert'

const Main = () => {
  return (
    <main className="main" >
        <WhyChooseUs />
        <TeamTrust />
        <LatestNews />
        <Employees />
        <SpeakToExpert />
    </main>
  )
}

export default Main