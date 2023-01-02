import React, {useState, useEffect} from 'react';
import Basketball from "../../images/Basketball.png";
import Volleyball from "../../images/Volleyball.png";

import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
  }

  }, [])

  return (
    <nav>
      <div className='Navbar'>
        <div className='leftnav'>
       <img src='https://www.linkpicture.com/q/Elevate_23.png' className = "logo" alt='Logo' width="110px" />
       <button  onClick={toggleNav} className="btnnn"><img src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/32/000000/external-hamburger-basic-ui-jumpicon-glyph-jumpicon-glyph-ayub-irawan-2.png"/></button>
       </div>
       <div className='rightnav'>
      {(toggleMenu || screenWidth > 975) && (
          <ul className='list' id='list'>
            <li className='links'>
                <Link to="/" className='l'>
                  <img src="https://www.linkpicture.com/q/icons8-home-64.png" alt=" " width="40px"/>Home</Link>
            </li>
            {/* <li className='links'>
                <Link to="/About" className='l'>About Us</Link>
            </li> */}
            <li className='links'>
                <Link to="/Basketball" className='l'>
                <img src={Basketball} className= "limg" alt=" " width="30px"/>Basketball</Link>
            </li>
            <li className='links'>
                <Link to="/Volleyball" className='l'>
                <img src={Volleyball} className= "limg" alt="" width="30px"/>Volleyball</Link>
            </li>
          </ul>
       
      )}
      </div>
       </div>
        
    </nav>
  )
}

export default Navbar;
