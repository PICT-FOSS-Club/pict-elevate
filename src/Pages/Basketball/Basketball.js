import React from 'react';
import Bcarousel from '../Carousel/Bcarousel';
import { Fade, Zoom } from 'react-reveal';
import boy from "../../images/boy.png";
import girl from "../../images/girl.png";
import finger from "../../images/finger.png";
import uparrow from "../../images/uparrow.png";
import './basketball.css';
import trophy from "../../images/trophy.png";
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const Basketball = () => {
  const openform = () =>
  {
    window.location.href = "https://forms.gle/BdroFbFXJNji3D9s7";
  };

  function Scroll() {
    window.scroll(0,0); 
}

  return (
    <>
    <Navbar/>
    <div className='page'>
        {/* <button className='btnn' onClick={takemeback}> Back</button> */}
        <div className="containee1">
        <Fade left duration={1500}>
            <div className="contentt">
               <div className="mainheadd">
                   <h1>"Everything negative - pressure, challenges - is all an opportunity for me to rise."</h1>
               </div>
               <div className="span"> - Kobe Bryant</div>
            </div>
         </Fade>
         <Zoom top duration={2000}>
           <div className="headingg">Basketball</div>
        </Zoom>

            <div className="spann"><b className='orange'>Pune Institute of Computer Technology</b> invites you to showcase your hooping skills.</div>
        </div>


        <div className="datesection">
        <div className="datebox">
          <div className="dates">
            4
          </div>
          <div className="textspan">FEB</div>
        </div>
        <div className="datetext">to</div>
        <div className="datebox">
          <div className="dates">
            12
          </div>
          <div className="textspan">FEB</div>
        </div>
        </div>
        
        <Fade left duration={1500}>
        <div className='Venue'>
          <div className='vhead'>Venue</div>
          <div className='vpara'>Pune Institute of Computer technology</div>
        </div>
        </Fade>
        
        <Fade top duration={1400}>
        <div className='Regfees'>
          <span className='head'>Registration Fees</span>
          <span className='Reghead'>Inter-collegiate</span>
          <div className='feesSect'>
            <Fade left duration={2000}>
              <div className='fees'>
                 <img src={boy} alt="" className="feesimg"/>
                 Boys team: <span>1800/- </span>
              </div>
            </Fade>
            <Fade right duration={2000}>
              <div className='fees'>
                <img src={girl} alt="" className="feesimg"/>
                Girls team: <span>1500/- </span>
              </div>
            </Fade>
          </div>
        <span className='Reghead'>Inter-corporate</span>
        <div className='feesSect'>
            <Fade left duration={2000}>
              <div className='fees'>
                 <img src={boy} alt="" className="feesimg"/>
                 Men's team: <span>12000/- </span>
              </div>
            </Fade>
            <Fade right duration={2000}>
              <div className='fees'>
                <img src={girl} alt="" className="feesimg"/>
                Women's team: <span>12000/- </span>
              </div>
            </Fade>
          </div>
        </div>
        </Fade> 

        <Zoom top duration={1500}> 
        <div className='Regbtn'>
          <img src={finger} alt="" className="feesimg anim"/>
          <button className='regbtn' onClick={openform}>Register now</button>
        </div>
        </Zoom>

        <Fade left duration={1500} >
        <div className='prizeSect'>
          Cash prizes upto <span className='prize'>1.25 Lakhs</span>
          <p>All participants will receive certificates. Winners will receive Trophy<img src={trophy} className="trophy" alt="" width="40px" /> , individual awards and cash prizes. </p> 
        </div>
        </Fade>

        <div className='noteSect'>
          <span className='notehead'>NOTE : </span>
          <p className='notepara'>Each player must carry college ID card and current year fee receipt.</p>
        </div>

        <Fade left duration={1500}>
        <div className='contactSect'>
          <div className='contacts'>
            Devang Papinwar: <span> +91 7420039018</span>
          </div>
          <div className='contacts'>
            Harshvardhan Atkare: <span> +91 9922889487</span>
          </div>
        </div>
        </Fade>
        


        <div className="Carousel">
          <Bcarousel/>
        </div>

        <div id="btn">
         <button className='endbtn' onClick={Scroll}>Scroll up <img src={uparrow} alt="" width="20px"/></button>
        </div>
        
        <Footer/>
    </div>
    </>
  );
}

export default Basketball;
