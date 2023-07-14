import React from "react";
import p1 from "../../images/volleyball/p1.jpg";
import p2 from "../../images/volleyball/p2.jpg";
import p3 from "../../images/volleyball/p3.jpg";
import p4 from "../../images/volleyball/p4.jpg";
import p5 from "../../images/volleyball/p5.jpg";
import p6 from "../../images/volleyball/p6.jpg";
import p7 from "../../images/volleyball/p7.jpg";
import p8 from "../../images/volleyball/p8.jpg";
import p9 from "../../images/volleyball/p9.jpg";
import p10 from "../../images/volleyball/p10.jpg";
import p11 from "../../images/volleyball/p11.jpg";
import p12 from "../../images/volleyball/p12.jpg";
import p13 from "../../images/volleyball/p13.jpg";
import p14 from "../../images/volleyball/p14.jpg";
import p15 from "../../images/volleyball/p15.jpg";
import p16 from "../../images/volleyball/p16.jpg";
import p17 from "../../images/volleyball/p17.jpg";
import "./carouselstyle.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";

const Vcarousel = () => {
  return (
   <>
   <Container>
    <Row>
      <Col>
      <Carousel  autoPlay={true}
    interval={2000}
    controls={true}
    indicators={true}>
        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p1} className="d-block w-100" alt="" />
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p2} className="d-block w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p3} className="d-block w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p4} className="d-block w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p5} className="d-block w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p6} className="d-block w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p7} className="d-block w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p8} className="d-block w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p9} className="d-block w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p10} className="d-block w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p11} className="d-block w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p12} className="d-block w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p13} className="d-block w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p14} className="d-block w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p15} className="d-block w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p16} className="d-block w-100 " alt=""/>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ maxHeight: "60vh" }} src={p17} className="d-block w-100 " alt=""/>
        </Carousel.Item>
      </Carousel>
      </Col>
    </Row>
   </Container>
      
  </>

  );
}


export default Vcarousel;
