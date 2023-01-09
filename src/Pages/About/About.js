import React from 'react';
import Fade from 'react-reveal/Fade';
import './about.css';

const About = () => {
  return (
    <>
    <div className='About' id='about'>
    <div className='aboutContainer'>
      <Fade left duration={1500}>
      <div className='Box'>
        <div className='Row'><h1 className='text-warning boxHeader'>About PICT</h1></div>
          <div className='paragraph'>
            <p><span>P</span>une Institute of Computer Technology (PICT), an elite academic Institute located in Pune (India), which is rightly known as “The Oxford of the East”, playing an inspiring role in the education sector since its establishment in 1983.<br></br>PICT ranked 8th among private Engineering Institutions in India, 1st among all private Engineering Institutions in Maharashtra, and 4th among all Engineering Institutions including IITs, NITs, and Govt.Colleges in Maharashtra (as per the EDU-RAND ranking- 2015). <br></br>As per the NIRF 2020 Ranking, PICT is in rank band of 201 to 250.PICT is not only recognized for excellence in academics but also in the sports at intercollegiate, university, and zonal level. PICT encourages sports as a tool to engage the energies of the youth and provide a vital avenue for their self-actualization and the expression of their capabilities.</p>
          </div>
      </div>
      </Fade>
      <Fade left duration={1500}>
      <div className=' Box'>
        <div className='Row'><h1 className='text-warning boxHeader'>About Elevate</h1></div>
          <div className='paragraph'>
            <p><span>S</span>port allows students to compete against skilled athletes from other colleges and universities. Alongside competition and performance, sport lays emphasis on student initiative and team management, allowing participants to shape their own experience.
PICT sports club was founded in 2014. The motto of this club is to bring the spirit of joy and happiness to the essence in the busy schedule of students. It reflects the essence of practice and synergy, to grab a win. 
Elevate is an inter-engineering college event conducted by PICT. This event is for colleges from all over Maharastra as well as Corporate section people. Elevate gives them the opportunity to follow a passion for sports. Basketball and volleyball are the sports that brings in the thrill of victory all around.</p>
          </div>
      </div>
      </Fade>
    </div>
    </div>
    </>
  );
}

export default About;
