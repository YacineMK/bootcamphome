import React from 'react'
import './head2.css';
import tab from '../assest/4275167-removebg-preview(1) 1.png';
import rock4 from '../assest/Group 4.png';
import rock5 from '../assest/rock-removebg-preview 2.png';
import dis from '../assest/discord.png';

function Head2() {
  return (
    <div className='dis'>
      <div className='pics'>
         <img src={rock4} alt='2' className='uno' />
         <img src={rock5} alt='2' className='tqo'/>
         <img src={rock5} alt='2' className='ther'/>
      </div>
      <div className='sd'>
      <img src={tab} alt='2' className='vd'/>
      <div className='content'>
          <h2>HOW CAN I <span>Join</span> ?</h2>
          <p>No matter if you want to make a background transparent swi (PNG) or add all this and m remove.bg.No matter if you want to make a gg background transparent (PNG) or add all this</p>
          <a href='#' alt='j' className='abn'> Join us <img src={dis} alt='8' /></a>
      </div>
      </div>
    </div>
  )
}

export default Head2 ;
