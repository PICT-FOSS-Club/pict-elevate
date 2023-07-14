import React, {useState, useEffect} from 'react';
import Basketball from "../../images/Basketball.png";
import Volleyball from "../../images/Volleyball.png";
import home from "../../images/home.png";
import logo from "../../images/Elevate_23.png";

import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  const Reload = () =>{
    toggleNav();
    window.location.href = "/";

  }
  
  function Scroll() {
    window.scroll(0,0); 
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
       <img src={logo} className = "logo" alt='' width="110px" />
       <button onClick={toggleNav} className="btnnn"><img src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/32/000000/external-hamburger-basic-ui-jumpicon-glyph-jumpicon-glyph-ayub-irawan-2.png" alt=""/></button>
       </div>
       <div className='rightnav'>
      {(toggleMenu || screenWidth > 975) && (
          <ul className='list' id='list'>
            <li className='links'>
                <Link to="/" className='l' onClick={Reload}>
                  <img src={home} alt="" width="40px"/>Home</Link>
            </li>
            {/* <li className='links'>
                <Link to="/About" className='l'>About Us</Link>
            </li> */}
            <li className='links'>
                <Link to="/Basketball" onClick={Scroll} className='l'>
                <img src={Basketball} className= "limg" alt="" width="30px"/>Basketball</Link>
            </li>
            <li className='links'>
                <Link to="/Volleyball" onClick={Scroll} className='l'>
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
