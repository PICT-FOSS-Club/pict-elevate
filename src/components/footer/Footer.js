import React from 'react';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import LinkedIn from '../../images/linkedin.png';
import { Link } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
  function scroll(){
    window.scroll(0,0);
  }

  return (
    <footer>
  <div className="footer-wrap">
    <div className="container first_class">
      <div className="row">
        <div className="col-md-8 col-sm-6">
          <h3>Welcome to the Largest Sports Event of Pune Institute of Computer Technology</h3>
          <p>Visit our webpage and do register as soon as possible !!!</p>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="col-md-12">
            <div className="standard_social_links">
              <div className='linkbox'>
                <li className='sociallink'><a href='https://www.facebook.com/profile.php?id=100088980592808&mibextid=ZbWKwL' rel="noreferrer" target="_blank"><img src={facebook} alt="" width="40px"/></a>
                </li>
                <li className='sociallink'><a href="https://instagram.com/elevate2k23?igshid=YmMyMTA2M2Y=" rel="noreferrer" target="_blank"><img src={instagram} alt="" width="40px"/></a>
                </li>
                <li className='sociallink'><a href="https://www.linkedin.com/mwlite/in/pict-elevate-383834261" rel="noreferrer" target="_blank"><img src={LinkedIn} alt="" width="40px"/></a>
                </li>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
    <div className="second_class">
      <div className="container second_class_bdr">
        <div className="row">
          <div className="col-md-6">
            <h3>Quick  LInks</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a>
              </li>
              <li><a href="#about">About us</a>
              </li>
              <li><a href="#sponsors">Sponsors</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>CONTACT US ON</h3>
            <ul className="footer-category">
              <button className='endbtn' onClick={scroll}><Link to="/Team" className='btnlink'>Our Team</Link></button>
              <li><span>Digvijay Shingare: +91 8485006432</span>
              </li>
              <li><span>Ashutosh Birajdar: +91 9561432556</span>
              </li>
              <li><span>Vinayak Jamadar: +91 7020563855</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="container-fluid">
        <div className="copyright"> Copyright 2023 | All Rights Reserved by PICT Pune</div>
      </div>
    </div>
  </div></footer>

  );
}

export default Footer;
