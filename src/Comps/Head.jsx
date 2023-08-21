import React from 'react';
import './head.css';
import rock1 from '../assest/Group 3.png';
import rock2 from '../assest/Group 4.png';
import box from '../assest/Group 23_upscayl_16x_realesrgan-x4plus.png';


function Head() {
  return (
  <div className='hd'>
     <div className='imges'>
         <img alt='1' src={rock1} className='one'/>
         <img alt='2' src={rock2} className='two'/>
     </div>
     <div className='lego'>
         <div className='texto'>
            <h2>WHAT IS <span>OPEN JAM</span> ?</h2>
            <p>
               No matter if you want to make a background transparent (PNG)  or add all this and more with remove.bg.No matter if you want  to make a background transparent (PNG) or add all this and more withremove.bg.No matter if you want to make a background transparent (PNG)   and more with remove.bg.No matter if 
            </p>
         </div>
              <img alt='3' src={box}/>
     </div>
   </div>
  )
}

export default Head ;
