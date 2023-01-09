import React from 'react';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import "./footer.css";

const Footer = () => {

  const openTeam = () =>{
    window.location.href = "/Team";
  }
  return (
    <footer>
  <div className="footer-wrap">
    <div className="container first_class">
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <h3>Welcome to the Largest Sports Event of Pune Institute of Computer Technology</h3>
          <p>Visit our webpage and do register as soon as possible !!!</p>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="col-md-12">
            <div className="standard_social_links">
              <div className='linkbox'>
                <li className='sociallink'><a href='https://www.facebook.com/profile.php?id=100088980592808&mibextid=ZbWKwL'><img src={facebook} alt="" width="40px"/></a>
                </li>
                <li className='sociallink'><a href="https://instagram.com/elevate2k23?igshid=YmMyMTA2M2Y="><img src={instagram} alt="" width="40px"/></a>
                </li>
                <li className='sociallink'><a href="#"><img src={twitter} alt="" width="40px"/></a>
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
              <button className='endbtn' onClick={openTeam}>Our Team</button>
              <li><a href=''>Digvijay Shingare: +91 8485006432</a>
              </li>
              <li><a href=''>Ashutosh Birajdar: +91 9561432556</a>
              </li>
              {/* <li><a href=""></a>
              </li> */}
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
