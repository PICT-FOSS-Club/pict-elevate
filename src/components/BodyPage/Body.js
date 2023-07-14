import React from "react";
import { Link } from "react-router-dom";
import About from "../../Pages/About/About";
import Navbar from "../navbar/Navbar";
import dropArrow from "../../images/dropArrow.png";
import "./body.css";
import download from "../../images/download.png";
import uparrow from "../../images/uparrow.png";
import MyCarousel from "../../Pages/Carousel/MyCarousel";
import Timer from "../Timer/Timer";
import brochure from "../../images/brochure.jpeg";
import src from "../../images/video.mp4";
import sponsorvid from "../../images/Elevate23Sponsors.mp4";
import Budhani from "../../images/sponsors/Budhani_updated.jpeg";
import Breadbash from "../../images/sponsors/breadbash.jpg";
import Juice from "../../images/sponsors/Juice.jpg";
import steambuncafe from "../../images/sponsors/steambuncafe.png";
import Kekiz from "../../images/sponsors/kekiz.png";
import decathSGS from "../../images/decathSGS.jpg";
import BelgianWaffle from "../../images/BelgianWaffle.jpeg";
import Wellness from "../../images/Wellness.jpeg";
import Basketball from "../../images/Basketball.png";
import Volleyball from "../../images/Volleyball.png";
import pictlogo from '../../images/pictlogo.png';
import  Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";
import Footer from "../footer/Footer";

const Body = () => {
  const fun=()=>
  {
     window.location.href="#about";  
  };

  function Scroll() {
    window.scroll(0,0); 
}

  return (
    <>
    <div className="body">
      <Navbar/>
      <div className="containe1" id="home">
      <div className="content">
        <div  className="contimg"><img src={pictlogo} alt="" width="180px"/></div>
        <div className="mainhead"><h1>SCTR's</h1></div>
        <div className="mainhead"><h1>Pune Institute of Computer Technology</h1></div>
        <div className="span">presents</div>
        <Fade top duration={1000}>
            <div className="heading">ELEVATE '23</div>
        </Fade>
        <div className="span">An Inter-Corporate and Inter-Collegiate Sports Tournament</div>
      </div>
      </div>
      
      <div className="datesection">
        <div className="datebox">
          <div className="dates">
            7
          </div>
          <div className="textspan">FEB</div>
        </div>
        <div className="datetext">to</div>
        <div className="datebox">
          <div className="dates">
            10
          </div>
          <div className="textspan">FEB</div>
        </div>
      </div>

      <Zoom top duration={2500}>
        <Timer/>
      </Zoom>

      <Fade top duration={1700}>
      <div className="ArrowBox">
        <div className="Arrow">
          <img src={dropArrow} className="arrowimg" onClick={fun} alt="" width="50px"/>
        </div>
        <div className="Arrow">
          <img src={dropArrow} className="arrowimg" onClick={fun} alt="" width="50px"/>
        </div>
      </div>
      </Fade>
       

      {/* Event Section Started */}
      <Fade top duration={1500}>
      <div className="EventBox">
      <div className="EveHeader">Events</div>
      <div className="Events">
         <div className="eventlinks">
          <Fade left duration={1800}>
            <Link to="/basketball" onClick={Scroll} className='l'>
                <img src={Basketball} className= "limg" alt="" width="30px"/>Basketball
            </Link>
         </Fade>
        </div>
        <div className="eventlinks">
         <Fade right duration={1800}>
            <Link to="/volleyball" onClick={Scroll} className='l'>
                <img src={Volleyball} className= "limg" alt="" width="30px"/>Volleyball
            </Link>
         </Fade>
        </div>
      </div>
      </div>
      </Fade>

      {/* Event Section Ended */}

      <div className="Carousel">
        <MyCarousel/>
      </div>

      {/* Video Section started */}
      <Fade left duration={1700}>
      <div className="Video">
        <div className="EveHeader">Glimpses of Elevate '2020</div>
        <div className="vidsection">
          <video loop muted autoPlay  width="100%">
              <source src={src} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
      </Fade>      
      {/* Video Section Ended */}

      
      <About/>

      <Fade left duration={1700}>
      <div className="Video">
        <div className="EveHeader">Meet Our Sponsors</div>
        <div className="vidsection">
          <video loop muted autoPlay  width="100%">
              <source src={sponsorvid} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
      </Fade> 

      <div id="sponsors"></div>
      <Fade top duration={1200}>
      <div className="SponsorSect">
        <h2>Our Sponsors</h2>
        <div className="sponsbox">
          <Fade left duration={2200}>
          <a href="https://www.budhanibros.com/" rel="noreferrer" target="_blank"><img className="spimg" src={Budhani} alt=""/></a>
          </Fade>
          <Fade right duration={2200}>
          <a href="https://www.decathlon.in/" rel="noreferrer" target="_blank"><img className="spimg" src={decathSGS} alt=""/></a>
          </Fade>
          <Fade left duration={2200}>
          <a href="https://thebelgianwaffle.co/" rel="noreferrer" target="_blank"><img className="spimg" src={BelgianWaffle} alt=""/></a>
          </Fade>
          <Fade right duration={2200}>
          <a href="https://www.wellnessforever.com/" rel="noreferrer" target="_blank"><img className="spimg" src={Wellness} alt=""/></a>
          </Fade>
          <Fade left duration={2200}>
          <a href="/" rel="noreferrer" target="_blank"><img className="spimg" src={Breadbash} alt=""/></a>
          </Fade>
          <Fade right duration={2200}>
          <a href="/" rel="noreferrer" target="_blank"><img className="spimg" src={Kekiz} alt=""/></a>
          </Fade>
          <Fade left duration={2200}>
          <a href="/" rel="noreferrer" target="_blank"><img className="spimg" src={steambuncafe} alt=""/></a>
          </Fade>
          <Fade right duration={2200}>
          <a href="/" rel="noreferrer" target="_blank"><img className="spimg" src={Juice} alt=""/></a>
          </Fade>
        </div>
      </div>
      </Fade>

      <div className="Brochure">
        <div><img className="brochureimg" src={brochure} alt="" width="40px"/></div>
        <div>
          <button className="endbtn">
            <a className="dwnlink" href="https://drive.google.com/file/d/1bHiCsWdpObZGAioa5_jt58Xs5oQoiTd1/view?usp=share_link" rel="noreferrer" target="_blank" download={true}>Download Brochure<img className="dwnimg" src={download} alt="" width="40px"/></a>
          </button>
        </div>
      </div>

      <Zoom top duration={1500}>
      <div className="Location" id="map">
       <div className="EveHeader text">Visit Our Campus</div>
       <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5761897254215!2d73.84864491497326!3d18.457542087445717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1672184719387!5m2!1sen!2sin" title="Map" width="800px" height="400px" style={{border:0}} loading="lazy"></iframe>
      </div> 
      </div>
      </Zoom>
      <div id="btn">
         <button className='endbtn' onClick={Scroll}>Scroll up <img src={uparrow} alt="" width="20px"/></button>
      </div>
     
      <Footer/>
    </div>
    </>
  );
};

export default Body;
