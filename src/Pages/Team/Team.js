import React from 'react';
import './team.css';
import instagram from '../../images/instagram.png';
import LinkedIn from '../../images/linkedin.png';
import Digvijay from '../../images/Digvijay.webp';
import Ashutosh from '../../images/Ashutosh.jpeg';
import Vinayak from '../../images/Vinayak.JPG';
import Fade from 'react-reveal';

const Team = () => {
  const takemeback = () =>
  {
    window.location.href = "/";
  };
  return (
    <>
    <button className='teambtn'onClick={takemeback}>Back</button>
    <div className="responsive-container-block container">
      <Fade top duration={1500}>
  <p className="text-blk team-head-text">
    Developer Team&nbsp;
  </p>
  </Fade>
  <div className="responsive-container-block">
    
    <Fade left duration={1700}>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
          <img className="team-member-image" src={Digvijay} alt=""/>
        </div>
        <p className="text-blk name">
          Digvijay Shingare
        </p>
        <p className="text-blk position">
          Developer
        </p>
        {/* <p className="text-blk feature-text">
          
        </p> */}
        <div className="social-icons">
            <a href="https://www.instagram.com/digvijay_mrperfect/" target="_blank" rel="noreferrer">
              <img src={instagram} alt="" width="40px" />
            </a>
            <a href="https://www.linkedin.com/in/digvijay-shingare-373373237/" target="_blank" rel="noreferrer">
              <img src={LinkedIn} alt="" width="40px" />
            </a>
        </div>
      </div>
    </div>
    </Fade>

    <Fade right duration={1700}>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
          <img className="team-member-image" src={Ashutosh} alt="" />
        </div>
        <p className="text-blk name">
          Ashutosh Birajdar
        </p>
        <p className="text-blk position">
          Developer
        </p>
        {/* <p className="text-blk feature-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
        <div className="social-icons">
            <a href="https://instagram.com/spiritual.being.369?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
              <img src={instagram} alt="" width="40px" />
            </a>
            <a href="https://www.linkedin.com/in/ashutosh-birajdar" target="_blank" rel="noreferrer">
              <img src={LinkedIn} alt="" width="40px" />
            </a>
        </div>
      </div>
     </div>
     </Fade>

     <Fade left duration={1700}>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
          <img className="team-member-image" src={Vinayak} alt=""/>
        </div>
        <p className="text-blk name">
          Vinayak Jamadar
        </p>
        <p className="text-blk position">
          Developer
        </p>
        {/* <p className="text-blk feature-text">
          
        </p> */}
        <div className="social-icons">
            <a href="/Team" target="_blank" rel="noreferrer">
              <img src={instagram} alt="" width="40px" />
            </a>
            <a href="https://www.linkedin.com/in/vinayakjamadar/" target="_blank" rel="noreferrer">
              <img src={LinkedIn} alt="" width="40px" />
            </a>
        </div>
      </div>
    </div>
    </Fade>
    </div>
  </div>
  </>
  );
}

export default Team;
