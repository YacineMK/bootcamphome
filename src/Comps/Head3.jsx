import React from 'react'
import rock3 from '../assest/Group 4.png';
import omc from '../assest/LogoOMCWhite.png';
import './head.css';

function Head3() {
  return (
    <div className='openmind'>
    <img src={rock3} alt='3' className='tree'/>
      <div>
        <h2>ORGANIZERS</h2>
        <p>Open Minds Club is a student organization, that aims to promote the spirit of collaboration between students, sharing knowledge Free Open Source Philosophy inside and outside USTHB through 
        organisation of events and trainings such as the GNU/Linux</p>
        <img src={omc} alt='8' />
      </div>
    </div>
  )
}

export default Head3 ;
