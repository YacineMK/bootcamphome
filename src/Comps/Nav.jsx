import React, { useState } from 'react';
import './nav.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import log from '../assest/logo.png';
import button from '../assest/button.png';
import backgroundo from '../assest/DES.png';

function Navbar() {
  const [isopen, setisopen] = useState(false);

  const toggleNav = () => {
    setisopen(!isopen);
  };

  return (
    <div className='bak' style={{ backgroundImage: `url(${backgroundo})` }}>
      <nav>
        <img className='logo' alt='logo' src={log} />
        <button className='menu' onClick={toggleNav}>
          {isopen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`partG ${isopen ? 'open' : ''}`}>
          <li className='links'>HOME</li>
          <li className='links'>ABOUT EVENT</li>
          <li className='links'>ABOUT US</li>
          <li className='links'>SIGN IN</li>
        </ul>
      </nav>
      <div className='hed'>
        <h2>L’ETS MIX OPEN SOURCE WITH GAME </h2>
        <p>No matter if you want to make a background transparent (PNG) or add all this and more with remove.bg.</p>
        <img alt='strtbtn' className='btn' src={button} />
      </div>
    </div>
  );
}

export default Navbar ;