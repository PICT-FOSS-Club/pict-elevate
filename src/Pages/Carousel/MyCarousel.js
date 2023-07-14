import React from "react";
import pathare from "../../images/400_400/pathare.jpeg";
import Jansari from "../../images/400_400/Jansari.jpg";
import Director from "../../images/400_400/Director.png";
import Sandur from "../../images/400_400/Sandur.png";
import bagade from "../../images/400_400/bagade.jpg";
import Principal from "../../images/400_400/Principle.jpg";
import Gaikwad from "../../images/400_400/Gaikwad.jpg";
import RS from "../../images/400_400/RS.png";
import Siriskar from "../../images/400_400/Siriskar.png";
import "./carouselstyle.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";



const MyCarousel = () => {
  return (
   <>
   <div className = "CarouselHead">Our Mentors</div>
   <Container>
    <Row>
      <Col>
      <Carousel  autoPlay={true}
    interval={2000}
    controls={true}
    indicators={true}>
        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={RS} className="w-100" alt="" />
          <Carousel.Caption>
          <h3 className="carohead">Mr.R.S.Kothawale</h3>
          <p className="caropara">Managing Trustee, SCTR</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={Siriskar} className=" w-100 " alt=""/>
          <Carousel.Caption>
          <h3 className="carohead">Mr.Swastik Siriskar</h3>
          <p className="caropara">Secretary, SCTR</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={Director} className=" w-100 " alt=""/>
          <Carousel.Caption>
          <h3 className="carohead">Dr.P.T. Kulkarni</h3>
          <p className="caropara">Director, PICT</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={Principal} className=" w-100 " alt=""/>
          <Carousel.Caption>
          <h3 className="carohead">Dr.S.T.Gandhe</h3>
          <p className="caropara">Principal, PICT</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={pathare} className=" w-100 " alt=""/>
          <Carousel.Caption>
          <h3 className="carohead">Mr.M.A.Patare</h3>
          <p className="caropara">Sports Director</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={Gaikwad} className=" w-100 " alt=""/>
          <Carousel.Caption>
          <h3 className="carohead">Mr.S.V.Gaikwad</h3>
          <p className="caropara">Sports Incharge</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={Jansari} className=" w-100 " alt=""/>
          <Carousel.Caption>
          <h3 className="carohead">Mr.M.R.Jansari</h3>
          <p className="caropara">Member, Sports Committee</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={Sandur} className=" w-100" alt=""/>
          <Carousel.Caption>
          <h3 className="carohead">Mrs.J.M.Sandur</h3>
          <p className="caropara">Member, Sports Committee</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={bagade} className="w-100" alt=""/>
          <Carousel.Caption>
          <h3 className="carohead">Mr.S.U.Bagade</h3>
          <p className="caropara">Member, Sports Committee</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Col>
    </Row>
   </Container>
      
  </>

  );
}


export default MyCarousel;
