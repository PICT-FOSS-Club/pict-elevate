import React from "react";
import { Link } from "react-router-dom";
import About from "../../Pages/About/About";
import Navbar from "../navbar/Navbar";
import dropArrow from "../../images/dropArrow.png";
import "./body.css";
import MyCarousel from "../../Pages/Carousel/MyCarousel";
import Timer from "../Timer/Timer";
import src from "../../images/video.mp4";
import Basketball from "../../images/Basketball.png";
import Volleyball from "../../images/Volleyball.png";
import  Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";

const Body = () => {
  const fun=()=>
  {
     window.location.href="#about";  
  };

  const slides = [
      {
        src:
          "https://www.linkpicture.com/q/Director.png"
      },
      {
        src:
          "https://www.linkpicture.com/q/stgandhe.jpg"
      },
      {
        src:
          "https://www.linkpicture.com/q/Ravi_Murumkar2_1.jpg"
      },
      {
        src:
          "https://www.linkpicture.com/q/WhatsApp-Image-2022-12-27-at-17.14.18-removebg-preview.jpg"
      }
    ];

  return (
    <>
    <div className="body">
      <Navbar/>
     <div className="containe1">
      <div className="content">
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
            18
          </div>
          <div className="textspan">FEB</div>
        </div>
        <div className="datetext">to</div>
        <div className="datebox">
          <div className="dates">
            26
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
          <img src={dropArrow} className="arrowimg" onClick={fun}alt="" width="50px"/>
        </div>
        <div className="Arrow">
          <img src={dropArrow} className="arrowimg" onClick={fun}alt="" width="50px"/>
        </div>
      </div>
      </Fade>
       

      {/* Event Section Started */}
      <Fade left duration={1500}>
      <div className="EventBox">
      <div className="EveHeader">Events</div>
      <div className="Events">
         <div className="eventlinks">
         <Link to="/Basketball" className='l'>
                <img src={Basketball} className= "limg" alt=" " width="30px"/>Basketball
          </Link>
         </div>
         <div className="eventlinks">
         <Link to="/Volleyball" className='l'>
                <img src={Volleyball} className= "limg" alt="" width="30px"/>Volleyball
        </Link>
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

      <Zoom top duration={1500}>
      <div className="Location">
       <div className="EveHeader text">Visit Our Campus</div>
       <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5761897254215!2d73.84864491497326!3d18.457542087445717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1672184719387!5m2!1sen!2sin" width="800px" height="400px" style={{border:0}} loading="lazy"></iframe>
      </div> 
      </div>
      </Zoom>

    </div>
    </>
  );
};

export default Body;
